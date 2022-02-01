import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

/////////////////////////////////
/////// Tablet & Desktop Only ///
/////////////////////////////////
function BrowseMap() {
  return (
    <Layout>
      <BrowseMapWrapper>
        <h1 className="c-browsemap__title">Browse Archive Map</h1>
      </BrowseMapWrapper>
    </Layout>
  );
}

const BrowseMapWrapper = styled.article`
  display: none;
  @media (min-width: 902px) {
    display: grid;
    place-self: center-stretch;
    text-align: center;
  }
`;

export default BrowseMap;
