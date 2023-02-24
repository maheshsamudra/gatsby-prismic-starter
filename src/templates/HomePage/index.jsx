import React from "react";
import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import Layout from "../../components/Layout";
import { PrismicRichText } from "@prismicio/react";
import Metadata from "../../components/Metadata";

const HomePageTemplate = ({ data }) => {
  const pageData = data?.prismicHomePage.dataRaw;

  return (
    <Layout data={pageData}>
      <PrismicRichText field={pageData?.title} />
    </Layout>
  );
};

export default withPrismicPreview(HomePageTemplate);

export const Head = ({ data }) => {
  return <Metadata pageData={data?.prismicHomePage?.dataRaw} />;
};

export const query = graphql`
  query homePageQuery($id: String) {
    prismicHomePage(id: { eq: $id }) {
      _previewable
      dataRaw
    }
  }
`;
