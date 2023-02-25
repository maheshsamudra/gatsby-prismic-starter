const lodash = require("lodash");
const fs = require("fs");
const pascalCase = (name = "") => {
  return lodash.upperFirst(lodash.camelCase(name));
};

module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("Component", {
    description: "Creates a reusable component in components folder",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name: ",
      },
    ],
    actions: (props) => {
      const parsedName = pascalCase(props.name);

      fs.writeFileSync("build/buildQuery.js", getNewQuery(), "utf-8");

      return [
        {
          type: "add",
          path: `src/components/${parsedName}/index.jsx`,
          templateFile: "plop-templates/component/index.hbs",
          data: { parsedName },
        },
        {
          type: "add",
          path: `src/components/${parsedName}/index.module.scss`,
          templateFile: "plop-templates/component/stylesheet.hbs",
        },
      ];
    },
  });
  plop.setGenerator("Page Template", {
    description: "Creates a page template in templates folder",
    prompts: [
      {
        type: "input",
        name: "templateName",
        message: "Template name:",
      },
      {
        type: "input",
        name: "componentName",
        message: "Initial component name:",
      },
      {
        type: "input",
        name: "prismicCustomTypeSlug",
        message: "Prismic custom type slug:",
      },
      {
        type: "input",
        name: "templateName",
        message: "Template name:",
      },
    ],
    actions: (props) => {
      const parsedTemplateName = pascalCase(props.templateName);
      const parsedComponentName = pascalCase(props.componentName);
      const prismicCustomTypeName = lodash.camelCase(
        `prismic ${props.prismicCustomTypeSlug}`
      );

      const prismicQueryName = lodash.camelCase(
        `all prismic ${props.prismicCustomTypeSlug}`
      );
      return [
        {
          type: "add",
          path: `src/templates/${parsedTemplateName}/index.jsx`,
          templateFile: "plop-templates/template/index.hbs",
          data: {
            parsedTemplateName,
            parsedComponentName,
            prismicCustomTypeName,
          },
        },
        {
          type: "add",
          path: `src/templates/${parsedTemplateName}/components/${parsedComponentName}.jsx`,
          templateFile: "plop-templates/template/component.hbs",
          data: { parsedComponentName },
        },
        {
          type: "add",
          path: `build/buildQuery/queries/${prismicQueryName}.js`,
          templateFile: "plop-templates/template/graphQuery.hbs",
          data: { prismicQueryName },
        },
      ];
    },
  });
};

const getNewQuery = () => {
  const existingQuery = require("./build/buildQuery");

  const query = JSON.parse(existingQuery);

  console.log(query.allPrismicPage);

  return `const query = \`
    ${existingQuery}\`;

module.exports = query;
`;
};
