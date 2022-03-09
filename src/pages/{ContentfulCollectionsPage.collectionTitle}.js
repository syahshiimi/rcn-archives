import { graphql, Link } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

// Components import
import { Head } from "../components/head";
import Layout from "../components/Layout";

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
  console.log(data);

  return (
    <Layout>
      <Head title="Hi" />
      <CollectionsWrapper></CollectionsWrapper>
    </Layout>
  );
};

const CollectionsWrapper = styled.section``;

export default CollectionsTemplate;
