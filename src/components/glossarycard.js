import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const GlossaryCard = ({ glossary = [] }) => {
  console.log(glossary);

  // Destructure array to return the obj within it
  let glossaryObj = glossary[0];
  console.log(glossaryObj);

  // Next, we create an array from the Obj which has sub-ojb such as
  // alphabetA, alphabetB objs.
  // This will return the obj as arrays

  // We use the returned array later on to map over and return the react components
  const glossaryArr = Object.entries(glossaryObj);
  console.log(glossaryArr);

  return (
    <GlossaryCardWrapper>
      {glossaryArr.map((element, index) => {
        // We destructure array element[1], which containes childMarkdownRemark: { html }
        // which we will use parse over it.
        const {
          childMarkdownRemark: { html },
        } = element[1];
        const lastAlphabet = element[0].charAt(element[0].length - 1);
        console.log(lastAlphabet);
        return (
          <div className={"c-glossarycard" + " " + element[0]} key={index}>
            <h1 className="c-glossarycard__title">{lastAlphabet}</h1>
            <div className="c-glossarycard__container">
              {" "}
              <div className="c-glossarycard__content">{parse(`${html}`)}</div>
            </div>
          </div>
        );
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
    margin: 2vh 2vw 2vh 2vw;
  }

  .c-glossarycard__title {
    font-size: 3rem;
    margin-bottom: 0;
    text-align: right;
  }

  h5 {
    font-family: "Lora", sans-serif !important;
    margin: 3vh 0vw;
  }

  .c-glossarycard__content > p {
    text-align: left;
  }

  @media (min-width: 992px) {
    .c-glossarycard {
      border-radius: 5vw;
      flex-wrap: wrap;
      padding: 3vh 5vh 3vh 5vh;
    }
    .c-glossarycard__content {
      display: flex;
      flex-direction: row;
      align-items: center;
      /* grid-template-columns: auto; */
      /* grid-template-rows: repeat(auto-fill, min(1fr)); */
      /* grid-template-areas: */
      /* "alphabet alphabet" */
      /* "name content"; */
      margin: 0;
      column-gap: 2vw;
    }

    h1 {
      grid-area: alphabet;
      display: flex;
    }

    h5 {
      margin: 0;
      grid-area: name;
    }
    .c-glossarycard__content > p {
      margin: 0;
      grid-area: content;
    }
  }
`;

export default GlossaryCard;
