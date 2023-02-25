import React from "react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import HomePageTemplate from "./src/templates/HomePage";
import CommonPageTemplate from "./src/templates/Page_old";

import "./src/styles/bootstrap/index.scss";

const WrapWithProviders = ({ children }) => (
  <>
    <PrismicPreviewProvider
      repositoryConfigs={[
        {
          repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
          linkResolver: require("./build/linkResolver.js").linkResolver,
          componentResolver: () => ({
            home_page: HomePageTemplate,
            page: CommonPageTemplate,
          }),
        },
      ]}
    >
      {children}
    </PrismicPreviewProvider>
  </>
);

export default WrapWithProviders;
