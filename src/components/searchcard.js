import React from "react"
import parse from "html-react-parser"
import styled from "styled-components"
import slugify from "slugify"
import { Link } from "gatsby"

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

export const SearchCard = ({ transcript = [] }) => {
  return (
    <SearchCardWrapper>
      {transcript.map(item => {
        const {
          id,
          transcriptTitle,
          transcriptTags,
          oneLineTeaser: {
            childMarkdownRemark: { html },
          },
        } = item
        const slug = slugify(transcriptTitle, { lower: true })
        console.log(slug)
        const SortTags = transcriptTags.sort() // sort tags
        return (
          <div className="l-searchcard" key={id}>
            <Link to={`${slug}`} className="c-searchcard__title">
              {transcriptTitle}
            </Link>
            <div className="c-searchcard__summary">{parse(`${html}`)}</div>
            <div className="c-searchcard__tagscontainer">
              {transcriptTags.map((item, index) => {
                return (
                  <div className="c-searchcard__tagpill" key={index}>
                    <p className="c-searchcard__tag">{item}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
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

  .l-searchcard > * {
    margin: 2vh 0vw;
  }

  .c-searchcard__title {
    font-family: "Lora", Serif;
    font-weight: bold;
    font-size: 1.15rem;
  }

  .c-searchcard__summary {
    font-size: 0.75rem;
    margin-bottom: 3vh;
  }

  .c-searchcard__tagscontainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .c-searchcard__tagpill {
    margin: 0.5vh 1vw;
    background-color: var(--primary-clr-200);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: calc(2rem);
    flex: 1 1 auto;
  }

  .c-searchcard__tag {
    font-family: Ubuntu;
    font-size: 0.75rem;
    line-height: 20px;
    color: var(--primary-clr-50);
    padding: 1vh 2vw;
  }

  ////////////////////
  ////// Tablet //////

  @media (min-width: 992px) {
    .l-searchcard > * {
    margin: 0;
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

    .c-searchcard__tagpill {
      flex: 0 1 auto;
    }

    .c-searchcard__tag {
      font-size: 0.875rem;
    }
  }


  //////////////////////
  ///// Desktop ////////
  //////////////////////

  @media (min-width: 1280px) {

    padding: 6vh 4vw;
    margin: 0vh 8vw;
    .l-searchcard > * {
      margin: 0;
    }


    .c-searchcard__summary > p {
      text-align: left;
      margin: 6vh 0vw;
    }

    .c-searchcard__tagscontainer {
      justify-content: center;

    }
    .c-searchcard__tagpill {
      align-items: flex-start;
      margin: 1vh 1vw;
      flex: 0 1 auto;
  }
`
