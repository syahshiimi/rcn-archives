import React from "react";
import { Link } from "gatsby";
import slugify from "slugify";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import parse from "html-react-parser";

const query = graphql`
  {
    allContentfulCollectionsPage {
      nodes {
        collectionTitle
        collectionTranscripts {
          id
          collectionTitle
        }
        collectionBlurb {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

export const CollectionCard = () => {
  const data = useStaticQuery(query);
  const collections = data.allContentfulCollectionsPage.nodes;
  console.log(collections);

  return (
    <article className="l-featurecard">
      {" "}
      {collections.map((item) => {
        const {
          //          transcriptImage,
          collectionTitle,
          collectionBlurb: {
            childMarkdownRemark: { html },
          },
        } = item;

        // remove dots in strings (if exists)
        const cleanString = collectionTitle
          .replace(".", " ")
          .replace("(", " ")
          .replace(")", " ");
        // use slugify to return a string in a slug format
        const slug = slugify(cleanString, { lower: true });

        return (
          <CollectionCardWrapper key={collectionTitle}>
            <div className="c-collectioncard">
              <div className="c-collectioncard__title">{collectionTitle}</div>
              <div className="c-collectioncard__blurb">{parse(`${html}`)}</div>
              <span className="c-collectioncard__read">
                <Link to={`${slug}`}>Read More </Link>
              </span>
            </div>
          </CollectionCardWrapper>
        );
      })}
    </article>
  );
};

const CollectionCardWrapper = styled.section`
  .c-collectioncard {
    display: flex;
    background-color: var(--primary-clr-100);
    padding: 3vh 7vw;
    margin: 1.5vh 2vw;

    /* styling */
    border-radius: calc(2rem + 6px);
    display: flex;
    box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.55);
    flex-direction: column;
  }

  .c-collectioncard__title {
    text-align: center;
    font-family: "Lora", Serif;
    font-weight: bold;
    font-size: 0.95rem;
    margin: 0.45vh 0vw;
  }

  .c-collectioncard__blurb {
    margin: 2vh 1vw;
    text-align: center;
    p {
      font-size: 0.85rem;
      line-height: 1.25;
    }
  }
  .c-collectioncard__read {
    font-family: "Ubuntu", Serif;
    font-weight: normal;
    text-align: right;
    font-size: 0.85rem;
    margin: 1vh 0vw;
    color: var(--primary-clr-150);
    text-align: center;
  }

  @media (min-width: 992px) {
    .c-collectioncard {
      padding: 2vh 1.5vh;
      margin: 1vh 0vw;
    }
    .c-collectioncard__blurb {
      margin: 1vh 0vw;
    }

    .c-collectioncard__read {
      margin: 0.5vh 0vw;
    }
  }

  @media (min-width: 1280px) {
    .c-collectioncard {
      margin: 2vh 1vw;
      padding: 3vh 0.5vh;
    }

    .c-collectioncard__title {
      margin: 0vh 2vw;
      font-size: 0.95rem;
    }

    .c-collectioncard__blurb {
      margin: 1.5vh 1.8vw;
      p {
        font-size: 0.85rem;
      }
    }

    .c-collectioncard__read {
      margin: 1vh 0vw;
    }
  }
  //////////////////////////////
  //////// 4k Display //////////
  //////////////////////////////

  @media (min-width: 2560px) {
    .c-collectioncard {
      margin: 1.5vh 1vw;
      padding: 2.5vh 0.5vw;
    }
    .c-collectioncard__title {
      font-size: 1.125rem;
    }

    .c-collectioncard__blurb {
      margin: 1vh 1.4vw;
    }

    .c-collectioncard__read {
      margin: 0.25vh;
    }
  }
`;
