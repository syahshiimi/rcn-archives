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
      <CardWrapper>
        <button key={docID} type="button" className="c-featured__card">
          <h3>{title}</h3>
          <ImageWrapper>
            <StaticImage
              src="../assets/img/china_interviews_2.jpeg"
              layout="constrained"
              alt="featured documents image"
              className="c-featured__image"
              aspectRatio={3 / 2}
            />
          </ImageWrapper>
          <h4>By {interviewer}</h4>
          <p>{text}</p>
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
    display: flex;
    flex-grow: 1;
    width: 100%;
  }
`

const CardWrapper = styled.div`
  
  display: flex;

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* styling */
    background: #f5cb5c;
    border: 2px solid var(--primary-clr-200);
    box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.65);
    border-radius: calc(3.75rem + 6px);
  }

  button > * {
    align-items: center;
  }

  svg {
    margin: 1vh 0vw;
  }

  /* Browse Archives Mobile Card */

  .c-browse__card {
    width: 70vw;

    h3 {
      margin-bottom: 0;
    }

    p {
      font-size: 0.8rem;
    }
  }

  /*  Feature Document Card */

  .c-featured__card {
    display: block;
    padding: 4vh 8vw 6vh 8vw;
    width: 100%;

    h3 {
      text-decoration: underline;
      font-family: "Lora", Serif;
      flex-grow: 1;
    }
    h4 {
      font-size: 0.9rem;
      flex-grow: 1;
      margin-left: auto;
      text-align: right;
    }
    p {
      margin-right auto;
      text-align: left;
      font-size: 0.85rem;
      flex-grow: 1;
    }
  }

  /* Events Card */

  .c-event__button {
    display: block;
    padding: 4vh;
  }

  .c-event__content > * {
    margin: 2vh 0vw;
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

  /* tablet */

  @media (min-width: 992px) {
    .c-featured__card {
      max-width: 45vw;
      flex-grow: 1;

      justify-content: stretch;
      padding: 2vh 4vw 4vh 4vw;

      h3 {
        font-size: 1.5rem;
      }

      h4 {
        font-size: 1.125rem;

      }
      p {
        font-size: 1rem;
      }
    }

    /* event card */
    .c-event__button {
      padding: 2vh 4vw;
    }

    .c-event__content > * {
      margin: 1vh 0vw;
    }
  }

  /* desktop */

  @media (min-width: 1280px) {
    /* events card */
    .c-event__button {
      padding: 4vh 4vw;
    }

    .c-event__content > * {
      margin: 2vh 0vw;
    }
  }
`
