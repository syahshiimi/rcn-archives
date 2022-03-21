import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { findDOMNode } from "react-dom";
import Modal from "react-modal";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import { useFlexSearch } from "react-use-flexsearch";
import slugify from "slugify";
import styled from "styled-components";

import asia from "../../content/asia-mapshaper.json"; // geoJson
import { DefaultButton } from "../components/button";
import { Head } from "../components/head";
import Layout from "../components/Layout";
import { countryData } from "../data"; // coordinates of the countrie

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
    localSearchArchives {
      index
      store
    }
  }
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#cfdbd5",
    fontFamily: "Ubuntu",
    padding: "4vh 6vw",
    opacity: "0.9",
    borderRadius: "3vh",
    boxShadow: "0px 4px 19px rgba(51, 53, 51, 0.35)",
    flexDirection: "column",
  },
};

const isSearch = typeof window !== "undefined";
if (isSearch) {
  Modal.setAppElement(document.getElementsByClassName(".l-browsemap"));
}
const BrowseMap = () => {
  // To create hover effect with tooltip, the useState will be iplemeneted
  const [content, setContent] = useState("");

  ///////////////////////////////////////
  ///////////// React Modal /////////////
  ///////////////////////////////////////
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // this.style.backgroundColor = "red";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Conditional Transcript Rendering within the Modal

  const data = useStaticQuery(transcriptQuery);

  // We now use flexsearch to filter through our transcripts
  const flexTranscripts = data.localSearchArchives;
  const { index, store } = flexTranscripts;

  // Function will use the value from geo.properties and us it as a search valu to render out the specified list of transcripts.
  // We use flexsearch engine to list it out as it is fast and lightweight!
  function ListofTranscripts(value) {
    const { searchValue } = value; // obtained from geo.properties, which would be the name of a country
    console.log(`The search value is: ${searchValue}`);

    const results = useFlexSearch(searchValue, index, store); //  resutls will be returned with an array of our requested search value
    const filterResults = results.map((item, index) => {
      const { transcriptTags } = item;
      if (transcriptTags.includes(searchValue)) {
        return item;
      } else {
        return null;
      }
    });
    const notNullResults = filterResults.filter((element) => {
      return element != null;
    });

    if (notNullResults.length > 0) {
      return notNullResults.map((item, index) => {
        const { transcriptTitle } = item;

        const cleanString = transcriptTitle
          .replace(".", " ")
          .replace("(", " ")
          .replace(")", " ");
        const slug = slugify(cleanString, { lower: true });

        return (
          <div key={index}>
            <li className="c-browsemap__transcript" key={index}>
              <Link to={`../browsearchives/${slug}`}>{transcriptTitle}</Link>
            </li>
          </div>
        );
      });
    } else {
      return <div>There are currently no documents for {searchValue}</div>;
    }
  }

  // We use a useState hook to determine the value of component.
  // We will use the componenet variable in the useState hook to render later
  // SetComponent is a function that determines the value of component
  const [component, setComponent] = useState("");
  // We define the function which would allow the modification of the component
  // This function will be used as an onClick handler.
  // The function will return a value. This value can then be passed
  // as a component prop for <ListofTranscripts/> componnent.
  // While passing this as a prop, this means that we can use it as a search value.
  function condRender(value = []) {
    setComponent(<ListofTranscripts searchValue={value} />);
  }

  return (
    <Layout>
      <Head title="Browse Map" />{" "}
      <BrowseMapWrapper>
        <h1 className="c-browsemap__title">Browse Archive Map</h1>
        <ReactTooltip className="c-browsemap__tooltip">
          Read Documents of {content}{" "}
        </ReactTooltip>
        <div className="l-browsemap">
          {" "}
          <ComposableMap className="c-browsemap" data-tip="">
            <ZoomableGroup center={[90, 20]} zoom={2.2}>
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
                        afterOpenModal();
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
                // ariaHideApp={false}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                portalClassName="Modal"
                contentLabel="Example Modal"
              >
                {component}
              </Modal>
            </ZoomableGroup>
          </ComposableMap>
        </div>
        <section className="l-content">
          {" "}
          <h5 className="c-browsemap__content">
            Our archival map showcases a diverse array of oral transcripts and
            interviews we have collected and curated throughout the past few
            years. It is a collective effort of many researchers. Please feel
            free to click on any of the countries above. The archive is
            constantly growing.
          </h5>
          <p className="c-browsemap__contribute">
            If you would like to contribute, you can click on the button below.
          </p>
          <DefaultButton
            title="Contribute"
            url="/contribute"
            className="c-browsemap__button"
          />
        </section>
      </BrowseMapWrapper>
    </Layout>
  );
};

const BrowseMapWrapper = styled.article`
  display: none; // we hide it for mobile
  @media (min-width: 902px) {
    padding: 4vh var(--padding-desktop);
    display: flex;
    flex-direction: column;
    text-align: center;

    .l-browsemap {
      /* border: 1px solid black; */
      /* border-radius: calc(8vh); */
      /* background-color: var(--secondary-clr-250); */
      display: flex;
      justify-content: center;
      margin: 2vh 0vw;
    }
    .c-browsemap__title {
      margin: 2vh 0vw 3vh 0vw;
    }

    .c-browsemap {
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: var(--primary-clr-50);
      /* box-shadow: 0px 4px 19px rgba(51, 53, 51, 0.25); */
      /* height: 550px; */
      /* width: 100%; */
      border-radius: 8vh;
      outline: none;
      /* padding: 2vh 2vw; */
    }
    .rsm-geographies {
      fill: var(--primary-clr-100);
      stroke: var(--primary-clr-150);
      stroke-width: 0.3px;
      display: flex;
      stroke-width: 0.2px;
      justify-content: center;

      :hover {
        stroke-width: 0.35px;
      }
    }

    .c-browsemap__marker {
      fill: var(--primary-clr-50);
      stroke: var(--primary-clr-150);
      r: 1;
    }

    .c-browsemap__marker:hover {
      fill: var(--primary-clr-150);
    }
    .c-browsemap__annotateText {
      font-size: 0.4rem;
      font-family: "Ubuntu", sans-serif;
    }

    .c-browsemap__annotateText:hover {
      fill: var(--primary-clr-150);
    }

    .l-content {
      margin: 2vh 0vw;
    }

    .c-browsemap__content {
      margin: 2vh 6vw;
      font-size: 1.125rem;
    }

    .c-browsemap__contribute {
      margin: 3vh 0vw 1vh 0vw;
    }

    .c-browsemap__button {
      margin: 1vh 0vw;
    }

    .c-browsemap__tooltip {
      font-family: "Ubuntu";
      border-radius: 5vh;
    }
  }

  ////////////////////////////////
  //////// Desktop ///////////////
  ////////////////////////////////

  @media (min-width: 1280px) {
    padding: 8vh var(--padding-desktop) 6vh var(--padding-desktop);

    .c-browsemap__title {
      margin: 4vh 6vw;
    }
    .c-browsemap {
      padding: 2vh 2vw;
      /* margin: 5vh 5vw; */
      height: 570px;
      border-radius: 15vh;
    }

    .rsm-zoomable-group {
      /* transform: scale(1.5) !important; */
    }

    .c-browsemap__content {
      margin: 5vh 10vw;
    }
  }

  /////////////////////////////////
  //////////// 4k Display /////////
  /////////////////////////////////
  @media (min-width: 2560px) {
    .c-browsemap {
      height: 800px;
    }

    .l-content {
      margin: 0vh 10vw;
    }

    .c-browsemap__content {
      margin: 3vh 10vw 5vh 10vw;
    }
  }
`;

export default BrowseMap;
