import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { featuredDocs, eventList } from "../data"

// Icons
import { FaSearchPlus } from "@react-icons/all-files/fa/FaSearchPlus"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"
import { BsArrowRight } from "@react-icons/all-files/Bs/BsArrowRight"

// Browse Archives Card (Mobile Only)
export const BACard = props => {
  const { type, link } = props
  const Icon =
    type == "Search" ? <FaSearchPlus size={90} /> : <FaMapMarkerAlt size={90} />

  return (
    <CardWrapper>
      <button type="button" className="c-browse__card">
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

// Featured Documents Card
export const FeatureCard = () => {
  return featuredDocs.map(item => {
    const { docID, interviewer, interviewee, title, country, text } = item
    return (
      <CardWrapper key={docID} className="c-featured__card">
        <button type="button" className="c-featured__button">
          <div className="c-featured__content">
            <h3>{title}</h3>
            <ImageWrapper>
              <StaticImage
                src="../assets/img/china_interviews11.jpeg"
                layout="constrained"
                alt="featured documents image"
                className="c-featured__image"
              />
            </ImageWrapper>

            <div className="c-featured__subheading">
              <h4>By {interviewer}</h4>
            </div>
            <p>{text}</p>
          </div>
        </button>
      </CardWrapper>
    )
  })
}

// Events Card (Homepage)
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
      <CardWrapper key={eventID} className="c-event__card">
        <button type="button" className="c-event__button">
          <section className="c-event__content">
            <h3 className="c-event__details">Event Details</h3>
            <p className="c-event__date">{eventDate}</p>
            <h4 className="c-event__location">{eventLocation}</h4>
          </section>
          <Link to="/workshops" className="c-event__link">
            Find out more
            <BsArrowRight size={20} />
          </Link>
        </button>
      </CardWrapper>
    )
  })
}

///////////////////////////////
//////////STYLING//////////////
///////////////////////////////

// Image Wrapper Styling
const ImageWrapper = styled.div`
  // Featured Documents Image
  .c-featured__image {
    border: var(--imagecard-border-clr);
    border-radius: var(--imagecard-border-radius);
    margin: 2vh 0vw;
    display: block;
    flex: 1;
    height: 15vh;

    @media (min-width: 992px) {
      height: 10vh;
    }
  }
`

const CardWrapper = styled.div`
  // Global Card Contents //
  //
  display: flex;
  justify-content: center;

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

  .c-browse__card {
    width: 70vw;
  }

  .c-browse__card > h3 {
    margin-bottom: 0;
  }

  /* Mobile Feature Document Card */


  .c-featured__button {
    display: block;
    width: 70%;
    align-items: stretch;

    /* Tablet */
    @media (min-width: 992px) {
      width: 25vw;
    }
  }

  .c-featured__content {
    display: block;
    height: 100%;
  }

  .c-featured__content > h3 {
    font-family: "lora", serif;
    text-decoration: underline;
  }

  .c-featured__content > p {
    text-align: left;
    font-size: 0.75rem;
  }

  .c-featured__subheading {
    text-align: right;
    font-size: 0.8rem;
  }

  /* Events Card */

  .c-event__button {
    display: block;
    padding: 3vh;
  }

  .c-event__content > * {
    margin: 1vh 0vw;
  }

  .c-event__content {
    flex-direction: column;
    flex: 1;
    text-align: center;
  }
  .c-event__details {
    text-decoration: underline;
  }
  .c-event__link {
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
