import React from "react";

const Metadata = ({ pageData }) => {
  return (
    <>
      <title>{pageData?.meta_title || "Welcome"}</title>
    </>
  );
};

export default Metadata;
