import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { featuredDocs, eventList } from "../data"

// Icons
import { FaSearchPlus } from "@react-icons/all-files/fa/FaSearchPlus"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"
import { BsArrowRight } from "@react-icons/all-files/Bs/BsArrowRight"

export const BACard = props => {
  const { type, link } = props
  const Icon =
    type == "search" ? <FaSearchPlus size={90} /> : <FaMapMarkerAlt size={90} />

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

export const FeatureCard = () => {
  return featuredDocs.map(item => {
    const { docID, interviewer, interviewee, title, country, text } = item
    return (
      <ButtonWrapper key={docID}>
        <button type="button" className="mobile__featurecard">
          <h2>{title}</h2>
          <ImageWrapper>
            <StaticImage
              src="../assets/img/china_interviews_5.jpeg"
              alt="featured images"
              className="feature__image"
              layout="constrained"
            />
          </ImageWrapper>
          <div className="subheading">
            <h4>By {interviewer}</h4>
          </div>
          <p>{text}</p>
        </button>
      </ButtonWrapper>
    )
  })
}

export const EventsCard = () => {
  return eventList.map(items => {
    const {
      eventID,
      eventTitle,
      eventType,
      eventDate,
      eventLocation,
      eventBlurb,
    } = items
    return (
      <ButtonWrapper key={eventID}>
        <button type="button" className="event__button">
          <h3>Event Details</h3>
          <p>{eventDate}</p>
          <h4>{eventLocation}</h4>
          <Link to="/about" className="event__link">
            Find out more
            <BsArrowRight size={40} />
          </Link>
        </button>
      </ButtonWrapper>
    )
  })
}

const ImageWrapper = styled.div`
  .feature__image {
    border: var(--imagecard-border-clr);
    border-radius: var(--imagecard-border-radius);
    margin: 2vh 0vw;
  }
`

const ButtonWrapper = styled.div`
  margin: 3vh 0vw;
  display: flex;
  flex: 1 1 0;
  justify-content: center;

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
    background: #f5cb5c;
    border: 2px solid var(--primary-clr-200);
    box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.65);
    border-radius: calc(3.75rem + 6px);
  }

  svg {
    margin-bottom: 1vh;
  }

  h2 {
    font-family: "lora", serif;
    text-decoration: underline;
  }

  .mobile__featurecard {
    padding: 10%;
  }

  .mobile__featurecard > p {
    text-align: left;
  }

  .subheading {
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: end;
    margin: 2vh 0vw;
  }

  .event__button {
    display: flex;
    width: 65vw;
    padding: 2%;
  }

  .event__link {
    padding: 3vh 0vw;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    color: var(--primary-clr-200) !important;
  }
`
