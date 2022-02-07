import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const GlossaryCard = ({ glossary = [] }) => {
  return (
    <GlossaryCardWrapper>
      {glossary.map((element, index) => {
        // We destructure array element[1], which containes childMarkdownRemark: { html }
        // which we will use parse over it.
        const {
          childMarkdownRemark: { html },
        } = element[1];
        const lastAlphabet = element[0].charAt(element[0].length - 1);
        const checkString = "<p>None</p>";
        if (html != checkString) {
          return (
            <div className={"c-glossarycard" + lastAlphabet} key={index}>
              <div className="c-glossarycard">
                {" "}
                <h1 className="c-glossarycard__title">{lastAlphabet}</h1>
                <div className="c-glossarycard__container">
                  {" "}
                  <div className="c-glossarycard__content">
                    {parse(`${html}`)}
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </GlossaryCardWrapper>
  );
};
const GlossaryCardWrapper = styled.section`
  .c-glossarycard {
    background: var(--primary-clr-100);
    padding: 2vh 10vw 3vh 10vw;
    margin: 3vh 0vw;
    border-radius: calc(10vw + 1px);
    display: flex;
    flex-direction: column;
  }

  .c-glossarycard__container {
    margin: 0vh 2vw 2vh 0vw;
  }

  .c-glossarycard__title {
    font-size: 3rem;
    margin-bottom: 0;
    text-align: right;
  }

  h5 {
    font-family: "Lora", sans-serif !important;
    margin: 3.5vh 0vw 1.5vh 0vw;
  }

  .c-glossarycard__content > p {
    text-align: left;
  }

  @media (min-width: 992px) {
    .c-glossarycard {
      border-radius: 5vw;
      flex-wrap: wrap;
      padding: 3vh 5vw 4vh 5vw;
    }

    .c-glossarycard__title {
      margin-top: 0;
      font-size: 3.5rem;
    }

    .c-glossarycard__container {
      flex-wrap: wrap;
      margin: 0;
    }

    .c-glossarycard__content {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      margin: 0;
    }

    h5 {
      margin: 2vh 0vw 1vh 0vw;
    }
    .c-glossarycard__content > p {
      margin: 0;
      grid-area: content;
    }
  }

  @media (min-width: 1280px) {
    .c-glossarycard {
      padding: 6vh 6vw 8vh 6vw;
    }

    .c-glossarycard__title {
    }

    h5 {
      margin: 3vh 0vw 1vh 0vw;
      font-size: 1.25rem;
    }
  }

  @media (min-width: 2560px) {
    .c-glossarycard {
      padding: 4vh 4vw 6vh 4vw;
    }
    h5 {
      font-size: 1.5rem;
    }
  }
`;

export default GlossaryCard;
