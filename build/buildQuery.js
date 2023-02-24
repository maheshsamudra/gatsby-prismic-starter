const query = `
    {
      allPrismicHomePage {
        nodes {
          id
          lang
          url
        }
      }
      allPrismicPage {
        nodes {
          id
          lang
          url
          uid
        }
      }
    }`;

module.exports = query;
