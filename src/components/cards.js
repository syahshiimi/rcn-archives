import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// Icons
import { FaSearchPlus } from "@react-icons/all-files/fa/FaSearchPlus"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"

export const BACard = props => {
  const type = props.type
  const Icon = (type == "search") ? <FaSearchPlus /> : <FaMapMarkerAlt />

  return (
    <ButtonWrapper>
      <button type="button" className="mobile__BAcard">
        <>
          {Icon}
        </>
        <h3>
          Browse By <span className="BA__type">{type}</span>
        </h3>
        <p>Doloremque laudantium id ratione in soluta repellat.</p>
      </button>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  .BA__type {
    text-transform: capitalize;
  }
`
