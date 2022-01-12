import React from "react"
import styled from "styled-components"

export const TagsContainer = ({ tags = [] }) => {
  return (
    <TagsWrapper className="c-tagscontainer">
      {tags.map((item, index) => {
        return (
          <div className="c-tagscontainer__tagpill" key={index}>
            <p className="c-tagscontainer__tag">{item}</p>
          </div>
        )
      })}
    </TagsWrapper>
  )
}

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  .c-tagscontainer__tagpill {
    margin: 0.5vh 1vw;
    background-color: var(--primary-clr-200);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: calc(2rem);
    flex: 0 1 auto;
  }
  .c-tagscontainer__tag {
    font-family: Ubuntu;
    font-size: 0.75rem;
    line-height: 20px;
    color: var(--primary-clr-50);
    padding: 1vh 3vw;
  }

  @media (min-width: 992px) {
    .c-tagscontainer__tagpill {
      margin: 0.2vh .3vw;
    }
    .c-tagscontainer__tag {
      padding: 0.5vh 1vw;
    }
  }
`
