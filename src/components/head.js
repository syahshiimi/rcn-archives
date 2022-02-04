import React from "react";
import { Helmet } from "react-helmet";

export const Head = ({ title }) => {
  return (
    <Helmet
      defaultTitle="Default Title | My Website"
      title={title}
      titleTemplate="%s"
    />
  );
};
