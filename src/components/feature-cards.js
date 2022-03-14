import { Link } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import sanitize from "sanitize-html";
import slugify from "slugify";
import styled from "styled-components";

// import components
import { SimpleButton } from "./simplebutton";
export const FeatureCard = ({ collections = [] }) => {
  return (
    <>
      {collections.map((item, index) => {
        const {
          id,
          transcriptTitle,
          interviewer,
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

        // Sanitize HTML to be parsed
        const cleanHTML = sanitize(html);

        return (
          <FeatureCardWrapper key={index}>
            <div className="c-featurecard">
              <div className="c-featurecard__title">{transcriptTitle}</div>
              <div className="c-featurecard__oneliner">
                {parse(`${cleanHTML}`)}
              </div>
              <span className="c-featurecard__read">
                <SimpleButton
                  title="Read More"
                  url={`../browsearchives/${slug}`}
                />
              </span>
            </div>
          </FeatureCardWrapper>
        );
      })}
    </>
  );
};

const FeatureCardWrapper = styled.div`
  .c-featurecard {
    justify-content: center;
    display: flex;
    background-color: var(--primary-clr-100);
    padding: 3vh 7vw;
    margin: 1.5vh 2vw;

    /* styling */
    border-radius: calc(2rem + 6px);
    display: flex;
    box-shadow: var(--hovercard-default);
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
    margin: 2vh 1vw 1vh 1vh;
    text-align: justify;
    p {
      font-size: 0.85rem;
      line-height: 1.25;
    }
  }
  .c-featurecard__read {
    font-family: "Ubuntu", Serif;
    font-weight: normal;
    text-align: right;
    font-size: 0.85rem;
    color: var(--primary-clr-150);
    margin: 0;
    text-align: center;
  }

  @media (min-width: 992px) {
    .c-featurecard {
      padding: 2vh 1.5vh;
      justify-content: center;
      margin: 1vh 0vw;
    }
    .c-featurecard__oneliner {
      font-size: 4rem !important;
      p {
        text-align: justify;
      }
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
      margin: 0vh 2vw;
      font-size: 0.95rem;
    }

    .c-featurecard__oneliner {
      margin: 1.5vh 1.8vw;
      p {
        font-size: 0.85rem;
      }
    }

    .c-featurecard__read {
      margin: 1vh 0vw;
    }
  }
  //////////////////////////////
  //////// 4k Display //////////
  //////////////////////////////

  @media (min-width: 2560px) {
    .c-featurecard {
      margin: 1.5vh 1vw;
      padding: 2.5vh 0.5vw;
    }
    .c-featurecard__title {
      font-size: 1.125rem;
    }

    .c-featurecard__oneliner {
      margin: 1vh 1.4vw;
    }

    .c-featurecard__read {
      margin: 0.25vh;
    }
  }
`;
