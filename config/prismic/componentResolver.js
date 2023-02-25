import HomePageTemplate from "../../src/templates/HomePage";
import PageTemplate from "../../src/templates/Page";

const componentResolver = () => {
  return {
    home_page: HomePageTemplate,
    page: PageTemplate,
  };
};

export default componentResolver;
