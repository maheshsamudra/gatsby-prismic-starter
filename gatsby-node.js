const buildPages = require("./build/buildPages");
const graphQuery = require("./build/buildQuery");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const query = await graphQuery();

  console.log(query);

  const queryData = await graphql(query);

  const homePages = queryData?.data?.allPrismicHomePage?.nodes || [];
  buildPages(homePages, "src/templates/HomePage/index.jsx", createPage);

  const pages = queryData?.data.allPrismicPage?.nodes || [];
  buildPages(pages, "src/templates/Page/index.jsx", createPage);
};
