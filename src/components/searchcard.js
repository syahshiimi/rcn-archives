import React from "react"
import parse from "html-react-parser"
import styled from "styled-components"

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
        return (
          <div className="l-searchcard" key={id}>
            <h3 className="c-searchcard__title">{transcriptTitle}</h3>
            <div className="c-searchcard__summary">{parse(`${html}`)}</div>
            <div className="c-searchcard__tagscontainer">
              {transcriptTags.map((item, index) => {
                return (
                  <div className="c-searchcard__tagpill">
                    <p className="c-searchcard__tag" key={index}>
                      {item}
                    </p>
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
  background-color: var(--primary-clr-100);
  padding: 2vh 8vw;
  margin: 2vh 2vw;

  /* styling */
  border-radius: calc(2rem + 6px);
  display: flex;
  box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.65);
  flex-direction: column;

  .l-searchcard > * {
    margin: 2vh 0vw;
  }

  .c-searchcard__title {
    font-family: "Lora", Serif;
    text-decoration: underline;
    margin-bottom: 3vh;
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
`
