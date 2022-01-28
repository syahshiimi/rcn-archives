import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { TiArrowRight } from "@react-icons/all-files/ti/TiArrowRight";
import { IconContext } from "@react-icons/all-files/lib";

export const ReadFullButton = ({ slug }) => {
  console.log(slug);
  return (
    <ReadFullButtonWrapper>
      <Link
        to={`/browsearchives/archives/${slug}`}
        className="c-readfullbutton"
      >
        <p className="c-readfullbutton__text">Read Full Transcript</p>
        <IconContext.Provider value={{ className: "c-readfullbutton__icon" }}>
          <TiArrowRight />
        </IconContext.Provider>
      </Link>
    </ReadFullButtonWrapper>
  );
};

const ReadFullButtonWrapper = styled.article`
  display: none;
  @media (min-width: 992px) {
    grid-area: read;
    flex: 1 1 auto;
    flex-direction: row;
    /* styling */
    background-color: var(--secondary-clr-250);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease-in-out 0.2s;
    border-radius: 2rem;
    padding: 0.9vh 3vw;
    border: 1px solid var(--primary-clr-200);

    .c-readfullbutton {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    a {
      text-decoration: none;
    }

    .c-readfullbutton__text {
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500 !important;
      color: var(--primary-clr-150);
    }

    .c-readfullbutton__icon {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;
