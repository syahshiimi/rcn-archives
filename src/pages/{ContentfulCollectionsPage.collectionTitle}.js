import { graphql, Link } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import sanitizeHtml from "sanitize-html";
import slugify from "slugify";
import styled from "styled-components";

// Components import
import { Head } from "../components/head";
import Layout from "../components/Layout";
import { FeatureCard } from "../components/feature-cards";
import { BackTopButton } from "../components/button";

export const query = graphql`
  query MyQuery($collectionTitle: String) {
    contentfulCollectionsPage(collectionTitle: { eq: $collectionTitle }) {
      collectionTitle
      collectionBlurb {
        childMarkdownRemark {
          html
        }
      }
      collectionTranscripts {
        id
        transcriptTitle
        interviewer
        oneLineTeaser {
          oneLineTeaser
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
const CollectionsTemplate = ({ data }) => {
  //  // Metadata
  //  const metadata = parse(`${oneliner}`);
  //  const {
  //    props: { children },
  //  } = metadata;
  const collectionsinfo = data.contentfulCollectionsPage;
  const {
    collectionTitle,
    collectionBlurb: {
      childMarkdownRemark: { html },
    },
    collectionTranscripts,
    collectionTranscripts: [{ interviewer }],
  } = collectionsinfo;

  // Sanitize html
  const sanitizedHTML = sanitizeHtml(html);

  return (
    <Layout>
      <Head title={collectionTitle} />
      <CollectionsWrapper>
        <h1 className="c-collectionspage__title">{collectionTitle}</h1>
        <div className="c-collectionspage__blurb">
          {parse(`${sanitizedHTML}`)}
        </div>
        <hr className="c-collectionspage__border"></hr>
        <h3 className="c-collectionspage__transcriptstitle">Transcripts</h3>
        <p className="c-collectionspage__trasnscriptssubtitle">
          These transcripts were interviewed by {interviewer}
        </p>

        <FeatureCard collections={collectionTranscripts} />
        <BackTopButton />
      </CollectionsWrapper>
    </Layout>
  );
};

const CollectionsWrapper = styled.section`
  display: flex;
  row-gap: 2vh;
  flex-direction: column;
  justify-contnet: center;
  text-align: center;
  padding: 2vh var(--padding-mobile);

  .c-collectionspage__blurb {
    padding: 2vh 0vw;
  }

  .c-collectionspage__border {
    border: 1px solid var(--primary-clr-100);
    margin: 1vh 0vw;
  }

  .c-collectionspage__transcriptstitle {
    margin: 1vh 0vw;
  }

  .c-collectionspage__trasnscriptssubtitle {
    font-size: 0.85rem;
  }
`;

export default CollectionsTemplate;
