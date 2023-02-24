import React from "react";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import { PrismicRichText } from "@prismicio/react";
import Metadata from "../../components/Metadata";

const CommonPageTemplate = ({ data }) => {
  const pageData = data?.prismicPage?.dataRaw;

  return (
    <Layout data={pageData}>
      <PrismicRichText field={pageData?.title} />
    </Layout>
  );
};

export default withPrismicPreview(CommonPageTemplate);

export const Head = ({ data }) => {
  return <Metadata pageData={data?.prismicPage?.dataRaw} />;
};

export const query = graphql`
  query prismicPageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      _previewable
      dataRaw
    }
  }
`;
