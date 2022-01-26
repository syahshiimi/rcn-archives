import React from "react";
import { FaSearchPlus } from "@react-icons/all-files/fa/FaSearchPlus";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import styled from "styled-components";
import { IconContext } from "@react-icons/all-files/lib";

export const BACard = (props) => {
  const { type } = props;
  const Icon =
    type === "Search" ? (
      <FaSearchPlus size={90} />
    ) : (
      <FaMapMarkerAlt size={90} />
    );

  return (
    <CardWrapper>
      <button type="button" className="c-browse__card">
        <IconContext.Provider value={{ className: "c-browse__icon" }}>
          {Icon}
        </IconContext.Provider>
        <h3>Browse By {type}</h3>
      </button>
    </CardWrapper>
  );
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
`;
