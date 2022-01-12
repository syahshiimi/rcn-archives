import React, { useState, useRef, useEffect } from "react"
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

  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

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
      [BLOCKS.OL_LIST]: (node, children) => {
        return <ol>{children}</ol>
      },
    },
  }
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  // Conditional Rendering
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

  function DocumentInfo() {
    return (
      <span className="c-accordion__info">
        <p className="c-accordion__interviewer">Interviewr: {interviewer}</p>
        <p className="c-accordion__interviewee">Interviewee: {interviewee}</p>
        <p className="c-accordion__tagsandkeys">Tags & Keywords</p>
        <hr className="c-accordion__tagsandkeysline"></hr>
        <div className="c-accordion__transcripttags">
          {transcriptTags.map((item, index) => {
            return (
              <div className="c-accordion__tagpill" key={index}>
                <p className="c-accordion__tag">{item}</p>
              </div>
            )
          })}
        </div>
        <p className="c-accordion__transcriptnotesheader">Transcript Notes</p>
        <hr className="c-accordion__transcriptnotesline"></hr>
        <p className="c-accordion__transcriptnotes">None</p>
      </span>
    )
  }

  function DocumentQns(props) {
    return (
      <div className="c-accordion__qns">
        {renderRichText(discussionQuestions, options)}
      </div>
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

  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  // Dropdown on click
  // 1. Hide accordion content as the intiai state where show = false
  const [show, setShow] = useState(false)
  const [normal, setRotate] = useState(true)
  // 2. Creat button handler to listen to button state change
  const handleClick = () => {
    setShow(!show) // returns opposte; where show is now TRUE
    setRotate(!normal)
  }
  // 3. Create CSS Modifier
  const accordionBody = useRef(null)
  const accordionRef = useRef(null)
  const accordionHeader = useRef(null)
  const rotateArrowIcon = normal
    ? "c-accordion__arrow"
    : "c-accordion__arrow pulled"

  useEffect(() => {
    const accordionHeight = accordionRef.current.getBoundingClientRect().height
    if (show) {
      console.log(`${accordionHeight}`)
      accordionBody.current.style.height = `${accordionHeight}px`
      accordionBody.current.style.paddingBottom = `8vh`
      accordionBody.current.style.border = `1px solid var(--primary-clr-200)`
      accordionBody.current.style.borderRadius = `0px 0px calc(2rem + 1px) calc(2rem + 1px)`
      accordionHeader.current.style.border = `1px solid var(--primary-clr-200)`
      accordionHeader.current.style.borderRadius = `calc(2rem + 1px) calc(2rem + 1px) 0px  0px`
    } else {
      accordionBody.current.style.height = "0px"
      accordionBody.current.style.padding = `0rem`
      accordionBody.current.style.border = `0px solid var(--primary-clr-200)`
      accordionHeader.current.style.border = `1px solid var(--primary-clr-200)`
      accordionHeader.current.style.borderRadius = `calc(2rem + 1px)`
    }
  }, [show])

  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////

  return (
    <AccordionWrapper className="c-accordion">
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
    width: 100%;
    flex: 1 1 auto;

    /* styling */
    background-color: var(--primary-clr-100);
    border-radius: calc(2rem + 1px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease-in-out 0.2s;
  }

  .c-accordion__arrow {
    height: 2rem;
    width: 2rem;
    transition: var(--transition)
  }

  .pulled {
    transform: rotate(180deg);
    transition: var(--transition)
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

  .c-accordion__tagsandkeys {
    font-weight: bold;
  }
  .c-accordion__tagsandkeysline {
    border: 1px solid var(--primary-clr-200);
    border-radius: 1px;
  }

  .c-accordion__transcripttags {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .c-accordion__tagpill {
    margin: 0.5vh 1vw;
    background-color: var(--primary-clr-200);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: calc(2rem);
    flex: 0 1 auto;
  }
  .c-accordion__tag {
    font-family: Ubuntu;
    font-size: 0.75rem;
    line-height: 20px;
    color: var(--primary-clr-50);
    padding: 1vh 3vw;
  }

  .c-accordion__transcriptnotesheader {
    font-weight: bold;
  }

  .c-accordion__transcriptnotesline {
    border: 1px solid var(--primary-clr-200);
    border-radius: 1px;
  }

  .c-accordion__qns {
    margin: 4vh 9vw;
    padding: 0vh 4vw;
    list-style: square;

    ol > li {
      margin: 2vh 0vw;
    }
  }

  p {
    font-family: Ubuntu;
  }
`
