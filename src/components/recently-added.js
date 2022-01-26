import React from "react";
import { Link } from "gatsby";
import slugify from "slugify";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

const query = graphql`
  {
    allContentfulInterviewTranscripts(
      sort: { order: DESC, fields: createdAt }
      limit: 5
    ) {
      nodes {
        featured
        transcriptImage {
          gatsbyImageData
        }
        transcriptTitle
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

export const RecentlyAdd = () => {
  const data = useStaticQuery(query);
  const recentadded = data.allContentfulInterviewTranscripts.nodes;
  console.log(recentadded);

  return (
    <article className="l-recentlyaddedcardcard">
      {" "}
      {recentadded.map((item) => {
        const {
          transcriptImage,
          transcriptTitle,
          oneLineTeaser: {
            childMarkdownRemark: { html },
          },
        } = item;

        // remove dots in strings (if exists)
        const cleanString = transcriptTitle.replace(".", " ");
        // use slugify to return a string in a slug format
        const slug = slugify(cleanString, { lower: true });

        // Conditional render image depending if it is available
        const ImgComponenet =
          transcriptImage != undefined ? (
            <FeatureImageWrapper>
              <GatsbyImage
                image={pathToImage}
                alt=""
                className="c-recentlyaddedcard__image"
              ></GatsbyImage>
            </FeatureImageWrapper>
          ) : null;

        const pathToImage = getImage(transcriptImage);
        return (
          <FeatureCardWrapper key={transcriptTitle}>
            <div className="c-recentlyaddedcard">
              <div className="c-recentlyaddedcard__title">
                {transcriptTitle}
              </div>
              {ImgComponenet}
              <div className="c-recentlyaddedcard__oneliner">
                {parse(`${html}`)}
              </div>
              <span className="c-recentlyaddedcard__read">
                <Link to={`browsearchives/${slug}`}>Read More </Link>
              </span>
            </div>
          </FeatureCardWrapper>
        );
      })}
    </article>
  );
};

const FeatureImageWrapper = styled.article``;
const FeatureCardWrapper = styled.section`
  .c-recentlyaddedcard {
    display: flex;
    background-color: var(--primary-clr-100);
    padding: 3vh 7vw;
    margin: 2vh 2vw;

    /* styling */
    border-radius: calc(2rem + 6px);
    display: flex;
    box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.45);
    flex-direction: column;
  }

  .c-recentlyaddedcard__title {
    text-align: center;
    font-family: "Lora", Serif;
    font-weight: bold;
    font-size: 0.95rem;
    margin: 0.45vh 0vw;
  }

  .c-recentlyaddedcard__oneliner {
    margin: 2vh 1vw;
    text-align: center;
    p {
      font-size: 0.95rem;
      line-height: 1.25;
    }
  }
  .c-recentlyaddedcard__read {
    font-family: "Ubuntu", Serif;
    font-weight: normal;
    text-align: right;
    font-size: 0.85rem;
    margin: 1vh 0vw;
    color: var(--primary-clr-150);
    text-align: center;
  }
`;
