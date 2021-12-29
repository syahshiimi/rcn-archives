import React from "react"
import styled from "styled-components"
import { EventsCard } from "../components/eventscard"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulEventsWorkshops(sort: { fields: eventStart, order: DESC }) {
      nodes {
        id
        eventTitle
        eventBlurb
        eventLocation
        eventEnd(formatString: "MMMM Do, YYYY")
        eventStart(formatString: "MMMM Do, YYYY")
        eventImage {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            aspectRatio: 1.5
          )
        }
      }
    }
  }
`
const Events = () => {
  const data = useStaticQuery(query)
  const events = data.allContentfulEventsWorkshops.nodes
  console.log(data);
  console.log(events);
  return (
    <Layout>
      <EventWrapper>
        <section className="l-pastevents">
          <h1 className="c-pastevents__heading">Events & Workshops</h1>
          <div className="l-pastevents__list">
            <EventsCard events={events} />
          </div>
        </section>
      </EventWrapper>
    </Layout>
  )
}

const EventWrapper = styled.main`
  section {
    padding: 4vh var(--padding-mobile) 6vh var(--padding-mobile);
  }
  .l-pastevents {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .l-pastevents > * {
    margin: 2vh 0vw;
  }

  .c-pastevents__heading {
    text-align: center;
  }

  .l-pastevents__list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: var(--primary-clr-50);
    padding: 2vh 8vw;
    border-radius: calc(5vw + 4px);
  }

  .l-pastevents__container > * {
    margin: 2vh 0vw;
  }

  /////////////////////////////
  //////// Tablet ////////////
  /////////////////////////////

  @media (min-width: 992px) {
    section {
      padding: 6vh var(--padding-desktop);
    }
  }

  /////////////////////////////
  /////////// Desktop /////////
  /////////////////////////////
  @media (min-width: 1280px) {
    section {
      padding: 10vh var(--padding-desktop);
    }

    .l-pastevents > * {
      margin: 4vh 0vw;
    }
  }
`

export default Events