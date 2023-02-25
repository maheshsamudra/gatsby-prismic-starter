import React from "react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import componentResolver from "./config/prismic/componentResolver";

import "./src/styles/bootstrap/index.scss";

const WrapWithProviders = ({ children }) => (
  <>
    <PrismicPreviewProvider
      repositoryConfigs={[
        {
          repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
          linkResolver: require("./config/prismic/linkResolver.js")
            .linkResolver,
          componentResolver,
        },
      ]}
    >
      {children}
    </PrismicPreviewProvider>
  </>
);

export default WrapWithProviders;
