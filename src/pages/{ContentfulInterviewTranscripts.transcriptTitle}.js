import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import parse from "html-react-parser"
import { Accordion } from "../components/accordion"
import { GatsbyImage } from "gatsby-plugin-image"

const TranscriptTemplate = ({ data }) => {
  const transcript = data.contentfulInterviewTranscripts

  // filter through passed object to remove null values
  ////////////////////////////////////////////////////////////
  // 1. convert default objects to array with key value pairs
  // 2. filter through key/value pairs to remove 'null' and produce new arr
  // 3. convert filtered array to object

  const transcriptArr = Object.entries(transcript)
  const filteredTranscriptArr = transcriptArr.filter(
    ([key, value]) => value != null
  )
  const filteredTranscriptObj = Object.fromEntries(filteredTranscriptArr)
  // Destructure Filtered Object
  const {
    transcriptImage,
    onelinerteaser: {
      childMarkdownRemark: { oneliner },
    },
    transcriptTitle,
  } = filteredTranscriptObj

  //////////////////////////
  ////// Image Utils ///////
  //////////////////////////
  // Conditionally render gatsby image
  const pathToImage = getImage(transcriptImage)

  function TranscriptImage(props) {
    return (
      <GatsbyImage
        image={pathToImage}
        alt={transcriptTitle}
        className="c-transcript__image std-style"
      />
    )
  }

  let imgComponent
  if (transcriptImage != undefined) {
    imgComponent = <TranscriptImage />
  } else {
  }

  return (
    <Layout>
      <TranscriptWrapper>
        <h1 className="c-transcript__title">{transcriptTitle}</h1>
        {imgComponent}
        <div className="c-transcript__oneliner">{parse(`${oneliner}`)}</div>

        <hr className="c-transcript__border"></hr>
        <Accordion
          transcript={transcript}
          type="Document Summary"
          name="document__summary"
        />
        <Accordion
          transcript={transcript}
          type="Document Transcript"
          name="document__transcript non-mobile"
        />
        <Accordion
          transcript={transcript}
          type="Document Information"
          name="document__information"
        />
        <Accordion
          transcript={transcript}
          type="Document Questions"
          name="document__questions"
        />
      </TranscriptWrapper>
    </Layout>
  )
}

export const query = graphql`
  query getSingleTranscript($transcriptTitle: String) {
    contentfulInterviewTranscripts(transcriptTitle: { eq: $transcriptTitle }) {
      interviewer
      interviewee
      transcriptTitle
      transcriptTags
      contentful_id
      englishTranscriptSummary {
        raw
      }
      englishFullTranscript {
        raw
      }
      discussionQuestions {
        raw
      }
      onelinerteaser: childContentfulInterviewTranscriptsOneLineTeaserTextNode {
        childMarkdownRemark {
          oneliner: html
        }
      }
      transcriptImage {
        gatsbyImageData(
          placeholder: TRACED_SVG
          layout: CONSTRAINED
          aspectRatio: 1.5
        )
      }
    }
  }
`

const TranscriptWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0vh var(--padding-mobile) 6vh var(--padding-mobile);
  max-width: 100%;

  .c-transcript__title {
    text-align: center;
    margin: 2vh 0vw;
    font-size: 1.5rem;
  }

  .c-transcript__image {
    margin: 2vh 0vw;
  }
  .std-style {
    border-radius: calc(1.5rem + 4px);
    border: 1px solid var(--primary-clr-200);
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  }

  .c-transcript__oneliner {
    margin: 2vh 0vw;
    text-align: center;
  }
  .c-transcript__oneliner {
    font-size: 0.75rem;
    font-weight: 500;
    font-style: normal;
  }

  .c-transcript__border {
    display: none;
  }

  ///////////////////////////
  ////// Tablet /////////////
  ///////////////////////////

  @media (min-width: 992px) {
    padding: 4vh var(--padding-desktop) 6vh var(--padding-desktop);
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4vw;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas:
      ". image"
      "title image"
      "oneliner image"
      ". image"
      "border border"
      "summary summary"
      "info questions";

    .non-mobile {
      display: none;
    }

    .c-transcript__title {
      font-size: 2.5rem;
      grid-area: title;
      text-align: left;
    }

    .c-transcript__image {
      grid-area: image;
      margin: 2vh 2vw;
    }

    .c-transcript__oneliner {
      font-size: 1rem;
      text-align: left;
      margin: 2vh 0vw;
      grid-area: oneliner;
    }

    .c-transcript__border {
      display: block;
      border: 1px solid var(--primary-clr-200);
      border-radius: 1px;
      margin: 4vh 0vw;
      grid-area: border;
    }

    .document__summary {
      grid-area: summary;
    }

    .document__information {
      grid-area: info;
    }
    .document__questions {
      grid-area: questions;
    }
  }
`

export default TranscriptTemplate
