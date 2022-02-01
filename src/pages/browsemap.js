import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import asia from "../../content/asia.json";

/////////////////////////////////
/////// Tablet & Desktop Only ///
/////////////////////////////////
const BrowseMap = () => {
  return (
    <Layout>
      <BrowseMapWrapper>
        <h1 className="c-browsemap__title">Browse Archive Map</h1>
        <ComposableMap
          className="c-browsemap"
          projectionConfig={{ scale: 200 }}
        >
          <Geographies geography={asia}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </BrowseMapWrapper>
    </Layout>
  );
};

const BrowseMapWrapper = styled.article`
  display: none;
  @media (min-width: 902px) {
    padding: 4vh var(--padding-mobile) 6vh var(--padding-mobile);
    display: grid;
    place-self: center-stretch;
    text-align: center;

    .c-browsemap {
      padding: 1vh 5vw;
      border: 1px solid var(--primary-clr-200);
      border-radius: 25px;
    }
  }
`;

export default BrowseMap;
