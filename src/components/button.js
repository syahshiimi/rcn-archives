import { IconContext } from "@react-icons/all-files/lib";
import { Link } from "gatsby";
import { TiArrowLeft } from "@react-icons/all-files/ti/TiArrowLeft";
import React from "react";
import styled from "styled-components";

const DefaultButton = ({ title, url, className }) => {
  return (
    <ButtonWrapper className={className}>
      <button type="submit">
        <Link to={url}>{title}</Link>
      </button>
    </ButtonWrapper>
  );
};

export const BackTopButton = () => {
  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ButtonWrapper>
      <button className="button_totop" onClick={ScrollTop}>
        Scroll To Top
      </button>
    </ButtonWrapper>
  );
};

export const BackToSummaryBtn = () => {
  const BTS = () => {
    history.back();
  };
  return (
    <AltButtonWrapper>
      <button onClick={BTS} className="c-button">
        Back To Summary
        <IconContext.Provider value={{ className: "c-button__icon" }}>
          <TiArrowLeft />
        </IconContext.Provider>
      </button>
    </AltButtonWrapper>
  );
};

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
    font-size: 0.8rem;

    /* Button DS */
    box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.65);
    border-radius: calc(1.875rem + 4px);
  }

  a {
    color: var(--primary-clr-200) !important;
    text-decoration: none;
  }

  @media (min-width: 992px) {
   button {
    font-size: 1rem;
  }
  
  }
  
  @media (min-width: 1280px) {
  button {
    font-size: 1rem;
  }
})
`;

const AltButtonWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;

  .c-button {
    /* display */
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    border: none;
    text-decoration: underline;
    font-family: "Ubuntu", sans-serif;
    font-style: normal;
    font-weight: bold;

    /* styling */
    background-color: transparent;
  }

  .c-button__icon {
    width: 2rem;
    height: 2rem;
  }
`;

export default DefaultButton;
