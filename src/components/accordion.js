import React, { useState } from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styled from "styled-components"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { HiArrowCircleDown } from "@react-icons/all-files/hi/HiArrowCircleDown"
import { TiArrowDown } from "@react-icons/all-files/ti/TiArrowDown"
import { IconContext } from "@react-icons/all-files/lib"


export const Accordion = ({ transcript = [], type }) => {
  const {
    discussionQuestions: { discussionqns },
    englishFullTranscript: { fulltranscript },
    englishTranscriptSummary: {  transcriptsummary },
    transcriptTags,
    interviewer,
    interviewee,
  } = transcript
  console.log(transcriptsummary);

  // create separate functions to render content conditionally
  function DocumentSummary(props) {
    return <p className="c-accordion__summary">{transcriptsummary}</p>
  }

  function DocumentTranscript(props) {
    return <p className="c-accordion__transcript">{fulltranscript}</p>
  }

  function DocumentInfo(props) {
    return (
      <p className="c-accordion__info">
        {interviewer}, {interviewee}, {transcriptTags}
      </p>
    )
  }

  function DocumentQns(props) {
    return <p className="c-accordion__qns">{discussionqns}</p>
  }

  let component
  if (type == "Document Summary") {
    component = <DocumentSummary />
  } else if (type == "Document Transcript") {
    component = <DocumentTranscript />
  } else if (type == "Document Information") {
    component = <DocumentInfo />
  } else if (type == "Document Questions") {
    component = <DocumentQns />
  }

  return (
    <AccordionWrapper className="c-accordion__container">
      <div className="c-accordion__header">
        <h5 className="c-accordion__title">{type}</h5>
        <IconContext.Provider value={{ className: "c-accordion__arrow" }}>
          <TiArrowDown />
        </IconContext.Provider>
      </div>
      <div className="c-accordion__body closed">{component}</div>
    </AccordionWrapper>
  )
}
const AccordionWrapper = styled.div`
  margin: 1vh 0vw;

  .c-accordion__header {
    display: flex;
    flex-direction: row;
    padding: 1.5vh 6vw;
    align-items: center;
    justify-content: space-between;

    /* styling */
    background-color: var(--primary-clr-100);
    border: 1px solid var(--primary-clr-200);
    border-radius: calc(2rem + 1px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .c-accordion__arrow {
    height: 2rem;
    width: 2rem;
  }

  .c-accordion__title {
    font-size: 1rem;
    font-style: normal;
    font-weight: 500 !important;
  }

  .c-accordion__body {
    display: flex;
    flex-grow: 0;
    width: 100%;
  .closed {
    display: none;
  }

  .c-accordion__summary {
    }
.c-accordion__transcript {
      width: 100%;
    }
.c-accordion__info {
      width: 100%;
    }
.c-accordion__qns {
      width: 100%;
    }

`
