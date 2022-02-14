import React, { Component, useState } from "react";
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
import asia from "../../content/asia-mapshaper.json"; // geoJson
import { countryData } from "../data"; // coordinates of the countrie
import Modal from "react-modal";
import { graphql, useStaticQuery } from "gatsby";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
/////////////////////////////////
/////// Tablet & Desktop Only ///
/////////////////////////////////
const transcriptQuery = graphql`
  {
    allContentfulInterviewTranscripts {
      nodes {
        transcriptTitle
        transcriptTags
      }
    }
  }
`;
const BrowseMap = () => {
  // To create hover effect with tooltip, the useState will be iplemeneted
  const [content, setContent] = useState("");

  ///////////////////////////////////////
  ///////////// React Modal /////////////
  ///////////////////////////////////////

  const data = useStaticQuery(transcriptQuery);
  const transcripts = data.allContentfulInterviewTranscripts.nodes;
  console.log(transcripts);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function docuIndia() {
    return <div className="india">THis is the transcript content of india</div>;
  }

  function afterOpenModal() {
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // const component = <div>India</div>;
  const [component, setCompoenent] = useState("");
  function condRender(value = []) {
    // this function will conditionally render the component console.log(value);
    console.log(value);
    if (value == "India") {
      setCompoenent(<div className="india">india</div>);
    } else {
      setCompoenent(null);
    }
  }
  return (
    <Layout>
      <BrowseMapWrapper>
        <h1 className="c-browsemap__title">Browse Archive Map</h1>
        <ReactTooltip>Read Documents of {content} </ReactTooltip>
        <div className="l-browsemap">
          {" "}
          <ComposableMap className="c-browsemap" data-tip="">
            <ZoomableGroup center={[90, 20]} zoom={1.8}>
              {" "}
              <Geographies geography={asia}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      className="c-browsemap__country"
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => {
                        openModal();
                        const { name } = geo.properties;
                        condRender(name);
                      }}
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
                          fill: "#e8edff",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#e8edff",
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
              <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                {component}
              </Modal>
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
      stroke-width: 0.7px;
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
