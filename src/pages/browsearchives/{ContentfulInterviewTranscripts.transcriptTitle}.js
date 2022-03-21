import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { GatsbyImage } from "gatsby-plugin-image";
import slugify from "slugify";

// Components import
import Layout from "../../components/Layout";
import { Accordion } from "../../components/accordion";
import { ReadFullButton } from "../../components/read-full";
import { NestedTagsContainer } from "../../components/tags";
import { Head } from "../../components/head";

export const query = graphql`
  query getSingleTranscript($transcriptTitle: String) {
    contentfulInterviewTranscripts(transcriptTitle: { eq: $transcriptTitle }) {
      interviewer
      interviewee
      transcriptNotes {
        raw
      }
      transcriptTitle
      transcriptTags
      contentful_id
      originalTranscriptLanguage
      englishTranscriptSummary {
        raw
      }
      englishFullTranscript {
        raw
      }
      discussionQuestions {
        raw
      }
      vernacularFullTranscript {
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
`;

const TranscriptTemplate = ({ data }) => {
  const transcript = data.contentfulInterviewTranscripts;
  const {
    transcriptTags,
    transcriptImage,
    onelinerteaser: {
      childMarkdownRemark: { oneliner },
    },
    transcriptTitle,
  } = transcript;

  //////////////////////////
  ////// Image Utils ///////
  //////////////////////////

  // Conditionally render gatsby image
  const pathToImage = getImage(transcriptImage);
  function TranscriptImage() {
    if (transcriptImage != undefined) {
      return (
        <GatsbyImage
          image={pathToImage}
          alt={transcriptTitle}
          className="c-transcriptsummary__image std-style"
        />
      );
    } else {
      return null;
    }
  }

  // remove dots in strings (if exists)
  const cleanString = transcriptTitle
    .replace(".", " ")
    .replace("(", " ")
    .replace(")", " ");
  // use slugify to return a string in a slug format
  const slug = slugify(cleanString, { lower: true });

  // Metadata
  const metadata = parse(`${oneliner}`);
  const {
    props: { children },
  } = metadata;

  return (
    <Layout>
      <Head title={transcriptTitle} description={children} />
      <TranscriptWrapper>
        <h1 className="c-transcriptsummary__title">{transcriptTitle}</h1>
        {/* container  to create flexible grid + blox layout */}
        <div className="c-transcriptsummary__container">
          <ImageWrapper>
            <TranscriptImage />
          </ImageWrapper>

          {/* sub-container to create flexible grid + blox layout */}
          <div className="c-transcriptsummary__subcontainer">
            <div className="c-transcriptsummary__oneliner">
              {parse(`${oneliner}`)}
            </div>
            <div className="c-transcriptsummary__tagsandkeywords">
              <h5>Tags & Keywords</h5>
            </div>
            <div className="c-transcriptsummary__tagscontainer">
              <NestedTagsContainer tags={transcriptTags} />
            </div>
          </div>
        </div>

        <hr className="c-transcriptsummary__border"></hr>
        <Accordion
          transcript={transcript}
          type="Document Summary"
          name="document__summary"
        />
        <Accordion
          transcript={transcript}
          type="Document Transcript"
          name="document__transcript"
        />
        <ReadFullButton slug={slug} />
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
  );
};

const ImageWrapper = styled.article`
  display: none;
  @media (min-width: 1280px) {
    .c-transcriptsummaryimage {
    }
    .std-style {
      border-radius: calc(1.5rem + 4px);
      border: 1px solid var(--primary-clr-200);
      filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
    }
  }
`;

const TranscriptWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0vh var(--padding-mobile) 6vh var(--padding-mobile);
  max-width: 100%;

  .desktop {
    display: none;
  }

  .c-transcriptsummary__title {
    text-align: center;
    margin: 2vh 0vw;
    font-size: 1.5rem;
  }

  .c-transcriptsummary__image {
    margin: 2vh 0vw;
  }

  .c-transcriptsummary__container {
    justify-content: center;
  }

  .c-transcriptsummary__oneliner {
    margin: 2vh 0vw;
    text-align: center;
  }
  .c-transcriptsummary__oneliner {
    font-weight: 500;
    font-style: normal;
  }

  .c-transcriptsummary__border {
    display: none;
  }

  .c-transcriptsummary__tagsandkeywords {
    display: none;
  }

  .c-transcriptsummary__tagscontainer {
    display: none;
  }

  ///////////////////////////
  ////// Tablet /////////////
  ///////////////////////////

  @media (min-width: 992px) {
    padding: 6vh var(--padding-desktop) 6vh var(--padding-desktop);
    display: grid;
    column-gap: 4vw;
    row-gap: 3vh;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      "title title"
      "container container"
      "border border"
      "summary summary"
      "info questions"
      "read read";

    .c-transcriptsummary__title {
      font-size: 2.5rem;
      grid-area: title;
      margin: 0;
    }

    .c-transcriptsummary__container {
      grid-area: container;
      display: flex;
      flex-direction: row-reverse;
      flex-grow: 1 1 auto;
      column-gap: 4vh;
      margin: 1vh 0vw;
    }

    .c-transcriptsummary__subcontainer {
      display: flex;
      flex-direction: column;
      align-self: center;
      row-gap: 1vh;
    }

    .c-transcriptsummary__image {
      grid-area: image;
      padding: 4vh 8vw;
    }

    .c-transcriptsummary__oneliner {
      font-size: 1rem;
      margin: 1vh 0vw;
      grid-area: oneliner;
      align-self: center;
      text-align: center;
    }
    .c-transcriptsummary__tagsandkeywords {
      display: block;
      grid-area: tagsandkeywords;
      text-align: center;
      text-decoration: underline;
      margin: 0.1vh 0vw;
      align-self: center;

      h5 {
        font-family: "Lora", Serif;
        font-size: 1.125rem;
      }
    }
    .c-transcriptsummary__tagscontainer {
      display: flex;
      margin: 1vh 0vw;
      grid-area: tags;

      .c-tagscontainer {
        justify-content: space-evenly;
      }
    }

    .c-transcriptsummary__border {
      display: block;
      border: 1px solid var(--primary-clr-200);
      border-radius: 1px;
      grid-area: border;
    }

    .document__summary {
      grid-area: summary;
    }

    .document__transcript {
      display: none;
    }
    .document__information {
      grid-area: info;
    }
    .document__questions {
      grid-area: questions;
    }
  }

  /////////////////////////
  ///// Desktop ///////////
  /////////////////////////

  @media (min-width: 1280px) {
    padding: 10vh var(--padding-desktop);
    row-gap: 4vh;
  }

  .c-transcriptsummary__container {
    column-gap: 6vw;
    margin: 2vh 2vw;
  }

  .c-transcriptsummary__subcontainer {
    align-items: stretch;
    row-gap: 2vh;
  }
  .c-transcriptsummary__tagscontainer > .c-tagscontainer {
    row-gap: 0.5vh;
    justify-content: center;
  }

  //////////////////////////
  //// 4k Display //////////
  //////////////////////////

  @media (min-width: 2560px) {
    padding: 6vh 24vw;
    row-gap: 4vh;

    .c-transcriptsummary__title {
    }
    .c-transcriptsummary__container {
      margin: 0vh 4vw;
    }
    .c-transcriptsummary__border {
      margin: 1vh 0vw 2vh 0vw;
    }
  }
`;

export default TranscriptTemplate;
