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
import asia from "../../content/asia-mapshaper.json"; // geoJson
import { countryData } from "../data"; // coordinates of the countrie
import { graphql, useStaticQuery } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import slugify from "slugify";
import { Link } from "gatsby";
import Modal from "react-modal";

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
    padding: "6vh 8vw",
    opacity: "0.85",
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

  // We now use flexsearch to filter through our requested array later
  const flexTranscripts = data.localSearchArchives;
  const { index, store } = flexTranscripts;

  // Function will use the value from geo.properties and us it as a search value
  // to render out the specified list of transcripts.
  // We use flexsearch engine to list it out as it is fast and lightweight
  function ListofTranscripts(value) {
    const { searchValue } = value; // obtained from geo.properties
    const results = useFlexSearch(searchValue, index, store); // we determine the search value

    // Unflatten  Results
    // This will return a a regualr object
    const unFlattenResults = (results) =>
      results.map((item) => {
        const { transcriptTitle, transcriptTags } = item;
        return {
          transcriptTitle,
          transcriptTags,
        };
      });

    // To conditionally render if the search value (from geo.properties) returns an
    // an array of objects which signifies that there are transcripts related to it...
    // we can use the length to conditional render two options.
    // Firstly, if the length is longer than 1, this means that transcripts exist
    // Secondly, if the length is shorter than 1 (therefore zero), the search value will not return any transcripts!

    if (results.length > 0) {
      return (
        <ul className="c-browsemap__listoftranscripts">
          {results.map((item, index) => {
            const { transcriptTitle } = item;

            // remove dots in strings (if exists)
            const cleanString = transcriptTitle
              .replace(".", " ")
              .replace("(", " ")
              .replace(")", " ");

            const slug = slugify(cleanString, { lower: true });
            const listComponent = (
              <div className="c-browsemap__transcript" key={index}>
                {/* {transcriptTitle} */}

                <Link to={`../browsearchives/${slug}`}>{transcriptTitle}</Link>
              </div>
            );

            return listComponent;
          })}
        </ul>
      );
    } else {
      return <div>There are currently no documents for {searchValue}</div>;
    }
  }

  // We use a useState hook to determine the value of component.
  // We will use the componenet variable in the useState hook to render later
  // SetComponent is a function that determines the value of componenet
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
      <BrowseMapWrapper>
        <h1 className="c-browsemap__title">Browse Archive Map</h1>
        <ReactTooltip>Read Documents of {content} </ReactTooltip>
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
              <ModalWrapper>
                {" "}
                <Modal
                  isOpen={modalIsOpen}
                  // ariaHideApp={false}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  // className="Modal"
                  // overlayClassName="Overlay"
                  contentLabel="Example Modal"
                >
                  {component}
                </Modal>
              </ModalWrapper>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </BrowseMapWrapper>
    </Layout>
  );
};

const ModalWrapper = styled.article`
  padding: 2vh 8vw !important;
  .c-browsemap__transcript {
    a {
    }
  }
`;
const BrowseMapWrapper = styled.article`
  display: none;
  @media (min-width: 902px) {
    padding: 6vh var(--padding-desktop);
    display: grid;
    text-align: center;

    .l-browsemap {
      /* border: 1px solid black; */
      /* border-radius: calc(8vh); */
      /* background-color: var(--secondary-clr-250); */
      display: flex;
      justify-content: center;
      margin: 0vh 10vw;
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
      border-radius: calc(8vh);
      outline: none;

      :active {
      }
    }
    .rsm-geographies {
      fill: var(--primary-clr-100);
      stroke: var(--primary-clr-150);
      stroke-width: 0.3px;
      display: flex;
      stroke-width: 0.7x;
      justify-content: center;
    }

    .c-browsemap__marker {
      fill: var(--primary-clr-50);
      stroke: var(--primary-clr-150);
      r: 2;
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
  }
`;

export default BrowseMap;
