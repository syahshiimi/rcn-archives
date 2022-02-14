import React, { useState } from "react";
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
  // To create hover effect with tooltip, the useState will be iplemeneted
  const [content, setContent] = useState("");
  return (
    <Layout>
      <BrowseMapWrapper>
        <h1 className="c-browsemap__title">Browse Archive Map</h1>
        <ReactTooltip>{content}</ReactTooltip>
        <div className="l-browsemap">
          {" "}
          <ComposableMap className="c-browsemap" data-tip="">
            <ZoomableGroup center={[90, 20]} zoom={1.8}>
              {" "}
              <Geographies geography={asia}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const { name } = geo.properties;
                        setContent(`${name}`);
                      }}
                      onMouseLeave={() => {
                        setContent("");
                      }}
                      style={{
                        default: {
                          outline: "none",
                        },
                        hover: {
                          fill: "#333533",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#242423",
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
              {countryData.map(({ name, coordinates, markerOffset }) => {
                return (
                  <Marker key={name} coordinates={coordinates}>
                    <circle className="c-browsemap__marker"></circle>
                  </Marker>
                );
              })}
              {countryData.map(
                ({ name, coordinates, dx, dy, curve, textY }) => {
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
    padding: 8vh var(--padding-desktop);
    display: grid;
    text-align: center;

    .l-browsemap {
      /* border: 1px solid black; */
      border-radius: calc(8vh);
      /* background-color: var(--secondary-clr-250); */
      display: flex;
      justify-content: center;
      margin: 2vh 10vw;
    }
    .c-browsemap__title {
      margin-bottom: 6vh;
      margin-top: 4vh;
    }

    .c-browsemap {
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* background-color: var(--primary-clr-50); */
      /* height: 550px; */
      /* width: 100%; */
      outline: none;

      :active {
      }
    }
    .rsm-geographies {
      fill: var(--primary-clr-100);
      stroke: var(--primary-clr-150);
      display: flex;
      stroke-width: 0.7x;
      justify-content: center;
    }

    .c-browsemap__marker {
      fill: var(--primary-clr-50);
      stroke: var(--primary-clr-150);
      r: 4;
    }

    .c-browsemap__marker:hover {
      fill: var(--primary-clr-150);
    }
    .c-browsemap__annotateText {
      font-size: 0.6rem;
      font-family: "Ubuntu", sans-serif;
    }

    .c-browsemap__annotateText:hover {
      fill: var(--primary-clr-150);
    }
  }
`;

export default BrowseMap;
