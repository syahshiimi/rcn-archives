import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

import { EventScheduleCard } from "../components/eventscard"
import Layout from "../components/Layout"
import DefaultButton from "../components/button"

//const EventsTest = ({ data }) => {
//  const events = data.allContentfulEventsWorkshops.nodes
//  console.log(events)
//  return (
//    <div>
//      {events.map(item => {
//        const {
//          eventTitle,
//          eventSubheading,
//          eventContent: { eventContent },
//        } = item
//        return (
//          <div>
//            {eventSubheading}
//            <p>{eventTitle}</p>
//            <h3>{eventContent}</h3>
//          </div>
//        )
//      })}
//    </div>
//  )
//}

//export const query = graphql`
//  query getSingleEvent($eventTitle: String) {
//    allContentfulEventsWorkshops(filter: { eventTitle: { eq: $eventTitle } }) {
//      nodes {
//        eventTitle
//        eventScheduleOne {
//          childMarkdownRemark {
//            scheduleOne: html
//          }
//        }
//        eventScheduleFour {
//          childMarkdownRemark {
//            scheduleFour: html
//          }
//        }
//        eventScheduleThree {
//          childMarkdownRemark {
//            scheduleThree: html
//          }
//        }
//        eventScheduleTwo {
//          childMarkdownRemark {
//            scheduleTwo: html
//          }
//        }
//        eventTags
//        eventSubheading
//        eventStart(formatString: "DD, MMMM, YYYY")
//        eventEnd(formatString: "DD, MMMM, YYYY")
//        eventBlurb
//        eventContent {
//          eventContent
//        }
//        contentful_id
//        eventImage {
//          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
//        }
//      }
//    }
//  }
//`

const EventsTemplate = ({ data }) => {
  const events = data.contentfulEventsWorkshops
  const {
    eventTitle,
    eventSubheading,
    eventContent: { eventContent },
    eventStart,
    eventEnd,
    eventLocation,
    eventImage,
    eventScheduleOne: {
      childMarkdownRemark: { scheduleOne },
    },
    eventScheduleTwo: {
      childMarkdownRemark: { scheduleTwo },
    },
    eventScheduleThree: {
      childMarkdownRemark: { scheduleThree },
    },
    eventScheduleFour: {
      childMarkdownRemark: { scheduleFour },
    },
  } = events
  const pathToImage = getImage(eventImage)

  {
    /* create schedules array */
  }

  const eventsArr = [
    { scheduleOne },
    { scheduleTwo },
    { scheduleThree },
    { scheduleFour },
  ]
  console.log(eventsArr)
  return (
    <Layout>
      <EventWrapper>
        <section className="l-events">
          <GatsbyImage
            image={pathToImage}
            alt={eventTitle}
            className="c-event__image std-style"
          />
          <h1 className="c-events__title">{eventTitle}</h1>
          <h3 className="c-events__title">{eventSubheading}</h3>
          <h3 className="c-events__date">
            {eventStart} - {eventEnd}
          </h3>
          <h3 className="c-events__location">{eventLocation}</h3>
          <p className="c-events__content">{eventContent}</p>
          <DefaultButton title="Sign Up" url="/" />
          <h1 className="c-events__details">Event Details</h1>
          <div className="c-eventschedule__container">
             <EventScheduleCard items={eventsArr} />
          </div>
          <DefaultButton title="See Past Events" url="/eventlist" />
        </section>
      </EventWrapper>
    </Layout>
  )
}

export const query = graphql`
  query getSingleEvent($eventTitle: String) {
    contentfulEventsWorkshops(eventTitle: { eq: $eventTitle }) {
      eventTitle
      eventSubheading
      eventTags
      eventStart(formatString: "DDM MMMM YYYY")
      eventEnd(formatString: "DDM MMMM YYYY")
      eventLocation
      eventImage {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
      eventContent {
        eventContent
      }
      eventBlurb
      contentful_id
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
      eventScheduleOne {
        childMarkdownRemark {
          scheduleOne: html
        }
      }
      eventScheduleFour {
        childMarkdownRemark {
          scheduleFour: html
        }
      }
    }
  }
`
const EventWrapper = styled.main`
  section {
    padding: 4vh var(--padding-mobile) 6vh var(--padding-mobile);
    display: flex;
    flex-direction: column;
  }

  .l-events > * {
    margin: 2vh 0vw;
    text-align: center;
  }

  //  page wide image styling
  .std-style {
    border-radius: calc(1.5rem + 4px);
    border: 2px solid var(--primary-clr-200);
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  }

  .c-eventschedule__container {
    background-color: var(--primary-clr-50);
    padding: 2vh 4vw;

    /* styling */
    border-radius: calc(5vw + 4px);
    border: 2px solid var(--primary-clr-200);
  }
`

export default EventsTemplate
//export default EventsTest
