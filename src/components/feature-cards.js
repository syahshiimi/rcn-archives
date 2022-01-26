import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allContentfulInterviewTranscripts {
      nodes {
        transcriptImage {
          gatsbyImageData
        }
        id
        transcriptTags
        transcriptTitle
        oneLineTeaser {
          oneLineTeaser
          childMarkdownRemark {
            html
          }
        }
        interviewee
        interviewer
      }
    }
  }
`;

export const FeatureCard = () => {
  const data = useStaticQuery(query);
  const featured = data.allContentfulInterviewTranscripts.nodes;
  console.log(featured);
  return (
    <FeatureCardWrapper>
      <div className="l-featurecard">
        <div className="c-featurecard__title"></div>
        <FeatureImageWrapper></FeatureImageWrapper>
        <div className="c-featurecard__summary"></div>
      </div>
    </FeatureCardWrapper>
  );
};

const FeatureImageWrapper = styled.article``;
const FeatureCardWrapper = styled.section``;
