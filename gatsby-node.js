const buildPages = require("./build/buildPages");
const graphQuery = require("./build/buildQuery");
const prismicPages = require("./build/buildQuery/queryFiles");
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const query = await graphQuery();

  const queryData = await graphql(query);

  const pages = await prismicPages();

  pages.forEach((page, idx) => {
    const templateName = page.replace("allPrismic", "").replace(".js", "");
    const queryName = page.replace(".js", "");

    const pages = queryData?.data?.[queryName]?.nodes || [];

    buildPages(pages, `src/templates/${templateName}/index.jsx`, createPage);
  });

  // const homePages = queryData?.data?.allPrismicHomePage?.nodes || [];
  // buildPages(homePages, "src/templates/HomePage/index.jsx", createPage);
  //
  // const pages = queryData?.data.allPrismicPage?.nodes || [];
  // buildPages(pages, "src/templates/Page/index.jsx", createPage);
};
