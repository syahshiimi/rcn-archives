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
          <div className="c-glossarycard" key={index}>
            <p className="c-glossarycard__content">{parse(`${html}`)}</p>
          </div>
        );
      })}
    </GlossaryCardWrapper>
  );
};
const GlossaryCardWrapper = styled.section``;

export default GlossaryCard;
