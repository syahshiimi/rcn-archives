import React from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import slugify from "slugify";
import { Link } from "gatsby";
import { TagsContainer } from "./tags";

export const SearchCard = ({
  transcriptTitle,
  transcriptTags,
  html,
  func,
  queryState,
}) => {
  // remove dots in strings (if exists)
  const cleanString = transcriptTitle
    .replace(".", " ")
    .replace("(", " ")
    .replace(")", " ");
  // use slugify to return a string in a slug format
  const slug = slugify(cleanString, { lower: true });
  return (
    <SearchCardWrapper>
      <div className="l-searchcard">
        <div className="c-searchcard__desktoptitle">
          <Link to={`${slug}`}>{transcriptTitle}</Link>
          {/* From {transcriptTitle} */}
        </div>
        <div className="c-searchcard__oneliner">{parse(`${html}`)}</div>
        <span className="c-searchcard__tagscontainer">
          <TagsContainer
            tags={transcriptTags}
            func={func}
            queryState={queryState}
          />
        </span>
        <section className="c-searchcard__bottom">
          {" "}
          <div className="c-searchcard__titlecontainer">
            From{" "}
            <span className="c-searchcard__bottomtitle">{transcriptTitle}</span>{" "}
          </div>
          <span className="c-searchcard__read">
            <Link to={`${slug}`}>Read More </Link>
          </span>
        </section>
      </div>
    </SearchCardWrapper>
  );
};

const SearchCardWrapper = styled.main`
  .l-searchcard {
    display: flex;
    justify-content: center;
    background-color: var(--primary-clr-100);
    /* padding: 3vh 7vw; */
    padding: 2.5vh 7vw;
    margin: 1.5vh 2vw;

    /* styling */
    border-radius: calc(2rem + 6px);
    display: flex;
    box-shadow: var(--hovercard-default);
    flex-direction: column;
  }

  .c-searchcard__desktoptitle {
    display: none;
    visibility: hidden;
  }

  .c-searchcard__oneliner {
    margin: 1vh 0vw 1.5vh 0vw;
    p {
      font-family: "Ubuntu", Serif !important;
      font-size: 0.85rem;
      line-height: 1.25;
      text-align: justify;
    }
  }

  .c-searchcard__read {
    font-family: "Ubuntu", Serif;
    font-weight: normal;
    font-size: 0.75rem;
    margin: 1vh 0vw;
    color: var(--primary-clr-150);
    text-align: center;
  }

  .c-searchcard__tagscontainer {
    display: none;
  }

  .c-searchcard__bottom {
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: center;
  }

  .c-searchcard__titlecontainer {
    /* font-size: 0.95rem; */
    font-size: 0.8rem;
    margin: 1vh 0vw;
    text-align: center;
    font-family: "Ubuntu", Sans-Serif !important;
    a {
      /* font-family: "Lora", Serif !important; */
      font-weight: bold !important;
    }
  }
  .c-searchcard__bottomtitle {
    font-family: "Lora", serif;
    font-size: 0.85rem;
    font-weight: 900;
    font-style: italic;
    text-align: left;
  }

  //////////////////////////////
  ////////// Tablet ////////////
  //////////////////////////////

  @media (min-width: 992px) {
    .l-searchcard > * {
      margin: 0;
    }

    .l-searchcard {
      padding: 2.5vh 5vw 1.5vh 5vw;
      margin: 1.5vh 1vw;
    }

    .c-searchcard__desktoptitle {
      font-size: 1.25rem;
      display: flex;
      visibility: visible;
      justify-content: center;
      a {
        font-family: "Lora", Serif;
        text-align: center;
        font-weight: bold !important;
      }
    }

    .c-searchcard__oneliner {
      p {
        text-align: center;
      }
    }

    .c-searchcard__oneliner {
      margin: 1vh 0vw;
      p {
        font-size: 1.025rem;
      }
    }

    .c-searchcard__read {
      font-size: 1rem;
      margin: 1vh 0vw;
      font-style: normal;
      font-weight: 500;
    }

    .c-searchcard__tagscontainer {
      display: flex;
      margin: 0.5vh 0vw;
    }

    .c-searchcard__bottom {
      display: none;
      visibility: none;
    }
    .c-searchcard__title {
      display: none;
      visibility: none;
    }
  }

  //////////////////////
  ///// Desktop ////////
  //////////////////////

  @media (min-width: 1280px) {
    .l-searchcard > * {
      margin: 0;
    }

    .l-searchcard > a {
      margin: 1vh;
    }

    .l-searchcard:hover {
      transform: translateY(-4px);
      box-shadow: var(--hovercard-boxshadow);
    }

    .l-searchcard {
      padding: 4vh 6vw 2vh 6vw;
      margin: 1.5vh 2vw;
      transition: var(--hover-transition);
    }

    .c-searchcard__desktoptitle {
      font-size: 1.25rem;
      margin: 1vh 0vw;
    }

    .c-searchcard__oneliner {
      text-align: left;
      margin: 1vh 0vw;

      p {
        font-size: 1.125rem;
      }
    }

    .c-searchcard__read {
      margin: 1.2vh;
      font-size: 1.125rem;
    }
    .c-searchcard__tagscontainer {
      margin: 1.25vh 0vw;
    }

    .c-tagscontainer__tag {
      font-size: 0.875rem;
    }
  }

  ///////////////////////////////
  //////// 4k Desktop ///////////
  ///////////////////////////////

  @media (min-width: 2560px) {
    .l-searchcard {
      padding-top: 2.5vh;
    }
    .c-searchcard__title {
      font-size: 1.5rem;
    }

    .c-searchcard__oneliner {
      p {
        font-size: 1.275rem;
      }
    }

    .c-searchcard__tagscontainer {
      margin: 1.5vh 0vw;
    }
  }
`;
