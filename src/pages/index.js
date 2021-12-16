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
  "Our archives are informed with the deep oral narratives within Asia. Browse our archives to immerse yourself into the rich untold stories of Asia during the Cold War"

const Index = () => {
  return (
    <Layout>
      <HomeWrapper>
        <section className="home__one bg--std">
          <article className="home__hero">
            <h1 className="title__mobile">Who We Are</h1>
            <div className="hero__details">
              <ImageWrapper>
                <StaticImage
                  src="../assets/img/china_interviews_10.jpeg"
                  className="hero__image"
                  alt="Hero Image"
                  layout="constrained"
                />
              </ImageWrapper>

              <div className="hero__content">
                <h1 className="title__desktop">Who We Are</h1>
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
                <div className="hero__button">
                  <DefaultButton url="/about" title="About Us" />
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="home__two bg--gray">
          <article className="home__archives">
            <h1>Archives Map</h1>
            <BACard type="search" />
            <BACard type="geography" />
            <p>{BrowseArchiveSub}</p>
          </article>
        </section>
        <section className="home__three bg--std">
          <article className="home__featureddocs">
            <h1>Featured Documents</h1>
            <FeatureCard />
          </article>
        </section>
        <section className="home__four bg--gray">
          <article className="home__events">
            <h1>Workshops & Events</h1>
            {eventList.map(items => {
              const { eventID, eventTitle, eventType, eventDate, eventBlurb } =
                items
              return (
                <div className="workshops__events" key={eventID}>
                  <h2>{eventTitle}</h2>
                  <ImageWrapper>
                    <StaticImage
                      src="../assets/img/rcw_workshops/rcw_3rd_workshop_card_image.jpeg"
                      layout="constrained"
                      alt="rcw workshop iamge"
                      className="event__image"
                    />
                  </ImageWrapper>
                  <p>{eventBlurb}</p>
                  <EventsCard />
                </div>
              )
            })}
          </article>
        </section>
      </HomeWrapper>
    </Layout>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  .hero__image {
    border: var(--imagecard-border-clr);
    border-radius: var(--imagecard-border-radius);
  }

  .event__image {
    border: var(--imagecard-border-clr);
    border-radius: var(--imagecard-border-radius);
  }

  /* drop shadow */
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

  @media (min-width: 768px) {
    .hero__image {
      display: flex;
      flex: 1;
    }
  }
`

const HomeWrapper = styled.section`
  flex-wrap: nowrap;
  flex-direction: column;

  article {
    padding: var(--padding-global-child);
    text-align: center;
  }

  article > h1,
  h2,
  h3,
  p {
    margin: 2vh 0vh;
  }

  .hero__button {
    margin: 4vh 0vw;
  }

  .home__hero > * {
    margin: 5vh 0vw;
  }

  .home__archives > * {
    margin: 5vh 0vw;
  }

  .home__featureddocs > * {
    margin: 5vh 0vw;
  }

  .home__events > * {
    margin: 5vh 0vw;
  }

  .workshops__events > * {
    margin: 5vh 0vw;
  }

  .workshops__events > p {
    white-space: pre-line;
  }

  /* dekstop layout */

  @media (min-width: 992px) {
    .title__mobile {
      display: none;
    }
    .hero__details {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }

    .hero__content {
      display: flex;
      flex-direction: column;
      width: 40vw;
      padding-left: 5vw;
    }
  }
`

export default Index
