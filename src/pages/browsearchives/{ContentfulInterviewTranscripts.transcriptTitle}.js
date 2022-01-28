import { graphql, Link } from "gatsby";
import { TagsContainer } from "../../components/tags";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import parse from "html-react-parser";
import { Accordion } from "../../components/accordion";
import { GatsbyImage } from "gatsby-plugin-image";
import slugify from "slugify";
import { ReadFullButton } from "../../components/read-full";

const TranscriptTemplate = ({ data }) => {
  const transcript = data.contentfulInterviewTranscripts;

  // filter through passed object to remove null values
  ////////////////////////////////////////////////////////////
  // 1. convert default objects to array with key value pairs
  // 2. filter through key/value pairs to remove 'null' and produce new arr
  // 3. convert filtered array to object

  const transcriptArr = Object.entries(transcript);
  const filteredTranscriptArr = transcriptArr.filter(
    ([key, value]) => value != null
  );
  const filteredTranscriptObj = Object.fromEntries(filteredTranscriptArr);
  // Destructure Filtered Object
  const {
    contentful_id,
    transcriptTags,
    transcriptImage,
    onelinerteaser: {
      childMarkdownRemark: { oneliner },
    },
    transcriptTitle,
  } = filteredTranscriptObj;

  //////////////////////////
  ////// Image Utils ///////
  //////////////////////////
  // Conditionally render gatsby image
  const pathToImage = getImage(transcriptImage);

  function TranscriptImage(props) {
    return (
      <GatsbyImage
        image={pathToImage}
        alt={transcriptTitle}
        className="c-transcript__image std-style"
      />
    );
  }

  let imgComponent;
  if (transcriptImage != undefined) {
    imgComponent = <TranscriptImage />;
  } else {
  }

  // remove dots in strings (if exists)
  const cleanString = transcriptTitle.replace(".", " ");
  // use slugify to return a string in a slug format
  const slug = slugify(cleanString, { lower: true });

  return (
    <Layout>
      <TranscriptWrapper>
        <h1 className="c-transcript__title">{transcriptTitle}</h1>
        {/* container  to create flexible grid + blox layout */}
        <div className="c-transcript__container">
          {imgComponent}
          {/* sub-container to create flexible grid + blox layout */}
          <div className="c-transcript__subcontainer">
            <div className="c-transcript__oneliner">{parse(`${oneliner}`)}</div>
            <div className="c-transcript__tagsandkeywords">
              <h5>Tags & Keywords</h5>
            </div>
            <div className="c-transcript__tagscontainer">
              <TagsContainer tags={transcriptTags} />
            </div>
          </div>
        </div>

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

  .c-transcript__container {
    justify-content: center;
  }

  .c-transcript__oneliner {
    margin: 2vh 0vw;
    text-align: center;
  }
  .c-transcript__oneliner {
    font-size: 0.85rem;
    font-weight: 500;
    font-style: normal;
  }

  .c-transcript__border {
    display: none;
  }

  .c-transcript__tagsandkeywords {
    display: none;
  }

  .c-transcript__tagscontainer {
    display: none;
  }

  .c-transcript__readtrans {
    display: none;
  }
  ///////////////////////////
  ////// Tablet /////////////
  ///////////////////////////

  @media (min-width: 992px) {
    padding: 4vh var(--padding-desktop) 6vh var(--padding-desktop);
    display: grid;
    column-gap: 4vw;
    row-gap: 2vh;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      "title title"
      "container container"
      "border border"
      "read read"
      "summary summary"
      "info questions";

    .c-transcript__title {
      font-size: 2.5rem;
      grid-area: title;
      margin: 0;
    }

    .c-transcript__container {
      grid-area: container;
      display: flex;
      flex-direction: row-reverse;
      flex-grow: 1 1 auto;
      column-gap: 4vh;
      margin: 1vh 0vw;
    }

    .c-transcript__subcontainer {
      display: flex;
      flex-direction: column;
      align-self: center;
      row-gap: 1vh;
    }

    .c-transcript__image {
      grid-area: image;
      padding: 4vh 8vw;
    }

    .c-transcript__oneliner {
      font-size: 1rem;
      margin: 1vh 0vw;
      grid-area: oneliner;
      align-self: center;
      text-align: center;
    }
    .c-transcript__tagsandkeywords {
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
    .c-transcript__tagscontainer {
      display: flex;
      margin: 1vh 0vw;
      grid-area: tags;

      .c-tagscontainer {
        justify-content: space-evenly;
      }
    }

    .c-transcript__border {
      display: block;
      border: 1px solid var(--primary-clr-200);
      border-radius: 1px;
      grid-area: border;
    }
    .c-transcript__readtrans {
      display: flex;
      grid-area: read;
      justify-self: end;
      font-size: 1.15rem;
      font-weight: 500;
      font-style: normal;
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

  .c-transcript__container {
    column-gap: 6vw;
    margin: 2vh 2vw;
  }

  .c-transcript__subcontainer {
    align-items: stretch;
    row-gap: 2vh;
  }
  .c-transcript__tagscontainer > .c-tagscontainer {
    row-gap: 0.5vh;
    justify-content: center;

   }
  }
`;

export default TranscriptTemplate;
