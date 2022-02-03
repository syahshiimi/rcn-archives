import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import { EventScheduleCard } from "../components/eventscard";
import Layout from "../components/Layout";
import DefaultButton from "../components/button";

const EventsTemplate = ({ data }) => {
  const events = data.contentfulEventsWorkshops;

  // 1. convert default objects to array with key value pairs
  // 2. filter through key/value pairs to remove 'null' and produce new arr
  // 3. convert filtered array to object
  const eventArr = Object.entries(events);
  const filteredArr = eventArr.filter(([key, value]) => value != null);
  const filteredEvents = Object.fromEntries(filteredArr);

  // destructure object for quick access
  const {
    eventTitle,
    eventSubheading,
    eventContent: {
      childMarkdownRemark: { content },
    },
    eventImage,
    eventLocation,
    eventStart,
    eventEnd,
  } = filteredEvents;

  const pathToImage = getImage(eventImage);
  return (
    <Layout>
      <EventWrapper>
        <section className="l-events">
          <GatsbyImage
            image={pathToImage}
            alt={eventTitle}
            className="c-event__image std-style"
          />
          <h1 className="c-event__title">{eventTitle}</h1>
          <h3 className="c-event__subheading">{eventSubheading}</h3>
          <h3 className="c-event__date">
            {eventStart} - {eventEnd}
          </h3>
          <h3 className="c-event__location">{eventLocation}</h3>
          <div className="c-event__content">{parse(`${content}`)}</div>
          <h1 className="c-event__details">Event Details</h1>
          <div className="c-eventschedule__container">
            <EventScheduleCard items={filteredArr} />
          </div>
          <DefaultButton
            className="c-event__pastevents"
            title="See Past Events"
            url="/eventlist"
          />
        </section>
      </EventWrapper>
    </Layout>
  );
};

export const query = graphql`
  query getSingleEvent($eventTitle: String) {
    contentfulEventsWorkshops(eventTitle: { eq: $eventTitle }) {
      eventTitle
      eventSubheading
      eventTags
      eventStart(formatString: "DD MMMM YYYY")
      eventEnd(formatString: "DD MMMM YYYY")
      eventLocation
      eventImage {
        gatsbyImageData(
          aspectRatio: 1.5
          placeholder: TRACED_SVG
          layout: CONSTRAINED
        )
      }
      eventContent {
        childMarkdownRemark {
          content: html
        }
      }
      eventBlurb
      contentful_id
      eventScheduleOne {
        childMarkdownRemark {
          scheduleOne: html
        }
      }
      eventScheduleTwo {
        childMarkdownRemark {
          scheduleTwo: html
        }
      }
      eventScheduleThree {
        childMarkdownRemark {
          scheduleThree: html
        }
      }

      eventScheduleFour {
        childMarkdownRemark {
          scheduleFour: html
        }
      }
      eventScheduleFive {
        childMarkdownRemark {
          scheduleFive: html
        }
      }
      eventScheduleSix {
        childMarkdownRemark {
          scheduleSix: html
        }
      }
      eventScheduleSeven {
        childMarkdownRemark {
          scheduleSeven: html
        }
      }
      eventScheduleEight {
        childMarkdownRemark {
          scheduleEight: html
        }
      }
      eventScheduleNine {
        childMarkdownRemark {
          scheduleNine: html
        }
      }
      eventScheduleTen {
        childMarkdownRemark {
          scheduleTen: html
        }
      }
      eventScheduleEleven {
        childMarkdownRemark {
          scheduleEleven: html
        }
      }
    }
  }
`;
const EventWrapper = styled.main`
  section {
    padding: 0vh var(--padding-mobile) 6vh var(--padding-mobile);
    display: flex;
    flex-direction: column;
  }

  .l-events > * {
    margin: 1vh 0vw;
    text-align: center;
  }

  //  page wide image styling
  .std-style {
    border-radius: calc(1.5rem + 4px);
    border: 1px solid var(--primary-clr-200);
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  }

  .c-eventschedule__container {
    background-color: var(--primary-clr-50);
    padding: 0vh 4vw;

    /* styling */
    border-radius: calc(1.5rem + 4px);
    border: 2px solid var(--primary-clr-200);
  }

  .c-event__title {
    font-size: 1.8rem;
    margin: 4vh 0vw;
  }

  .c-event__details {
    padding: 2vh 0vw;
  }
  .c-event__content {
    p {
      margin: 1vh 0vw;
    }
  }

  .c-event__subheading,
  .c-event__date,
  .c-event__location {
    font-size: 1rem;
  }

  ////////////////////////////////
  //////// Tablet ////////////////
  ///////////////////////////////

  @media (min-width: 992px) {
    section {
      padding: 4vh var(--padding-desktop) 6vh var(--padding-desktop);
      display: grid;
      grid-column-gap: 2vw;
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-template-areas:
        "title title title"
        "subheading subheading subheading"
        "date image image"
        "location image image"
        "content image image"
        "signup signup signup "
        "details details details"
        "schedule schedule schedule "
        "pastevents pastevents pastevents";
    }

    .l-events > * {
      margin: 0; // disable inherited mobile padding
    }

    .c-event__image {
      grid-area: image;
      margin: 1vh 2vw;
    }

    .c-event__title {
      grid-area: title;
      font-size: 2.125rem;
      margin-bottom: 4vh;
    }

    .c-event__subheading {
      grid-area: subheading;
      font-size: 1.125rem;
      padding-bottom: 4vh;
    }

    .c-event__date {
      grid-area: date;
      align-self: center;
      margin: 1vh 0vw;
    }

    .c-event__location {
      grid-area: location;
      align-self: center;
      margin: 1vh 0vw;
    }

    .c-event__content {
      grid-area: content;
    }

    .c-event__signup {
      grid-area: signup;
      margin: 2vh 0vw;
    }

    .c-event__details {
      grid-area: details;
      padding: 4vh 0vw;
    }

    .c-eventschedule__container {
      grid-area: schedule;
    }

    .c-event__pastevents {
      grid-area: pastevents;
      margin: 1vh 0vw;
    }
  }

  /////////////////////////
  /////// Desktop /////////
  /////////////////////////

  @media (min-width: 1280px) {
    section {
      padding: 10vh var(--padding-desktop);
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-template-areas:
        "title  title"
        "subheading  subheading"
        " .  image"
        "date  image"
        "location  image"
        "content  image"
        " .  image"
        "details  details"
        "schedule  schedule "
        "pastevents  pastevents";
    }

    .c-event__title {
      margin: 0vh 5.5vw 5vh 5.5vw;
    }

    .c-event__subheading {
      font-size: 1.25rem;
      margin-bottom: 2vh;
    }

    .c-event__image {
      justify-self: end;
    }

    .c-event__date {
      font-size: 1.1rem;
      margin: 3vh 0vw;
    }
    .c-event__location {
      font-size: 1.1rem;
      margin: 3vh 0vw;
    }

    .c-event__details {
      margin: 4vh 0vw;
      font-size: 2rem;
    }

    .c-eventschedule__container {
      border-radius: calc(3rem + 4px);
      margin: 0vh 8vw;
      padding: 2vh 2vw;
    }
  }

  @media (min-width: 2560px) {
    .l-events {
      padding: 10vh 22.5vw;
    }

    .c-event__title {
      margin-bottom: 4vh;
    }

    .c-event__date {
      margin: 1vh 0vw;
    }

    .c-event__subheading {
      margin-bottom: 0;
      padding-bottom: 4vh;
    }

    .c-event__content {
      text-align: justify;
    }

    .c-eventschedule__container {
      border-radius: calc(3rem + 4px);
      padding: 0vh 1vw;
    }
  }
`;

export default EventsTemplate;
