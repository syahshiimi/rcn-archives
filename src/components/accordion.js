import React, { useState } from "react"
import styled from "styled-components"
import { TiArrowDown } from "@react-icons/all-files/ti/TiArrowDown"
import { IconContext } from "@react-icons/all-files/lib"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"

export const Accordion = ({ transcript = [], type }) => {
  const {
    discussionQuestions,
    englishFullTranscript,
    englishTranscriptSummary,
    transcriptTags,
    interviewer,
    interviewee,
  } = transcript

  // Rich Text Rendering

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },
    },
  }

  // create separate functions to render content conditionally
  function DocumentSummary(props) {
    return (
      <span className="c-accordion__summary">
        {renderRichText(englishTranscriptSummary, options)}
      </span>
    )
  }

  function DocumentTranscript(props) {
    return (
      <span className="c-accordion__transcript">
        {renderRichText(englishFullTranscript, options)}
      </span>
    )
  }

  function DocumentInfo(props) {
    return (
      <span className="c-accordion__info">
        {interviewer}, {interviewee}, {transcriptTags}
      </span>
    )
  }

  function DocumentQns(props) {
    return (
      <span className="c-accordion__qns">
        {renderRichText(discussionQuestions, options)}
      </span>
    )
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
      <div className="c-accordion__body ">{component}</div>
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
    background-color: var(--primary-clr-50);
    border: 1px solid var(--primary-clr-200);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .closed {
    display: none;
  }
  .c-accordion__summary > p {
    margin: 4vh 6vw;
  }
  .c-accordion__transcript > p {
    margin: 2vh 6vw;
  }
  .c-accordion__info > p {
    margin: 4vh 6vw;
  }
  .c-accordion__qns > p {
    margin: 4vh 6vw;
    width: 100%;
  }

  p {
    font-family: Ubuntu;
  }
`
