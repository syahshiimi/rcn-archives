import { graphql, Link } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

// Components import
import { Head } from "../components/head";
import Layout from "../components/Layout";

export const query = graphql`
  query getCollectionPage($collectionTitle: String) {
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
  const collections = data.contentfulCollectionsPage;
  const { collectionTitle, collectionBlurb } = collections;

  return (
    <Layout>
      <Head title={collectionTitle} />
      <CollectionsWrapper>
        <h1 className="c-collectionpage__title">{collectionTitle}</h1>
        <div className="c-collection__blurb">collection blurb goes here </div>
      </CollectionsWrapper>
    </Layout>
  );
};

const CollectionsWrapper = styled.section``;

export default CollectionsTemplate;
