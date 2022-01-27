import React from "react";
import { Link } from "gatsby";
import slugify from "slugify";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

const query = graphql`
  {
    allContentfulInterviewTranscripts(filter: { featured: { eq: true } }) {
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

export const FeatureCard = () => {
  const data = useStaticQuery(query);
  const featured = data.allContentfulInterviewTranscripts.nodes;

  return (
    <article className="l-featurecard">
      {" "}
      {featured.map((item) => {
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
                className="c-featurecard__image"
              ></GatsbyImage>
            </FeatureImageWrapper>
          ) : null;

        const pathToImage = getImage(transcriptImage);
        return (
          <FeatureCardWrapper key={transcriptTitle}>
            <div className="c-featurecard">
              <div className="c-featurecard__title">{transcriptTitle}</div>
              {ImgComponenet}
              <div className="c-featurecard__oneliner">{parse(`${html}`)}</div>
              <span className="c-featurecard__read">
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
  .c-featurecard {
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

  .c-featurecard__title {
    text-align: center;
    font-family: "Lora", Serif;
    font-weight: bold;
    font-size: 0.95rem;
    margin: 0.45vh 0vw;
  }

  .c-featurecard__oneliner {
    margin: 2vh 1vw;
    text-align: center;
    p {
      font-size: 0.95rem;
      line-height: 1.25;
    }
  }
  .c-featurecard__read {
    font-family: "Ubuntu", Serif;
    font-weight: normal;
    text-align: right;
    font-size: 0.85rem;
    margin: 1vh 0vw;
    color: var(--primary-clr-150);
    text-align: center;
  }

  @media (min-width: 992px) {
    .c-featurecard {
      padding: 2vh 1.5vh;
      margin: 1vh 0vw;
    }
    .c-featurecard__oneliner {
      margin: 1vh 0vw;
    }

    .c-featurecard__read {
      margin: 0.5vh 0vw;
    }
  }

  @media (min-width: 1280px) {
    .c-featurecard {
      margin: 2vh 1vw;
      padding: 3vh 0.5vh;
    }

    .c-featurecard__title {
      font-size: 0.85rem;
    }

    .c-featurecard__oneliner {
      margin: 1.5vh 1.2vw;
      p {
        font-size: 0.75rem;
      }
    }

    .c-featurecard__read {
      margin: 1vh 0vw;
    }
  }
`;
