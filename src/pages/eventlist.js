import React from "react";
import styled from "styled-components";
import { EventsCard } from "../components/eventscard";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import { Head } from "../components/head";
import Masonry from "react-masonry-css";

const query = graphql`
  {
    allContentfulEventsWorkshopsPage(
      sort: { fields: eventStart, order: DESC }
    ) {
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
  const events = data.allContentfulEventsWorkshopsPage.nodes;
  return (
    <Layout>
      <Head title="Workshops" />
      <EventWrapper>
        <section className="l-pastevents">
          <h1 className="c-pastevents__heading">Events & Workshops</h1>
          <div className="l-pastevents__list">
            <Masonry
              className="l-pastevents__container"
              columnClassName="l-pastevents__containerColumn"
              breakpointCols={{ default: 2, 500: 1, 992: 2, 1280: 2 }}
            >
              {events.map((item, index) => {
                const {
                  id,
                  eventTitle,
                  eventLocation,
                  eventBlurb,
                  eventStart,
                  eventEnd,
                } = item;
                return (
                  <EventsCard
                    eventTitle={eventTitle}
                    key={id}
                    eventLocation={eventLocation}
                    eventBlurb={eventBlurb}
                    eventStart={eventStart}
                    eventEnd={eventEnd}
                  />
                );
              })}
            </Masonry>
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
    border-radius: var(--border-rad-mobile);
  }
  .l-pastevents__container {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    width: auto;
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
      padding: 3vh var(--padding-desktop);
    }

    .l-pastevents > * {
      margin: 4vh 6vw;
    }
    .l-pastevents__list {
      padding: 0vh 2vw;
      border-radius: var(--border-rad-desktop);
    }

    .l-pastevents__container > * {
      margin: 2.5vh 0vw;
    }
  }
  /////////////////////////////
  //////// 4k Desktop /////////
  /////////////////////////////

  @media (min-width: 2500px) {
    .l-pastevents {
      padding: 5vh 18vw;
    }

    .l-pastevents__list {
      padding: 1vh 1vw;
    }
    .c-pastevents__heading {
      font-size: 4.5rem;
    }

    .l-pastevents__containerColumn {
      margin: 0;
    }
  }
`;

export default Events;
