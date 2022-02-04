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
        return (
          <div className={"c-glossarycard" + " " + element[0]} key={index}>
            <p className="c-glossarycard__content">{parse(`${html}`)}</p>
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
  }

  h1 {
    font-size: 3rem;
    margin: 3vh 0vw 2vh 0vw;
  }

  h5 {
    font-family: "Lora", sans-serif !important;
    margin: 5vh 0vw 0vh 10vw;
  }
  .c-glossarycard__content > p {
    margin: 1vh 0vw 2vh 10vw;
  }
`;

export default GlossaryCard;
