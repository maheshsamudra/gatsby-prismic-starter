import React from "react";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { graphql } from "gatsby";
import { SliceZone } from "@prismicio/react";
import Metadata from "../../components/Metadata";
import HeroSection from "./components/HeroSection";

const components = {
  hero_section: HeroSection,
};

const Page = ({ data }) => {
  const pageData = data?.prismicPage?.dataRaw;

  return (
    <>
      <SliceZone slices={pageData?.dataRaw?.body} components={components} />
    </>
  );
};

export default withPrismicPreview(Page);

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
