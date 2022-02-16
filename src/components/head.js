import React from "react";
import { Helmet } from "react-helmet";
// import favicon from "../assets/icon.png";
export const Head = ({ title }) => {
  return (
    <Helmet
      defaultTitle="Default Title | My Website"
      title={title}
      titleTemplate="%s | RCW-Asia"
      // link={[{ rel: "icon", type: "image/png", href: favicon }]}
    />
  );
};
