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
    type == "Search" ? <FaSearchPlus size={90} /> : <FaMapMarkerAlt size={90} />

  return (
    <CardWrapper>
      <button type="button" className="mobile__BAcard">
        <>{Icon}</>
        <h3>Browse By {type}</h3>
        <p>
          Browse through the history of the Cold War within Asia through oral
          archives.
        </p>
      </button>
    </CardWrapper>
  )
}

export const FeatureCard = () => {
  return featuredDocs.map(item => {
    const { docID, interviewer, interviewee, title, country, text } = item
    return (
      <CardWrapper key={docID}>
        <button type="button" className="mobile__featurecard">
          <div className="card__content">
            <h3>{title}</h3>
            <div className="subheading">
              <h4>By {interviewer}</h4>
            </div>
            <p>{text}</p>
          </div>
        </button>
      </CardWrapper>
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
      <CardWrapper key={eventID} className="event__cards">
        <button type="button" className="events__button">
          <section className="event__content">
            <h3 className="event__details">Event Details</h3>
            <p className="event__date">{eventDate}</p>
            <h4 className="event__location">{eventLocation}</h4>
          </section>
          <Link to="/workshops" className="event__link">
            Find out more
            <BsArrowRight size={20} />
          </Link>
        </button>
      </CardWrapper>
    )
  })
}

const ImageWrapper = styled.div`
  .feature__image {
    border: var(--imagecard-border-clr);
    border-radius: var(--imagecard-border-radius);
    margin: 2vh 0vw;
    display: flex;
    flex: 1;
    height: 20vh;
  }
`

const CardWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    p {
      font-size: 0.85rem;
    }

    h3 {
      font-size: 1rem;
    }

    h4 {
      font-size: 0.8rem;
    }
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

  button > * {
    display: flex;
    align-items: center;
  }

  svg {
    margin: 1vh 0vw;
  }

  /* Browse Archives Mobile Card */

  .mobile__BAcard {
    width: 70vw;
  }

  .mobile__BAcard > h3 {
    margin-bottom: 0;
  }

  /* Mobile Feature Document Card */

  .mobile__featurecard {
    display: flex;
    flex: 1;
    width: 75vw; // fix width
    align-items: stretch;
    padding: 10%;

    p {
    }

    @media (min-width: 992px) {
      width: 40vw;
    }
  }

  .card__content {
    display: block;
    height: 100%;
  }

  .card__content > h3 {
    font-family: "lora", serif;
    text-decoration: underline;
  }

  .card__content > p {
    text-align: left;
    font-size: 0.75rem;
  }

  .subheading {
    text-align: right;
    font-size: 0.8rem;
  }

  /* Events Card */

  .events__button {
    display: block;
    padding: 3vh;
  }

  .event__content > * {
    margin: 1vh 0vw;
  }

  .event__content {
    flex-direction: column;
    flex: 1;
    text-align: center;
  }
  .event__details {
    text-decoration: underline;
  }
  .event__link {
    font-size: 1rem;
    display: flex;
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    margin: 1vh 0vw;
    color: var(--primary-clr-200) !important;

    svg {
      margin: 0;
    }
  }
`
