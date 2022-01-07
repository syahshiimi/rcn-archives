import React from "react"
import styled from "styled-components"
import { HiArrowCircleDown } from "@react-icons/all-files/hi/HiArrowCircleDown"
import {TiArrowDown} from "@react-icons/all-files/ti/TiArrowDown"
import { IconContext } from "@react-icons/all-files/lib"

export const Accordion = ({ transcript = [], type }) => {
  return (
    <AccordionWrapper className="c-accordion__container">
      <div className="c-accordion__header closed">
        <h5 className="c-accordion__title">{type}</h5>
        <IconContext.Provider value={{ className: "c-accordion__arrow" }}>
          <TiArrowDown />
        </IconContext.Provider>
      </div>
    </AccordionWrapper>
  )
}
const AccordionWrapper = styled.div`
  margin: 1vh 0vw;

  .c-accordion__header {
    display: flex;
    flex-direction: row;
    padding: 1.5vh 6vw;
    align-items: center;
    justify-content: space-between;

    /* styling */
    background-color: var(--primary-clr-100);
    border: 1px solid var(--primary-clr-200);
    border-radius: calc(2rem + 1px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .c-accordion__arrow {
    height: 2rem;
    width: 2rem;
  }

  .c-accordion__title {
    font-size: 1rem;
    font-style: normal;
    font-weight: 500 !important;
  }
`
