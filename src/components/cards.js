import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// Icons
import { FaSearchPlus } from "@react-icons/all-files/fa/FaSearchPlus"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"

export const BACard = (props) => {
  const { type, link } = props
  const Icon = type == "search" ? <FaSearchPlus size={90}/> : <FaMapMarkerAlt size={90}/>

  return (
    <ButtonWrapper>
      <button type="button" className="mobile__BAcard">
        <>{Icon}</>
        <h3>
          Browse By <span className="BA__type">{type}</span>
        </h3>
        <p>Doloremque laudantium id ratione in soluta repellat.</p>
      </button>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  margin: 3vh 0vw;

  .BA__type {
    text-transform: capitalize;
  }

  button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8%;
  
  /* styling */
  background: #F5CB5C;
  border: 2px solid var(--primary-clr-200);
  border-radius: calc(3.75rem + 6px);

  svg {
  size: 70;
  }

  
  }
`
