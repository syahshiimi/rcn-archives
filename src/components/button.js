import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const DefaultButton = ({ title, url, className }) => {
  return (
    <ButtonWrapper className={className}>
      <button type="submit">
        <Link to={url}>{title}</Link>
      </button>
    </ButtonWrapper>
  )
}

export const BackTTButton = ({ title }) => {
  return (
    <ButtonWrapper>
      <button className="button_totop">{title}</button>
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
    border-radius: calc(1.875rem + 4px);
  }

  a {
    color: var(--primary-clr-200) !important;
  }
`

export default DefaultButton
