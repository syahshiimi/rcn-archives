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
      limit: 8
    ) {
      nodes {
        featured
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
        const cleanString = transcriptTitle
          .replace(".", " ")
          .replace("(", " ")
          .replace(")", " ");
        // use slugify to return a string in a slug format
        const slug = slugify(cleanString, { lower: true });

        //        // Conditional render image depending if it is available
        //        const ImgComponent =
        //          transcriptImage != null ? (
        //            <FeatureImageWrapper>
        //              <GatsbyImage
        //                image={pathToImage}
        //                alt=""
        //                className="c-recentlyaddedcard__image"
        //              ></GatsbyImage>
        //            </FeatureImageWrapper>
        //          ) : null;

        //        const pathToImage = getImage(transcriptImage);
        return (
          <RecentlyAddWrapper key={transcriptTitle}>
            <div className="c-recentlyaddedcard">
              <div className="c-recentlyaddedcard__title">
                {transcriptTitle}
              </div>
              <div className="c-recentlyaddedcard__oneliner">
                {parse(`${html}`)}
              </div>
              <span className="c-recentlyaddedcard__read">
                <Link to={`browsearchives/${slug}`}>Read More </Link>
              </span>
            </div>
          </RecentlyAddWrapper>
        );
      })}
    </article>
  );
};

const FeatureImageWrapper = styled.article``;
const RecentlyAddWrapper = styled.section`
  .c-recentlyaddedcard {
    display: flex;
    background-color: var(--primary-clr-50);
    padding: 3vh 7vw;
    margin: 1.5vh 2vw;

    /* styling */
    border-radius: calc(2rem + 6px);
    display: flex;
    box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.65);
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
      font-size: 0.85rem;
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
  /////////////////////////////
  //////// Tablet /////////////
  /////////////////////////////

  @media (min-width: 992px) {
    .c-recentlyaddedcard {
      padding: 2vh 1.5vh;
      margin: 1vh 0vw;
    }

    .c-recentlyaddedcard__title {
      font-size: 0.85rem;
    }
    .c-recentlyaddedcard__oneliner {
      margin: 1vh 0vw;
      p {
        font-size: 0.75rem;
      }
    }

    .c-recentlyaddedcard__read {
      margin: 0.5vh 0vw;
      font-size: 0.75rem;
    }
  }

  /////////////////////////////
  /////// Desktop /////////////
  /////////////////////////////

  @media (min-width: 1280px) {
    .c-recentlyaddedcard {
      margin: 2vh 1vw;
      padding: 3vh 0.5vh;
    }

    .c-recentlyaddedcard__title {
      margin: 0vh 2vw;
      font-size: 0.95rem;
    }

    .c-recentlyaddedcard__oneliner {
      margin: 1.5vh 1.8vw;
      p {
        font-size: 0.85rem;
      }
    }

    .c-recentlyaddedcard__read {
      margin: 1vh 0vw;
    }
  }

  //////////////////////////////
  //////// 4k Display //////////
  //////////////////////////////

  @media (min-width: 2560px) {
    .c-recentlyaddedcard {
      margin: 1.5vh 1vw;
      padding: 2.5vh 0.5vw;
    }
    .c-recentlyaddedcard__title {
      font-size: 1.125rem;
    }

    .c-recentlyaddedcard__oneliner {
      margin: 1vh 1.8vw;
    }

    .c-recentlyaddedcard__read {
      margin: 0.25vh;
    }
  }
`;
