import React from "react";
import WrapWithProviders from "./WrapWithProviders";
import Layout from "./src/components/Layout";

export const wrapRootElement = ({ element }) => (
  <WrapWithProviders>{element}</WrapWithProviders>
);

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
