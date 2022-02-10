import React from "react";
import styled from "styled-components";

////////////////////////////////////////////
/////////// Search Cards ///////////////////
////////////////////////////////////////////

export const TagsContainer = ({ tags = [], func, queryState }) => {
  return (
    <TagsWrapper className="c-tagscontainer">
      {tags.map((item, index) => {
        return (
          <button
            className="c-tagscontainer__tagpill"
            key={index}
            onClick={() => func({ item })} // We run an onclick function that will use the func function with the variable from {item}
            // onClick={tagClick} // We run an onclick function that will use the func function with the variable from {item}
          >
            <p className="c-tagscontainer__tag">{item}</p>
          </button>
        );
      })}
    </TagsWrapper>
  );
};

export const NestedTagsContainer = ({ tags = [] }) => {
  return (
    <TagsWrapper className="c-tagscontainer">
      {tags.map((item, index) => {
        return (
          <button className="c-tagscontainer__tagpill" key={index}>
            <p className="c-tagscontainer__tag">{item}</p>
          </button>
        );
      })}
    </TagsWrapper>
  );
};

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  .c-tagscontainer__tagpill {
    border: none;
    margin: 0.5vh 1vw;
    background-color: var(--primary-clr-150);
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
      margin: 0.325vh 0.3vw;
    }
    .c-tagscontainer__tag {
      padding: 0.5vh 1vw;
      margin: 0.2vh 0.5vw;
      font-size: 0.85rem;
    }
  }

  @media (min-width: 1280px) {
    .c-tagscontainer__tag {
      font-size: 1rem;
      padding: 1.2vh 1vw;
    }

    .c-tagscontainer__tagpill {
      margin: 0.8vh 0.3vw;
    }
  }

  @media (min-width: 2560px) {
    .c-tagscontainer__tag {
      font-size: 1rem !important;
      padding: 0.8vh 0.8vw;
    }

    .c-tagscontainer__tagpill {
      margin: 0.5vh 0.3vw;
    }
  }
`;
