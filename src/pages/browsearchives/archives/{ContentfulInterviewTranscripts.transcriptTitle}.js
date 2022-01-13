import React from "react"
import { TagsContainer } from "../../../components/tags"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { graphql } from "gatsby"
import Layout from "../../../components/Layout"
import styled from "styled-components"
import parse from "html-react-parser"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BackTTButton } from "../../../components/button"

const FullTranscript = ({ data }) => {
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  const transcript = data.contentfulInterviewTranscripts
  const {
    transcriptTitle,
    transcriptTags,
    englishFullTranscript,
    onelinerteaser: {
      childMarkdownRemark: { oneliner },
    },

    discussionQuestions,
  } = transcript

  ////////////////////////////////////////
  ////////  Rich Text Render    //////////
  ////////////////////////////////////////

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

  ////////////////////////////////////////
  /////////// Component Render ///////////
  ////////////////////////////////////////
  return (
    <Layout>
      <FullTranscriptWrapper>
        <h1 className="c-fulltranscript__title">{transcriptTitle}</h1>
        <div className="c-fulltranscript__oneliner">{parse(`${oneliner}`)}</div>
        <hr className="c-fulltranscript__border"></hr>
        <div className="c-fulltranscript__content">
          {renderRichText(englishFullTranscript, options)}
        </div>
        <hr className="c-fulltranscript__border"></hr>
        <h2 className="c-fulltranscript__tagsandkeywords">Tags & Keywords</h2>
        <TagsContainer tags={transcriptTags} />
        <div className="c-fulltranscript__footnotescontainer">
          <h5 className="c-fulltranscript__footnotes">Footnotes</h5>
          <hr className="c-fulltranscript__footnotesborder"></hr>
          <p className="c-fulltranscript__footnotes"></p>
        </div>
        <BackTTButton title="Back to Top" />
      </FullTranscriptWrapper>
    </Layout>
  )
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

const FullTranscriptWrapper = styled.section`
  // DO NOT DISPLAY ON MOBILE
  display: none;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    padding: 4vh var(--padding-desktop) 6vh var(--padding-desktop);
    row-gap: 1vh;
  }

  hr {
    display: block;
    border: 1px solid var(--primary-clr-200);
    border-radius: 1px;
  }
  .c-fulltranscript__title {
    text-align: center;
  }

  .c-fulltranscript__oneliner {
    text-align: center;
  }

  .c-fulltranscript__border {
    margin: 1vh 0vw;
  }

  .c-fulltranscript__content {
    p {
      font-family: "Lora", serif;
      font-weight: 500;
      font-style: normal;
      margin: 1vh 0vw;
    }
  }

  .c-fulltranscript__tagsandkeywords {
    font-family: "Lora", serif;
    text-decoration: underline;
    font-size: 1.5rem;
  }

  .c-tagscontainer {
    justify-content: left;
    margin: 1vh 0vw;
  }

  .c-fulltranscript__footnotes {
  }
  .c-fulltranscript__footnotesborder {
    margin: 1vh 0vw;
    width: 25vw;
  }

  @media (min-width: 1280px) {
    .c-fulltranscript__border {
      margin: 4vh 0vw;
    }
.c-tagscontainer {
    margin: 3vh 0vw;
  }
    .c-fulltranscript__footnotescontainer {
      margin: 2vh 0vw;
    }
    .c-fulltranscript__footnotesborder {
      margin: 2vh 0vw;
      width: 25vw;
    }
  }
`

export default FullTranscript
