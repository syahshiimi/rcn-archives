import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

import { EventScheduleCard } from "../components/eventscard"
import Layout from "../components/Layout"
import DefaultButton from "../components/button"

const EventsTemplate = ({ data }) => {
  const events = data.contentfulEventsWorkshops
  // print default queried data
  console.log(events)

  // convert default objects to array with key value pairs
  const eventArr = Object.entries(events)
  console.log(eventArr)

  // filter through key/value pairs to remove 'null' and produce new arr
  const filteredArr = eventArr.filter(([key, value]) => value != null)
  console.log(filteredArr)

  // convert filtered array to object
  const filteredEvents = Object.fromEntries(filteredArr)
  console.log(filteredEvents)

  // destructure object for quick access
  const {
    eventTitle,
    eventSubheading,
    eventBlurb,
    eventContent: { eventContent },
    eventImage,
    eventLocation,
    eventStart,
    eventEnd,
    eventTags,
  } = filteredEvents

  const pathToImage = getImage(eventImage)
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
            <EventScheduleCard items={filteredArr} />
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
      eventScheduleTwelve {
        childMarkdownRemark {
          scheduleTwelve: html
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
