import React from "react";
import styled from "styled-components";

export const CheckVernacularLang = ({ onClick, type, transcript }) => {
  if (transcript == null || transcript.length == 1) {
    return null;
  } else if (transcript != null) {
    return (
      <ButtonWrapper>
        <button onClick={onClick} className="c-langtoggle">
          Read in {type}
        </button>
      </ButtonWrapper>
    );
  }
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
