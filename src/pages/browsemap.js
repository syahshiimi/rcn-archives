import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import asia from "../../content/asia-mapshaper.json";

/////////////////////////////////
/////// Tablet & Desktop Only ///
/////////////////////////////////
const BrowseMap = () => {
  const markers = [
    {
      markerOffset: -15,
      name: "Japan",
      coordinates: [138.2529, 36.2048],
    },
  ];
  return (
    <Layout>
      <BrowseMapWrapper>
        <h1 className="c-browsemap__title">Browse Archive Map</h1>
        <ComposableMap className="c-browsemap" data-tip="" height={400}>
          <ZoomableGroup center={[80, 20]} zoom={1.5}>
            {" "}
            <Geographies geography={asia}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => {
              console.log(name, coordinates, markerOffset);
              return (
                <Marker key={name} coordinates={coordinates}>
                  <text textAnchor="middle" y={markerOffset} fill="#F53">
                    {name}
                  </text>
                </Marker>
              );
            })}
          </ZoomableGroup>
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
    text-align: center;
  }

  .c-browsemap {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-clr-250);
    /* background-color: var(--primary-clr-50); */
    /* border: 1px solid black; */
    padding: 0vh 1vw;
  }
  .rsm-geography {
    display: flex;
    justify-content: center;
  }
`;

export default BrowseMap;
