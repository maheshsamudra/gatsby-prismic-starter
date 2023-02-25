import React from "react";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { graphql } from "gatsby";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import Metadata from "../../components/Metadata";
import HeroSection from "./components/HeroSection";

const CommonPageTemplate = ({ data }) => {
  const pageData = data?.prismicPage?.dataRaw;

  return (
    <>
      <PrismicRichText field={pageData?.title} />
      <SliceZone
        slices={pageData?.dataRaw?.body}
        components={{
          hero_section: HeroSection,
        }}
      />
    </>
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
