const path = require("path");

const buildPages = (pages = [], templatePath = "", createPage) => {
  if (!pages || pages.length === 0 || !templatePath) return;

  pages.forEach((page, idx) => {
    createPage({
      path: page.url,
      component: path.resolve(templatePath),
      context: {
        id: page.id,
        lang: page.lang,
        uid: page.uid,
        reviews: page.reviews,
      },
    });
  });
};

module.exports = buildPages;
