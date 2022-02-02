import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { TiArrowDown } from "@react-icons/all-files/ti/TiArrowDown";
import { IconContext } from "@react-icons/all-files/lib";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { TagsContainer } from "./tags";
import { render } from "react-dom";
import { getImage } from "gatsby-plugin-image";

export const Accordion = ({ transcript = [], type, name }) => {
  const {
    discussionQuestions,
    englishFullTranscript,
    englishTranscriptSummary,
    transcriptTags,
    interviewer,
    interviewee,
    transcriptNotes,
  } = transcript;

  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  // Rich Text Rendering
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>;
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <ol>{children}</ol>;
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li>{children}</li>;
      },
    },
  };
  //////////////////////////////////////////////////
  ///////////// Conditional Rendering //////////////
  //////////////////////////////////////////////////

  function DocumentSummary(props) {
    return (
      <span className="c-accordion__summary">
        {renderRichText(englishTranscriptSummary, options)}
      </span>
    );
  }

  function DocumentTranscript(props) {
    return (
      <span className="c-accordion__transcript">
        {renderRichText(englishFullTranscript, options)}
      </span>
    );
  }

  ////////////////////////////
  // C.render Trans. Notes ///
  ////////////////////////////

  // 1. We create a component to render the transcript notes
  // 2. We check if the component returns undefined or not
  // 3. If component returns undefined, we do not render aka render null
  // 4. If component returns, we render the return data

  // Transcript Notes Subcomponent
  function TranscriptNotes(props) {
    if (transcriptNotes != null) {
      return (
        <div className="c-accordion__transcriptnotes">
          {renderRichText(transcriptNotes, options)}
        </div>
      );
    } else {
      return null;
    }
  }

  function DocumentInfo() {
    return (
      <span className="c-accordion__info">
        <p className="c-accordion__interviewer">Interviewr: {interviewer}</p>
        <p className="c-accordion__interviewee">Interviewee: {interviewee}</p>
        <div className="c-accordion__tagsandkeyscontainer">
          <p className="c-accordion__tagsandkeystitle">Tags & Keywords</p>
          <hr className="c-accordion__tagsandkeysline"></hr>
          <TagsContainer tags={transcriptTags} />
        </div>
        <hr className="c-accordion__transcriptnotesline"></hr>
        <p className="c-accordion__transcriptnotesheader">Transcript Notes</p>
        <TranscriptNotes />
      </span>
    );
  }

  function DocumentQns(props) {
    return (
      <div className="c-accordion__qns">
        {renderRichText(discussionQuestions, options)}
      </div>
    );
  }

  /////////////////////////////////////////////////////

  let component;
  if (type == "Document Summary") {
    component = <DocumentSummary />;
  } else if (type == "Document Transcript") {
    component = <DocumentTranscript />;
  } else if (type == "Document Information") {
    component = <DocumentInfo />;
  } else if (type == "Document Questions") {
    component = <DocumentQns />;
  }

  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  // Dropdown on click
  // 1. Hide accordion content as the intiai state where show = false
  const [show, setShow] = useState(false);
  const [normal, setRotate] = useState(true);
  // 2. Creat button handler to listen to button state change
  const handleClick = () => {
    setShow(!show); // returns opposte; where show is now TRUE
    setRotate(!normal);
  };
  // 3. Create CSS Modifier
  const accordionBody = useRef(null);
  const accordionRef = useRef(null);
  const accordionHeader = useRef(null);
  const rotateArrowIcon = normal
    ? "c-accordion__arrow"
    : "c-accordion__arrow pulled";

  useEffect(() => {
    const accordionHeight = accordionRef.current.getBoundingClientRect().height;
    if (show) {
      console.log(`${accordionHeight}`);
      accordionBody.current.style.height = `${accordionHeight}px`;
      accordionBody.current.style.paddingBottom = `4vh`;
      accordionBody.current.style.border = `1px solid var(--primary-clr-200)`;
      accordionBody.current.style.borderRadius = `0px 0px calc(2rem + 1px) calc(2rem + 1px)`;
      accordionHeader.current.style.border = `1px solid var(--primary-clr-200)`;
      accordionHeader.current.style.borderRadius = `calc(2rem + 1px) calc(2rem + 1px) 0px  0px`;
    } else {
      accordionBody.current.style.height = "0px";
      accordionBody.current.style.padding = `0rem`;
      accordionBody.current.style.border = `0px solid var(--primary-clr-200)`;
      accordionHeader.current.style.border = `1px solid var(--primary-clr-200)`;
      accordionHeader.current.style.borderRadius = `calc(2rem + 1px)`;
    }
  }, [show]);

  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  return (
    <AccordionWrapper className={`c-accordion ${name}`}>
      <button
        className="c-accordion__header"
        ref={accordionHeader}
        onClick={handleClick}
      >
        <h5 className="c-accordion__title">{type}</h5>
        <IconContext.Provider value={{ className: rotateArrowIcon }}>
          <TiArrowDown />
        </IconContext.Provider>
      </button>
      <div className="c-accordion__bodycontainer" ref={accordionBody}>
        <div className="c-accordion__body" ref={accordionRef}>
          {component}
        </div>
      </div>
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  margin: 1vh 0vw;

  .c-accordion__header {
    display: flex;
    flex-direction: row;
    padding: 1.2vh 6vw;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex: 1 1 auto;

    /* styling */
    background-color: var(--primary-clr-100);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease-in-out 0.2s;
  }

  .c-accordion__arrow {
    height: 2rem;
    width: 2rem;
    transition: var(--transition);
  }

  .pulled {
    transform: rotate(180deg);
    transition: var(--transition);
  }

  .c-accordion__title {
    font-size: 1rem;
    font-style: normal;
    font-weight: 500 !important;
  }

  .c-accordion__bodycontainer {
    display: flex;
    flex-grow: 1 1 auto;
    overflow: hidden;
    flex-direction: column;
    background-color: var(--primary-clr-50);
    border: 1px solid var(--primary-clr-200);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: var(--transition);
  }

  .closed {
    display: none;
  }
  .c-accordion__summary > p {
    margin: 2vh 6vw;
    text-align: center;
  }
  .c-accordion__transcript > p {
    margin: 2vh 6vw;
  }
  .c-accordion__info > * {
    margin: 2vh 6vw;
  }
  .c-accordion__tagsandkeyscontainer {
    display: flex;
    flex-direction: column;

  }

  .c-accordion__tagsandkeystitle {
    font-weight: bold;
  }
  .c-accordion__tagsandkeysline {
    border: 1px solid var(--primary-clr-200);
    border-radius: 1px;
    margin: 2vh 0vw;
  }

  .c-accordion__transcriptnotesheader {
    font-weight: bold;
  }

  .c-accordion__transcriptnotesline {
    border: 1px solid var(--primary-clr-200);
    border-radius: 1px;
  }
  
  .c-accordion__transcriptnotes {
    margin: 2vh 6vw 2vh 10vw;
    
    li {
      padding: 1vh 0vw;
    }
    
    
  }
  
  .c-accordion__qns {
    margin: 4vh 9vw;
    padding: 0vh 4vw;
    list-style: square;

    ol > li {
      margin: 2vh 0vw;
    }
  }

  ////////////////////////////
  ////// Tablet //////////////
  ////////////////////////////
  @media (min-width: 992px) {
    .c-accordion__header {
      padding: 0.9vh 3vw;
    }
    .c-accordion__title {
      font-size: 1.25rem;
    }
    .c-accordion__arrow {
      height: 2.8rem;
      width: 2.8rem;
    }
    .c-accordion__summary > p {
      margin: 2vh 3vw;
      text-align: center;
    }
    .c-accordion__info > * {
      margin: 2vh 3vw;
    }

    .c-accordion__transcripttags {
      justify-content: stretch;
    }

    .c-accordion__tagsandkeyscontainer {
      display: none;
    }
    .c-accordion__tag {
      font-size: 0.85rem;
    }

    .c-accordion__transcriptnotesheader {
      font-weight: bold;
    }

    .c-accordion__transcriptnotesline {
      border: 1px solid var(--primary-clr-200);
      border-radius: 1px;
    }
    
    .c-accordion__transcriptnotes {
      margin-left: 5vw;

      }
    }

    .c-accordion__qns {
      margin: 2vh 3vw;
      padding: 0vh 4vw;
      list-style: square;

      ol > li {
        margin: 2vh 0vw;
      }

      ol > li > p {
        font-size: 1rem;
      }
    }
  }

  ////////////////////////////
  ///////// Desktop //////////
  ////////////////////////////
  
  @media (min-width: 1280px) {
    .c-accordion__qns {
      padding: 0;
      margin: 2vh 3vw;
    }
`;
