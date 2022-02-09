import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import asia from "../../content/asia-mapshaper.json";
import { countryData } from "../data";

/////////////////////////////////
/////// Tablet & Desktop Only ///
/////////////////////////////////
const BrowseMap = () => {
  return (
    <Layout>
      <BrowseMapWrapper>
        <h1 className="c-browsemap__title">Browse Archive Map</h1>
        <div className="l-browsemap">
          {" "}
          <ComposableMap
            className="c-browsemap"
            data-tip=""
            // height={300}
            // width={900}
          >
            <ZoomableGroup center={[85, 20]} zoom={2}>
              {" "}
              <Geographies geography={asia}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
                }
              </Geographies>
              {countryData.map(({ name, coordinates, markerOffset }) => {
                console.log(name, coordinates, markerOffset);
                return (
                  <Marker key={name} coordinates={coordinates}>
                    <circle className="c-browsemap__marker"></circle>
                  </Marker>
                );
              })}
              {countryData.map(
                ({ name, coordinates, dx, dy, curve, textY }) => {
                  console.log(name, coordinates, curve);
                  return (
                    <Annotation
                      key={name}
                      subject={coordinates}
                      dx={dx}
                      dy={dy}
                      curve={curve}
                      connectorProps={{
                        stroke: "#242423",
                        strokeWidth: 1,
                        strokeLinecap: "round",
                      }}
                    >
                      <text
                        className="c-browsemap__annotateText"
                        x={textY}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                      >
                        {name}
                      </text>
                    </Annotation>
                  );
                }
              )}
            </ZoomableGroup>
          </ComposableMap>
        </div>
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

    .l-browsemap {
      border: 1px solid black;
      border-radius: calc(8vh);
    }
    .c-browsemap__title {
      margin-bottom: 6vh;
    }

    .c-browsemap {
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* background-color: var(--secondary-clr-250); */
      /* background-color: var(--primary-clr-50); */
      padding: 0vh 1vw;
      height: 100;
    }
    .rsm-geographies {
      fill: var(--primary-clr-100);
      stroke: var(--primary-clr-150);
      display: flex;
      justify-content: center;
    }

    .c-browsemap__marker {
      fill: var(--primary-clr-50);
      stroke: var(--primary-clr-150);
      r: 8;
    }

    .c-browsemap__marker:hover {
      fill: var(--primary-clr-150);
    }
    .c-browsemap__annotateText {
      font-size: 0.6rem;
      font-family: "Ubuntu", sans-serif;
    }
  }
`;

export default BrowseMap;
