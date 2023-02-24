import React from "react";
import WrapWithProviders from "./WrapWithProviders";

export const wrapRootElement = ({ element }) => (
    <WrapWithProviders>{element}</WrapWithProviders>
);
