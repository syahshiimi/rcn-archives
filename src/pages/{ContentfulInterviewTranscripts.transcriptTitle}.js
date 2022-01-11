import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import parse from "html-react-parser"
import { Accordion } from "../components/accordion"

const TranscriptTemplate = ({ data }) => {
  const transcript = data.contentfulInterviewTranscripts

  // filter through passed object to remove null values
  //
  // 1. convert default objects to array with key value pairs
  // 2. filter through key/value pairs to remove 'null' and produce new arr
  // 3. convert filtered array to object

  const transcriptArr = Object.entries(transcript)
  const filteredTranscriptArr = transcriptArr.filter(
    ([key, value]) => value != null
  )
  const filteredTranscriptObj = Object.fromEntries(filteredTranscriptArr)

  const FilteringNull = function(transcript) {
  }

  // Destructure Filtered Object
  const {
    onelinerteaser: {
      childMarkdownRemark: { oneliner },
    },
    transcriptTitle,
  } = filteredTranscriptObj

  return (
    <Layout>
      <TranscriptWrapper>
        <h1 className="c-transcript__title">{transcriptTitle}</h1>
        <div className="c-transcript__oneliner">{parse(`${oneliner}`)}</div>
        <Accordion transcript={transcript} type="Document Summary" />
        <Accordion transcript={transcript} type="Document Transcript" />
        <Accordion transcript={transcript} type="Document Information" />
        <Accordion transcript={transcript} type="Document Questions" />
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
  }

  .c-transcript__oneliner {
    margin: 2vh 0vw 4vh 0vw;
    text-align: center;
  }
`

export default TranscriptTemplate
