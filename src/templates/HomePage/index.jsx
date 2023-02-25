import React from "react";
import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import Metadata from "../../components/Metadata";
import HeroSection from "./components/HeroSection";

const HomePageTemplate = ({ data }) => {
  const pageData = data?.prismicHomePage.dataRaw;

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
