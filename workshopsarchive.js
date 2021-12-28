import React from "react"
import styled from "styled-components"
import { PastEventsCard } from "../components/eventscard"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulEventsWorkshops {
      nodes {
        id
        eventTitle
        eventBlurb
        eventLocation
        eventEnd (formatString:"MMMM Do, YYYY")
        eventStart(formatString:"MMMM Do, YYYY")
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
const Workshops = () => {
  const data = useStaticQuery(query)
  const events = data.allContentfulEventsWorkshops.nodes

  return (
    <Layout>
      <WorkshopWrapper>
        <section className="l-pastworkshops">
          <h1 className="c-pastworkshops__heading">Events & Workshops</h1>
          <div className="l-pastworkshops__list">
            <PastEventsCard events={events} />
          </div>
        </section>
      </WorkshopWrapper>
    </Layout>
  )
}

const WorkshopWrapper = styled.main`
  section {
    padding: 4vh var(--padding-mobile) 6vh var(--padding-mobile);
  }
  .l-pastworkshops {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .l-pastworkshops > * {
    margin: 2vh 0vw;
  }

  .c-pastworkshops__heading {
    text-align: center;
  }

  .l-pastworkshops__list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: var(--primary-clr-50);
    padding: 2vh 8vw;
    border-radius: calc(5vw + 4px);
  }

  .l-pastworkshops__container > * {
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

    .l-pastworkshops > * {
      margin: 4vh 0vw;
    }
  }
`

export default Workshops
