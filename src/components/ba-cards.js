import React from "react";
import { FaSearchPlus } from "@react-icons/all-files/fa/FaSearchPlus";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import styled from "styled-components";
import { IconContext } from "@react-icons/all-files/lib";
import { Link } from "gatsby";

export const BACard = ({ type, url }) => {
  // Create subcomponent based on type (conditional render)
  let subComp;
  if (type == "Search") {
    subComp = (
      <button type="button" className="c-browse__card">
        <IconContext.Provider value={{ className: "c-browse__icon" }}>
          <FaSearchPlus />
        </IconContext.Provider>
        <h3>Browse By {type}</h3>
      </button>
    );
  } else {
    subComp = (
      <button type="button" className="c-browse__card">
        <IconContext.Provider value={{ className: "c-browse__icon" }}>
          <FaMapMarkerAlt />
        </IconContext.Provider>
        <h3>Browse By {type}</h3>
      </button>
    );
  }

  return <CardWrapper>{subComp}</CardWrapper>;
};

const CardWrapper = styled.article`
  display: flex;
  margin: 4vh 4vw;
  button {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4vh 3vw;

    /* styling */
    background: #f5cb5c;
    border: 2px solid var(--primary-clr-200);
    box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.85);
    border-radius: calc(3.75rem + 6px);

    // Set gap between the icon and text
    row-gap: 4vh;
  }

  .c-browse__icon {
    height: 4rem;
    width: 4rem;
  }
`;
