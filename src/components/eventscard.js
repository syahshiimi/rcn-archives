import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import slugify from "slugify"
import parse from "html-react-parser"

export const EventsCard = ({ events = [] }) => {
  return (
    <div className="l-pastevents__container">
      {events.map(events => {
        const {
          id,
          eventTitle,
          eventLocation,
          eventBlurb,
          eventStart,
          eventEnd,
          eventImage,
        } = events
        const slug = slugify(eventTitle, { lower: true })
        return (
          <PastEventsWrapper key={id} className="c-pastevents__card">
            <Link
              to={`/${slug}`}
              className="c-pastevents__button"
              alt={eventTitle}
              key={id}
            >
              <h3 className="c-pastevents__details">{eventTitle}</h3>
              <p className="c-pastevents__date">{eventStart}</p>
              <p className="c-pastevents__content">{eventBlurb}</p>
              <h4 className="c-pastevents__location">{eventLocation}</h4>
            </Link>
          </PastEventsWrapper>
        )
      })}
    </div>
  )
}

export const EventScheduleCard = ({ items = [] }) => {
  //print out filteredAr passed as props
  console.log(items)

  // create empty array to store new schedule
  const scheduleArr = []

  // create new obj from filteredArr
  const eventObj = Object.fromEntries(items)
  console.log(eventObj)
  console.log(eventObj.eventScheduleOne.childMarkdownRemark.scheduleOne)

  // create a loop to check if key == search valueo
  {
    items.map(item => {
      // convert each item to object
      console.log(item[0])
      if (item[0] === "eventScheduleOne") {
        scheduleArr.push(
          eventObj.eventScheduleOne.childMarkdownRemark.scheduleOne
        )
        console.log(scheduleArr)
      } else if (item[0] === "eventScheduleTwo") {
        scheduleArr.push(
          eventObj.eventScheduleTwo.childMarkdownRemark.scheduleTwo
        )
        console.log(scheduleArr)
      } else {
        console.log("fail")
      }
    })
  }

  return <div>hello</div>
}

const PastEventsWrapper = styled.div`
  display: flex;
  padding: 1vh 8vw;
  justify-content: center;
  text-align: center;
  box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.65);
  border-radius: 2.75rem;
  background-color: var(--primary-clr-100);
  margin: 2vh 0vw;

  a {
    text-decoration: none !important;
  }

  a > * {
    margin: 4vh 0vw;
  }

  .c-pastevents__content {
    display: none;
  }

  .c-pastevents__details {
    font-size: 1rem;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    text-decoration-line: underline;
  }

  .c-pastevents__date {
    font-size: 0.85rem;
    text-align: right;
  }
  .c-pastevents__location {
    font-size: 0.85rem;
    text-align: left;
  }

  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  ///// Tablet Layout ///////////

  @media (min-width: 992px) {
    .c-pastevents__content {
      display: block;
    }
    a > * {
      margin: 2vh 0vw;
    }
    .c-pastevents__details {
      font-size: 1.25rem;
    }
    .c-pastevents__date {
      font-size: 1rem;
    }
    .c-pastevents__location {
      font-size: 1rem;
    }
  }

  ///////////////////////////
  ///////////////////////////
  ////////// Desktop ////////
  ///////////////////////////
  @media (min-width: 1280px) {
    padding: 2vh 6vw;
    a > * {
      margin: 6vh 0vw;
    }
    .c-pastevents__details {
      font-size: 1.5rem;
      text-align: left;
    }
    .c-pastevents__date {
      font-size: 1.125rem;
    }
    .c-pastevents__location {
      font-size: 1.125rem;
    }
  }

  //////////////////////////
  //////////////////////////
  /////// High Res /////////
  //////////////////////////
  //////////////////////////

  @media (min-width: 2560px) {
    .c-workshops__details {
      font-size: 2.5rem;
      text-align: left;
    }
    .c-workshops__date {
      font-size: 1.85rem;
    }
    .c-workshops__location {
      font-size: 1.85rem;
    }
  }
`

const EventScheduleWrapper = styled.div`
  .c-eventschedule__card {
    margin: 2vh 2vw;
    background-color: var(--primary-clr-100);
    padding: 2vh 2vw;
    border-radius: calc(2rem + 6px);

  }

  .c-eventschedule__card > * {
    margin: 2vh 0vw;
  
`
