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
        <section className="home__one bg--std">
          <article className="home__hero">
            <h1 className="heading mobile">Who We Are</h1>
            <div className="hero__details">
              <ImageWrapper>
                <StaticImage
                  src="../assets/img/china_interviews_10.jpeg"
                  className="hero__image"
                  alt="Hero Image"
                  layout="constrained"
                objectFit="cover"
                />
              </ImageWrapper>

              <div className="hero__content">
                <h1 className="heading desktop">Who We Are</h1>
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
            <div className="archives__search">
              <BACard type="Search" />
              <BACard type="Geography" />
            </div>
            <p>{BrowseArchiveSub}</p>
          </article>
        </section>
        <section className="home__three bg--std">
          <article className="home__featureddocs">
            <h1>Featured Documents</h1>
            <div className="featureddocs__cards">
              <FeatureCard />
            </div>
          </article>
        </section>
        <section className="home__four bg--gray">
          {eventList.map(items => {
            const { eventID, eventTitle, eventType, eventDate, eventBlurb } =
              items
            return (
              <article className="home__events">
                <h1>Workshops & {"\n"}Events</h1>
                <h2 className="heading mobile">{eventTitle}</h2>
                <ImageWrapper>
                  <StaticImage
                    src="../assets/img/rcw_workshops/rcw_3rd_workshop_card_image.jpeg"
                    layout="constrained"
                    alt="rcw workshop iamge"
                    className="event__image"
                  />
                </ImageWrapper>
                <h2 className="heading desktop">{eventTitle}</h2>
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

  .home__hero {
    padding-bottom: 6vh;
  }

  .home__hero > * {
    margin-top: 2vh;
  }
  .hero__button {
    margin: 2vh 0vw;
  }

  .hero__content {
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* Archives Map Section */

  .home__archives {
    text-align: center;
    padding-bottom: 6vh;
  }

  .archives__search > * {
    margin: 2vh 0vw;
  }
  /* Featured Documents Section */

  .home__featureddocs {
    padding-bottom: 6vh;
    text-align: center;
  }

  .featureddocs__cards > * {
    margin: 2vh 0vw;
  }

  /* Events & Workshops Section */

  .home__events {
    text-align: center;
    padding-bottom: 6vh;
  }

  .home__events > * {
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

    /* Browse Archives Section */
    .archives__search {
      display: none;
    }

    /* Featured Documents Section */

    .featureddocs__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    /* Workshops & Events */

    .home__events {
      display: grid;
      grid-template-columns: 1fr auto auto auto 1fr;
      grid-template-rows: 1fr auto auto;
      grid-template-areas:
        "image . title title title "
        "heading heading heading heading heading "
        "content content content content eventCard";
    }

    .event__image {
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
