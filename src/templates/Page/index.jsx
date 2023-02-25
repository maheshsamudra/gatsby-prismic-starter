import React from "react";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { graphql } from "gatsby";
import { SliceZone } from "@prismicio/react";
import Metadata from "../../components/Metadata";
import Hero from "./components/Hero";

const components = {
  hero_section: Hero,
}

const Page = ({ data }) => {
  const pageData = data?.prismicPage?.dataRaw;

  return (
    <>
      <h1 className="text-center mt-5">Page</h1>
      <SliceZone
        slices={pageData?.dataRaw?.body}
        components={components}
      />
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
