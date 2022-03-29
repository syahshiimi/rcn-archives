import { Link } from "gatsby";
import parse from "html-react-parser";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

{
  /* Events List Page */
}
export const EventsCard = ({
  eventTitle,
  eventStart,
  eventBlurb,
  eventLocation,
  eventEnd,
}) => {
  const cleanString = eventTitle.replace(/['"]+/g, " ").replace(":", " ");
  const slug = slugify(cleanString, { lower: true });

  return (
    <EventsCardWrapper className="c-pastevents__card">
      <Link to={`/${slug}`} className="c-pastevents__button" alt={eventTitle}>
        <h3 className="c-pastevents__title">{eventTitle}</h3>
        <p className="c-pastevents__date">
          {eventStart} to {eventEnd}
        </p>
        <p className="c-pastevents__content">{eventBlurb}</p>
        <h4 className="c-pastevents__location">{eventLocation}</h4>
      </Link>
    </EventsCardWrapper>
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
  padding: 0vh 8vw;
  justify-content: center;
  text-align: center;
  box-shadow: var(--hovercard-default);
  border-radius: var(--border-rad-mobile);
  background-color: var(--primary-clr-100);
  margin: 1.5vh 2vw;
  flex: 1 1 auto;

  a {
    text-decoration: none !important;
  }

  a > * {
    margin: 3.5vh 0vw;
  }

  .c-pastevents__content {
    font-size: 0.75rem;
  }

  .c-pastevents__title {
    font-size: 0.95rem;
    font-family: Lora;
    font-style: normal;
    text-align: start;
    font-weight: bold;
  }

  .c-pastevents__date {
    font-size: 0.75rem;
    text-align: right;
  }
  .c-pastevents__location {
    font-size: 0.7rem;
    text-align: center;
  }

  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  ///// Tablet Layout ///////////
  ///////////////////////////////
  ///////////////////////////////

  @media (min-width: 992px) {
    padding: 0vh 3.8vw;
    margin: 1.5vh 1vw;
    .c-pastevents__content {
      display: block;
      font-size: 0.9rem !important;
    }
    a > * {
      margin: 2.5vh 0vw;
    }
    .c-pastevents__title {
      font-size: 1.125rem;
      text-align: left;
    }
    .c-pastevents__date {
      font-size: 0.85rem;
      text-align: center;
    }
    .c-pastevents__content {
      text-align: right;
    }
    .c-pastevents__location {
      font-size: 0.75rem;
    }
  }

  ///////////////////////////
  ///////////////////////////
  ////////// Desktop ////////
  ///////////////////////////
  @media (min-width: 1280px) {
    padding: 3vh 4vw;
    margin: 1.5vh 1vw;
    transition: var(--hover-transition);

    :hover {
      transform: translateY(-4px);
      box-shadow: var(--hovercard-boxshadow);
    }
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
      margin: 1vh 0vw;
    }
    .c-pastevents__content {
      font-size: 0.95rem;
      margin: 2vh 0vw;
      text-align: left;
    }
    .c-pastevents__location {
      font-size: 0.85rem;
      margin: 1vh 0vw;
    }
  }

  //////////////////////////
  //////////////////////////
  /////// High Res /////////
  //////////////////////////
  //////////////////////////

  @media (min-width: 2500px) {
    margin: 1vh 0.5vw;
    padding: 3vh 2vw;
    .c-pastevents__title {
      text-align: left;
      margin: 1vh 0vw;
    }
    .c-pastevents__date {
      font-size: 0.9rem;
      margin: 1vh 0vw;
    }
    .c-pastevents__location {
      margin: 1vh 0vw;
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
    margin: 2vh 2vw;
    background-color: var(--primary-clr-100);
    padding: 2vh 8vw;
    border-radius: var(--border-rad-mobile);
    display: flex;
    box-shadow: var(--hovercard-default);
    flex-direction: column;
    }

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


  //////////////////////
  // tablet styling //// 
  //////////////////////
  @media (min-width: 992px) {
    .c-eventschedule__card {
      margin: 4vw 4vw;
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
        padding: 2vw 4vw;
        margin: 2vw;
        
        h3 {
          font-size: 1.25rem;
        }
      }
    }
  //////////////////////
    // 4k desktop styling ///
    //////////////////////
      
    @media (min-width: 2500px) {
      .c-eventschedule__card {
        margin: 1.5vw 1.5vw 0vw 1.5vw;
        padding: 1.5vw;
      }

    }
`;
