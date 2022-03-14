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
      }
    }
  }
`;
const CollectionsTemplate = ({ data }) => {
  //  // remove dots in strings (if exists)
  //  const cleanString = transcriptTitle
  //    .replace(".", " ")
  //    .replace("(", " ")
  //    .replace(")", " ");
  //  // use slugify to return a string in a slug format
  //  const slug = slugify(cleanString, { lower: true });

  //  // Metadata
  //  const metadata = parse(`${oneliner}`);
  //  const {
  //    props: { children },
  //  } = metadata;
  const collectionsinfo = data.contentfulCollectionsPage;
  console.log(collectionsinfo);
  const {
    collectionTitle,
    collectionBlurb: {
      childMarkdownRemark: { html },
    },
    collectionTranscripts: [{ id, transcriptTitle, interviewer }],
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
        <hr className="c-ollectionspage__border"></hr>
        <h2 className="c-collectionspage__transcriptstitle">Transcripts</h2>
        <h3 className="c-collectionspage__trasnscriptssubtitle">
          These transcripts were interviewed by {interviewer}
          <FeatureCard />
        </h3>
      </CollectionsWrapper>
    </Layout>
  );
};

const CollectionsWrapper = styled.section``;

export default CollectionsTemplate;
