import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

// components
import DefaultButton from "../components/button"
import { BACard, FeatureCard, EventsCard } from "../components/cards"
import { eventList } from "../data"

// variables

const BrowseArchiveSub =
  "Our archives are informed with the deep oral narratives within Asia. Browse our archives to immerse yourself into the rich untold stories of Asia during the Cold War."

const Index = () => {
  return (
    <Layout>
      <HomeWrapper>
        <section className="l-hero bg--std">
          <article className="c-hero">
            <h1 className="c-hero__heading mobile">Who We Are</h1>
            <div className="l-hero__details">
              <ImageWrapper>
                <StaticImage
                  src="../assets/img/china_interviews_10.jpeg"
                  className="c-hero__image"
                  alt="Hero Image"
                  layout="constrained"
                  objectFit="cover"
                />
              </ImageWrapper>

              <div className="l-hero__content">
                <h1 className="c-hero__heading desktop">Who We Are</h1>
                <h3>
                  Aliquam facilis numquam. Quisquam soluta officia. Molestias
                  voluptate voluptatem cupiditate sed sit. Nihil quod corrupti
                  et vel consectetur illum quo.
                </h3>
                <p>
                  Quidem quae et est impedit reprehenderit. Voluptatem repellat
                  expedita est odit porro est possimus qui accusamus. Aspernatur
                  quae et eum aut officiis doloribus. Sed velit omnis veritatis
                  minus tenetur sed. Voluptatem ullam harum sed asperiores. Aut
                  voluptate recusandae ut eius cupiditate pariatur impedit.
                  Voluptatem deserunt velit aut quibusdam cum asperiores est
                  numquam eveniet.
                </p>
                <div className="c-hero__button">
                  <DefaultButton url="/about" title="About Us" />
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="l-browse bg--gray">
          <article className="c-browse">
            <h1 className="c-browse__header">Archives Map</h1>
            <div className="c-browse__container">
              <BACard type="Search" />
              <BACard type="Geography" />
            </div>
            <p className="c-browse__subheading">{BrowseArchiveSub}</p>
          </article>
        </section>
        <section className="l-featured bg--std">
          <article className="c-featured">
            <h1>Featured Documents</h1>
            <div className="l-featured__documents">
              <FeatureCard />
            </div>
          </article>
        </section>
        <section className="l-events bg--gray">
          {eventList.map(items => {
            const { eventID, eventTitle, eventType, eventDate, eventBlurb } =
              items
            return (
              <article className="c-events">
                <h1>Workshops & {"\n"}Events</h1>
                <h2 className="c-events__heading mobile">{eventTitle}</h2>
                <ImageWrapper>
                  <StaticImage
                    src="../assets/img/rcw_workshops/rcw_3rd_workshop_card_image.jpeg"
                    layout="constrained"
                    alt="rcw workshop iamge"
                    className="c-event__image"
                  />
                </ImageWrapper>
                <h2 className="c-events__heading desktop">{eventTitle}</h2>
                <p>{eventBlurb}</p>
                <EventsCard />
              </article>
            )
          })}
        </section>
      </HomeWrapper>
    </Layout>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  .c-hero__image {
    border: var(--imagecard-border-clr);
    border-radius: var(--imagecard-border-radius);
  }

  .c-event__image {
    border: var(--imagecard-border-clr);
    border-radius: var(--imagecard-border-radius);
  }

  /* drop shadow */
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

  @media (min-width: 768px) {
    .c-hero__image {
      display: flex;
      flex: 1;
    }
  }

  @media (min-width: 992px) {
    grid-area: image;
  }
`

const HomeWrapper = styled.section`
  white-space: pre-line;
  .desktop {
    display: none;
  }

  article {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    flex-direction: column;
    padding: var(--padding-global-child);
  }

  article > h1,
  h2,
  h3,
  p {
    margin: 2vh 0vh;
  }

  /* Hero Section */

  .c-hero {
    padding-bottom: 6vh;
  }

  .l-hero__details > * {
    margin-top: 2vh;
  }
  .c-hero__button {
    margin: 2vh 0vw;
  }

  .l-hero__content {
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* Archives Map Section */

  .c-browse {
    text-align: center;
    padding-bottom: 6vh;
  }

  .c-browse__container > * {
    margin: 2vh 0vw;
  }

  /* Featured Documents Section */

  .c-featured {
    padding-bottom: 6vh;
    text-align: center;
  }

  .l-featured__documents > * {
    margin: 2vh 0vw; // apply margin to all child eleenents
  }

  /* Events & Workshops Section */

  .c-events {
    text-align: center;
    padding-bottom: 6vh;
  }

  .c__events > * {
    margin: 2vh 0vw;
  }

  /* tablet layout */

  @media (min-width: 992px) {
    h1 {
      font-size: 2.5rem;
    }
    /* Hero Section */
    .mobile {
      display: none;
    }

    .desktop {
      display: flex;
    }

    .c-hero__details {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }

    .c-hero__content {
      display: flex;
      flex-direction: column;
      width: 40vw;
      padding-left: 5vw;
    }

    /* Browse Archives Section */
    .c-browse__container {
      display: none;
    }

    /* Featured Documents Section */

    .l-featured__documents {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;

    }

    /* Workshops & Events */

    .c-events {
      display: grid;
      grid-template-columns: 1fr auto auto auto 1fr;
      grid-template-rows: 1fr auto auto;
      grid-template-areas:
        "image . title title title "
        "heading heading heading heading heading "
        "content content content content eventCard";
    }

    .c-event__image {
      grid-area: image;
    }

    h1 {
      grid-area: title;
      text-align: right;
    }
    h2 {
      grid-area: heading;
      place-self: center;
    }

    p {
      grid-area: content;
      text-align: left;
      align-self: center;
    }

    .event__cards {
      grid-area: eventCard;
      justify-content: end;
      align-self: center;
    }
  }

  @media (min-width: 1280px) {
    h1 {
      font-size: 4rem;
    }
  }
`

export default Index
