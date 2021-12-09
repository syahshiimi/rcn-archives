import React from "react"
import styled from "styled-components"

const DefaultButton = () => {
  return (
    <ButtonWrapper>
      <button type="submit" className="contribute__btn">
        Submit
      </button>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    /* display */
    flex-direction: row;
    padding: 1.2rem 1.5rem 1.2rem 1.5rem;
    margin: 1rem;
    border: none;

    /* styling */
    background-color: #f5cb5c;
    font-family: "Ubuntu", sans-serif;
    font-style: normal;
    font-weight: 500;

    /* Button DS */
    box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.65);
    border-radius: 30px;
  }
`
export default DefaultButton
