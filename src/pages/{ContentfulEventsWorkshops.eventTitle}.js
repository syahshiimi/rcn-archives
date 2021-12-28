import React from "react"

const EventsTemplate = props => {
  console.log(props)
  return (
    <div className="l-events">
      <h1 className="c-events__title"></h1>
      <p className="c-events__content"></p>
      <a href="/" className="c-events__signup" />
      <div className="l-events__container">
        <div className="c-events__itinerary"></div>
      </div>
    </div>
  )
}

export default EventsTemplate
