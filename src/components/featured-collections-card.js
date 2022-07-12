import { graphql, Link, useStaticQuery } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

// Import Components
import { SimpleButton } from "./simplebutton";

const query = graphql`
  {
    allContentfulCollectionsPage(
      sort: { order: ASC, fields: collectionTitle }
    ) {
      nodes {
        collectionTitle
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
          .replace(")", " ")
          .replace("'", " ");
        // use slugify to return a string in a slug format
        const slug = slugify(cleanString, { lower: true });

        return (
          <CollectionCardWrapper key={collectionTitle}>
            <div className="c-collectioncard">
              <div className="c-collectioncard__title">{collectionTitle}</div>
              <div className="c-collectioncard__blurb">{parse(`${html}`)}</div>
              <div className="c-collectioncard__button">
                <SimpleButton title="Read More" url={`${slug}`} />
              </div>
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
    margin: 2vh 1vw 0vh 1vw;
    text-align: left;
    p {
      font-size: 0.85rem;
      line-height: 1.25;
    }
  }
  .c-collectioncard__button {
    font-family: "Ubuntu", Serif;
    font-weight: normal;
    text-align: right;
    margin: 1vh 0vw;
    font-size: 0.85rem;
    color: var(--primary-clr-150);
    text-align: right;
  }

  @media (min-width: 992px) {
    .c-collectioncard {
      padding: 2vh 1.5vh;
      margin: 1vh 0vw;
      transition: var(--hover-transition);
    }

    .c-collectioncard: hover {
      transform: translateY(-4px);
      box-shadow: 0px 5px 14px rgba(51, 53, 51, 0.65);
    }

    .c-collectioncard__title {
      font-size: 0.85rem;
    }
    .c-collectioncard__blurb {
      margin: 1vh 0vw;
      p {
        font-size: 0.75rem;
      }
    }

    .c-collectioncard__read {
      margin: 0;
    }
    .c-collectioncard__button {
      margin: 0;

      .c-simplebutton {
        font-size: 0.65rem;
      }
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

    .c-collectioncard__button {
      margin: 0vh 2vw;
    }
  }
  //////////////////////////////
  //////// 4k Display //////////
  //////////////////////////////

  @media (min-width: 2500px) {
    .c-collectioncard {
      margin: 1.5vh 1vw;
      padding: 2vh 0.5vw;
    }
    .c-collectioncard__title {
      margin: 1vh 1vw;
      font-size: 1.125rem;
    }

    .c-collectioncard__blurb {
      margin: 1vh 1vw;
    }

    .c-collectioncard__read {
      margin: 0.25vh;
    }

    .c-collectioncard__button {
      margin: 0;
    }
    .c-simplebutton {
      margin: 0vh 1vw;
    }
  }
`;
