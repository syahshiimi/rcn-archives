import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import slugify from "slugify";
import parse from "html-react-parser";

{
  /* Events List Page */
}
export const EventsCard = ({ events = [] }) => {
  return (
    <div className="l-pastevents__container">
      {events.map((events) => {
        const {
          id,
          eventTitle,
          eventLocation,
          eventBlurb,
          eventStart,
          eventEnd,
        } = events;
        // Clean string to remove spaces and quotation marks
        const cleanString = eventTitle.replace(/['"]+/g, " ").replace(":", " ");
        const slug = slugify(cleanString, { lower: true });
        return (
          <EventsCardWrapper key={id} className="c-pastevents__card">
            <Link
              to={`/${slug}`}
              className="c-pastevents__button"
              alt={eventTitle}
              key={id}
            >
              <h3 className="c-pastevents__title">{eventTitle}</h3>
              <p className="c-pastevents__date">
                {eventStart} to {eventEnd}
              </p>
              <p className="c-pastevents__content">{eventBlurb}</p>
              <h4 className="c-pastevents__location">{eventLocation}</h4>
            </Link>
          </EventsCardWrapper>
        );
      })}
    </div>
  );
};

{
  /* Workshop Events Details Cards */
}

export const EventScheduleCard = ({ items = [] }) => {
  // create filtered array to object
  const filteredItems = Object.fromEntries(items);

  // create empty array to store new schedule
  const scheduleArr = [];

  // map over items array
  // in each iteration, find matching string value
  // if value matches, push into scheduleArr
  items.map((item) => {
    if (item[0] === "eventScheduleOne") {
      return scheduleArr.push(
        filteredItems.eventScheduleOne.childMarkdownRemark.scheduleOne
      );
    } else if (item[0] === "eventScheduleTwo") {
      return scheduleArr.push(
        filteredItems.eventScheduleTwo.childMarkdownRemark.scheduleTwo
      );
    } else if (item[0] === "eventScheduleThree") {
      return scheduleArr.push(
        filteredItems.eventScheduleThree.childMarkdownRemark.scheduleThree
      );
    } else if (item[0] === "eventScheduleFour") {
      return scheduleArr.push(
        filteredItems.eventScheduleFour.childMarkdownRemark.scheduleFour
      );
    } else if (item[0] === "eventScheduleFive") {
      return scheduleArr.push(
        filteredItems.eventScheduleFive.childMarkdownRemark.scheduleFive
      );
    } else if (item[0] === "eventScheduleSix") {
      return scheduleArr.push(
        filteredItems.eventScheduleSix.childMarkdownRemark.scheduleSix
      );
    } else if (item[0] === "eventScheduleSeven") {
      return scheduleArr.push(
        filteredItems.eventScheduleSeven.childMarkdownRemark.scheduleSeven
      );
    } else if (item[0] === "eventScheduleEight") {
      return scheduleArr.push(
        filteredItems.eventScheduleEight.childMarkdownRemark.scheduleEight
      );
    } else if (item[0] === "eventScheduleNine") {
      return scheduleArr.push(
        filteredItems.eventScheduleNine.childMarkdownRemark.scheduleNine
      );
    } else if (item[0] === "eventScheduleTen") {
      return scheduleArr.push(
        filteredItems.eventScheduleTen.childMarkdownRemark.scheduleTen
      );
    } else if (item[0] === "eventScheduleEleven") {
      return scheduleArr.push(
        filteredItems.eventScheduleEleven.childMarkdownRemark.scheduleEleven
      );
    } else if (item[0] === "eventScheduleTwelve") {
      return scheduleArr.push(
        filteredItems.eventScheduleTwelve.childMarkdownRemark.scheduleTwelve
      );
    } else {
      return null;
    }
  });

  return (
    <div>
      {scheduleArr.map((event) => (
        <EventScheduleWrapper key={event + 1}>
          <div className="c-eventschedule__card">{parse(`${event}`)}</div>
        </EventScheduleWrapper>
      ))}
    </div>
  );
};

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

const EventsCardWrapper = styled.div`
  display: flex;
  padding: 1vh 8vw;
  justify-content: center;
  text-align: center;
  box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.65);
  border-radius: 2.75rem;
  background-color: var(--primary-clr-100);
  margin: 0;
  margin: 2vh 2vw;

  a {
    text-decoration: none !important;
  }

  a > * {
    margin: 4vh 0vw;
  }

  .c-pastevents__content {
    display: none;
  }

  .c-pastevents__title {
    font-size: 0.95rem;
    font-family: Lora;
    font-style: normal;
    text-align: start;
    font-weight: bold;
    text-decoration-line: underline;
  }

  .c-pastevents__date {
    font-size: 0.75rem;
    text-align: right;
  }
  .c-pastevents__location {
    font-size: 0.85rem;
    text-align: center;
  }

  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  ///// Tablet Layout ///////////
  ///////////////////////////////
  ///////////////////////////////

  @media (min-width: 992px) {
    .c-pastevents__content {
      display: block;
    }
    a > * {
      margin: 2vh 0vw;
    }
    .c-pastevents__title {
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
    padding: 3vh 4vw;
    .c-pastevents__button {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1 1 auto;
    }
    .c-pastevents__title {
      font-size: 1.2rem;
      text-align: left;
      margin: 2vh 0vw;
    }
    .c-pastevents__date {
      font-size: 0.9rem;
      margin: 2vh 0vw;
    }
    .c-pastevents__content {
      font-size: 0.95rem;
      margin: 2vh 0vw;
    }
    .c-pastevents__location {
      font-size: 0.85rem;
      margin: 3vh 0vw;
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
`;

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

const EventScheduleWrapper = styled.div`
  .c-eventschedule__card {
    margin: 4vh 2vw;
    background-color: var(--primary-clr-100);
    padding: 4vh 8vw;
    border-radius: calc(2rem + 6px);
    display: flex;
    box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.65);
    flex-direction: column;

    @media (max-width: 992px) {

    h3 {
    margin: 1.5vh 0vw;
    font-family: 'Lora', serif;
    }

    h5 {
    margin: 1.5vh 0vw;
        font-size: 0.75rem;
        font-weight: 400;

    }

    p {
      margin: 1vh 0vw;
      }
    }

  }


  }

  //////////////////////
  // tablet styling //// 
  //////////////////////
  @media (min-width: 992px) {
    .c-eventschedule__card {
      margin: 3vh 2vw;
      padding: 2vh 4vw;

        * {
        margin: 1vh 0vw;
    }
        h3 {
        margin: 2vh 0vw;
    font-family: 'Lora', serif;
        text-decoration: underline;
    }
        h5 {
        font-size: inherit;
        text-align: right;
        font-weight: inherit;
      }

      p {
        margin: 1vh 0vw;
        text-align: left;
          }
  }

  //////////////////////
  // desktop styling ///
  //////////////////////
    @media (min-width: 1280px) {

      .c-eventschedule__card {
        padding: 4vh 4vw;

        * {
          margin: 4vh 0vw;
        }
        
        h3 {
          font-size: 1.25rem;
        }

      }



    }
`;
