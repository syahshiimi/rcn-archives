import React from "react";
import styled from "styled-components";
import { EventsCard } from "../components/eventscard";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import { Head } from "../components/head";

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
`;
const Events = () => {
  const data = useStaticQuery(query);
  const events = data.allContentfulEventsWorkshops.nodes;
  return (
    <Layout>
      <Head title="Workshops" />
      <EventWrapper>
        <section className="l-pastevents">
          <h1 className="c-pastevents__heading">Events & Workshops</h1>
          <div className="l-pastevents__list">
            <EventsCard events={events} />
          </div>
        </section>
      </EventWrapper>
    </Layout>
  );
};

const EventWrapper = styled.main`
  section {
    padding: 0vh var(--padding-mobile) 6vh var(--padding-mobile);
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
    padding: 1vh 2vw;
    border-radius: calc(10vw + 1px);
  }

  /////////////////////////////
  //////// Tablet ////////////
  /////////////////////////////

  @media (min-width: 992px) {
    section {
      padding: 4vh var(--padding-desktop) 6vh var(--padding-desktop);
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
      margin: 4vh 6vw;
    }
    .l-pastevents__list {
      padding: 2vh 4vw;
      margin: 4vh 8vw;
      border-radius: calc(6vw + 1px);
    }

    .l-pastevents__container > * {
      margin: 3vh 0vw;
    }
  }

  @media (min-width: 2560px) {
    .l-pastevents {
      padding: 10vh 20vw;
    }

    .l-pastevents__list {
      padding: 2vh 4vw;
      border-radius: calc(4vw + 1px);
    }
    .c-pastevents__heading {
      font-size: 4.5rem;
    }

    .l-pastevents__container > * {
      margin: 2vh 0vw;
    }
  }
`;

export default Events;
