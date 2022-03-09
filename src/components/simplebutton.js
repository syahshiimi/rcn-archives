import { IconContext } from "@react-icons/all-files/lib";
import React from "react";
import styled from "styled-components";
import { TiArrowRight } from "@react-icons/all-files/ti/TiArrowRight";

import { Link } from "gatsby";

export const SimpleButton = ({ title, url }) => {
  return (
    <SimpleButtonWrapper>
      <button className="c-simplebutton" type="submit">
        <Link to={url}>{title}</Link>
        <IconContext.Provider value={{ className: "c-simplebutton__icon" }}>
          <TiArrowRight />
        </IconContext.Provider>
      </button>
    </SimpleButtonWrapper>
  );
};

const SimpleButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  .c-simplebutton {
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: center;
    font-weight: bold;
  }
  .c-simplebutton__icon {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
