import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

const FullTranscript = ({data}) => {
  const transcript = data.contentfulInterviewTranscripts
  console.log(transcript)
  return <div>hello</div>
}

export const query = graphql`
  query ($transcriptTitle: String) {
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
export default FullTranscript
