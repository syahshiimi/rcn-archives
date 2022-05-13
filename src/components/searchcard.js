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
        <TagsContainer
          tags={transcriptTags}
          func={func}
          queryState={queryState}
        />
        <section className="c-searchcard__bottom">
          {" "}
          <div className="c-searchcard__titlecontainer">
            From{" "}
            {/*<span className="c-searchcard__bottomtitle">{transcriptTitle}</span>{" "}*/}
            <Link to={`${slug}`}>{transcriptTitle}</Link>
          </div>
          <span className="c-searchcard__read">
            <Link to={`${slug}`}>{transcriptTitle}</Link>
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
    display: none;
    visibility: none;
  }
  .c-searchcard__bottomtitle {
    font-family: "Lora", serif;
    font-size: 0.85rem;
    font-weight: 900;
    font-style: italic;
    text-align: left;
  }

  .c-tagscontainer {
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
    font-size: 0.75rem;
    margin: 1vh 0vw;
    text-align: center;
    font-family: "Ubuntu", Sans-Serif !important;
    a {
      /* font-family: "Lora", Serif !important; */
      font-weight: bold !important;
      font-family: "Lora", serif;
      font-style: italic;
      font-size: 0.8rem;
      font-weight: 900;
    }
  }

  //////////////////////////////
  ////////// Tablet ////////////
  //////////////////////////////

  @media (min-width: 992px) {
    .l-searchcard {
      padding: 2.5vh 4vw 1.5vh 4vw;
      margin: 1.5vh 1vw;
      display: flex;
      justify-content: center;
    }

    .c-searchcard__desktoptitle {
      font-size: 1.15rem;
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
      margin: 2vh 0vw;
      display: flex;
      justify-content: center;
      p {
        font-size: 1.025rem;
        text-align: justified;
      }
    }

    .c-tagscontainer {
      display: flex;
      margin: 1vh 0vw;
      justify-content: space-around;
    }

    .c-tagscontainer__tagpill {
      flex: 1 1 auto;
      justify-content: center;
    }

    /* hide mobile related elements */
    .c-searchcard__bottom {
      display: none;
      visibility: none;
    }
  }

  //////////////////////
  ///// Desktop ////////
  //////////////////////

  @media (min-width: 1280px) {
    .l-searchcard > a {
      margin: 1vh;
    }

    .l-searchcard:hover {
      transform: translateY(-4px);
      box-shadow: var(--hovercard-boxshadow);
    }

    .l-searchcard {
      padding: 3vh 2.5vw 2vh 2.5vw;
      transition: var(--hover-transition);
      flex: 0 0 auto;
    }

    .c-searchcard__desktoptitle {
      font-size: 1.15rem;
      margin: 1vh 0vw;
      a {
        text-decoration: none;
      }
      a:hover {
        transition: var(--hover-transition);
        text-decoration: underline;
      }
    }

    .c-searchcard__oneliner {
      text-align: left;
      margin: 2vh 0vw;

      p {
        text-align: left;
        font-size: 0.9rem;
      }
    }

    .c-searchcard__read {
      margin: 1.2vh;
      font-size: 1.125rem;
    }

    .c-tagscontainer {
      margin: 1vh 0.5vw 0;
      justify-content: space-around;
    }

    .c-tagscontainer__tagpill {
      margin: 0.5vh 0.2vw;
      flex: 1 1 auto;
      justify-content: center;

      :hover {
        transform: translateY(-2px);
        box-shadow: var(--hovercard-default);
        transition: var(--hover-transition);
      }
    }

    .c-tagscontainer__tag {
      padding: 0.65vh 0.5vw;
      font-size: 0.8rem;
    }
  }

  ///////////////////////////////
  //////// 4k Desktop ///////////
  ///////////////////////////////

  @media (min-width: 2500px) {
    .l-searchcard {
      margin: 1vh 0.5vw;
      padding: 2.5vh 2vw;
    }
    .c-searchcard__desktoptitle {
      font-size: 1.3rem;
    }

    .c-searchcard__oneliner {
      margin: 1.2vh 0;
      p {
        font-size: 1rem;
      }
    }

    .c-tagscontainer {
      margin: 0;
    }
    .c-tagscontainer__tag {
      font-size: 0.9rem !important;
      p {
      }
    }
  }
`;
