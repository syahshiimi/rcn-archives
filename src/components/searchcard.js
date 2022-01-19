import React from "react"
import parse from "html-react-parser"
import styled from "styled-components"
import slugify from "slugify"
import { Link } from "gatsby"
import { TagsContainer } from "./tags"

// Create list of countries for color tagging
const ListofCountries = [
  "Cambodia",
  "China",
  "Indonesia",
  "Japan",
  "Malaya_Malaysia",
  "Philippines",
  "Singapore",
  "Taiwan",
  "Vietnmam",
]

export const SearchCard = ({ id, transcriptTitle, transcriptTags, html }) => {
  const slug = slugify(transcriptTitle, { lower: true })
  return (
    <SearchCardWrapper>
      <div className="l-searchcard">
        <div className="c-searchcard__title">{transcriptTitle}</div>
        <div className="c-searchcard__summary">{parse(`${html}`)}</div>
        <span className="c-searchcard__read">
          <Link to={`${slug}`}>Read More </Link>
        </span>
      </div>
    </SearchCardWrapper>
  )
}

const SearchCardWrapper = styled.main`
  .l-searchcard {
    background-color: var(--primary-clr-100);
    padding: 4vh 8vw;
    margin: 2vh 2vw;

    /* styling */
    border-radius: calc(2rem + 6px);
    display: flex;
    box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.65);
    flex-direction: column;
  }

  .c-searchcard__title {
    font-family: "Lora", Serif;
    font-weight: bold;
    font-size: 1rem;
    margin: 0.45vh 0vw;
  }

  .c-searchcard__summary {
    font-size: 0.75rem;
    margin: 2vh 0vw;
  }

  .c-searchcard__read {
    font-family: 'Ubuntu', Serif,
    font-weight: normal;
    text-align: right;
    font-size: .75rem;
    margin: 1vh 0vw;
    color: var(--primary-clr-150);
  }

  ////////////////////
  ////// Tablet //////

  @media (min-width: 992px) {
    .l-searchcard > * {
      margin: 0;
    }

    .l-searchcard {
      padding: 3vh 5vw;
    }

    .c-searchcard__title {
      font-size: 1.5rem;
    }

    .c-searchcard__summary {
      margin: 2vh 0vw;
      font-size: 1rem;
    }

    .c-searchcard__tagscontainer {
      justify-content: center;
    }

    //    .c-searchcard__tagpill {
    //      flex: 0 1 auto;
    //    }
    //
    //    .c-searchcard__tag {
    //      font-size: 0.875rem;
    //    }
  }

  //////////////////////
  ///// Desktop ////////
  //////////////////////

  @media (min-width: 1280px) {
    .l-searchcard {
      margin: 4vh 2vw;
    }
    .l-searchcard > * {
      margin: 0;
    }

    .l-searchcard > a {
      margin: 1vh;
    }

    .l-searchcard {
      padding: 4vh 6vw;
    }

    .c-searchcard__summary > p {
      text-align: left;
      margin: 2.2vh 0vw;
      font-size: 1rem;
    }

    //    .c-searchcard__tagscontainer {
    //      justify-content: center;
    //
    //      p {
    //        font-size: 0.8rem;
    //      }
    //    }
    //    .c-searchcard__tagpill {
    //      align-items: flex-start;
    //      margin: 1vh 1vw;
    //      flex: 0 1 auto;
    //    }
  }
`
