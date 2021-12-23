import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { getImage, StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// components
import DefaultButton from "../components/button"
import { BACard, FeatureCard, EventsCard } from "../components/cards"
import { eventList } from "../data"

// variables

const BrowseArchiveSub =
  "Our archives are informed with the deep oral narratives within Asia. Browse our archives to immerse yourself into the rich untold stories of Asia during the Cold War."

const query = graphql`
  {
    allFile(
      filter: {
        relativeDirectory: { eq: "workshops" }
        name: { eq: "rcw_3rd_workshop_1" }
      }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
const Index = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
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
            <h1 className="c-featured__heading">Featured Documents</h1>
            <div className="l-featured__documents">
              <FeatureCard />
            </div>
          </article>
        </section>
        <section className="l-events bg--gray">
          {eventList.map(items => {
            const {
              featured,
              eventID,
              eventTitle,
              eventType,
              eventDate,
              eventBlurb,
            } = items
            if (featured === true) {
              return (
                <article className="c-events" key={eventID}>
                  <h1>Workshops & {"\n"}Events</h1>
                  <h2 className="c-events__heading mobile">{eventTitle}</h2>

                  {/* <ImageWrapper>
                    <StaticImage
                      src="../assets/img/rcw_workshops/rcw_3rd_workshop_card_image.jpeg"
                      layout="constrained"
                      alt="rcw workshop iamge"
                      className="c-event__image"
                    /> 
                    
                  </ImageWrapper>*/}
                  {nodes.map((item, index) => {
                    const { name } = item
                    const pathToImage = getImage(item)
                    return (
                      <ImageWrapper key={index}>
                        <GatsbyImage
                          image={pathToImage}
                          alt={name}
                          className="c-event__image"
                        />
                      </ImageWrapper>
                    )
                  })}
                  <h2 className="c-events__heading desktop">{eventTitle}</h2>
                  <p>{eventBlurb}</p>
                  <EventsCard featured={true} />
                </article>
              )
            } else {
              return null
            }
          })}
        </section>
      </HomeWrapper>
    </Layout>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;

  .c-hero__image {
    border: var(--imagecard-border-clr);
    border-radius: var(--imagecard-border-radius);
    justify-content: center;
    width: 100%;

    @media (min-width: 1280px) {
      grid-area: image;
      height: 70%;
      align-self: center;
    }
  }

  .c-event__image {
    border: var(--imagecard-border-clr);
    border-radius: var(--imagecard-border-radius);
    justify-content: center;

    @media (min-width: 992px) {
      grid-area: image;
      width: 75%;
    }
  }

  /* drop shadow */
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

  @media (min-width: 768px) {
    .c-hero__image {
      display: flex;
      flex: 1;
    }
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
    padding: 4vh var(--padding-mobile) 6vh var(--padding-mobile);
  }

  article > h1,
  h2,
  h3,
  p {
    margin: 2vh 0vh;
  }

  /* Hero Section */

  .c-hero {
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
  }

  .c-browse__container > * {
    margin: 2vh 0vw;
  }

  .c-browse__card {
    padding: 8%;
  }

  /* Featured Documents Section */

  .c-featured__heading {
    text-align: center;
  }

  .l-featured__documents {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
  }
  .l-featured__documents > * {
    margin: 2vh 0vw; // set margin for each card component
  }

  /* Events & Workshops Section */

  .c-events {
    text-align: center;
  }

  .c-events > * {
    margin: 2vh 0vw;
  }

  /* tablet layout */

  @media (min-width: 992px) {
    article {
      padding: 4vh var(--padding-desktop) 6vh var(--padding-desktop);
    }

    /* Hero Section */
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

    /* Workshops & Events */

    .c-events {
      display: grid;
      grid-row-gap: 3vh;
      grid-template-columns: 2fr auto 1fr;
      grid-template-rows: 1fr auto auto;
      grid-template-areas:
        "image . title "
        "heading heading heading "
        "content content eventCard";
    }

    .c-events > * {
      margin: 0;
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

    .c-event__card {
      grid-area: eventCard;
      justify-content: end;
      align-self: center;
    }
  }

  // desktop layout //
  @media (min-width: 1280px) {
    article {
      padding: 10vh var(--padding-desktop);
    }
    .mobile {
      display: none;
    }

    .desktop {
      display: flex;
    }

    .c-hero {
    }

    /* Hero Section */

    .l-hero__details {
      display: grid;
      grid-column-gap: 4vw;
      grid-template-columns: auto auto;
      grid-template-rows: auto;
      grid-template-areas: "image content";
    }

    .l-hero__content {
      grid-area: content;
    }

    /* target all child elements */
    .l-hero__content > * {
      text-align: right;
      margin-left: auto;
    }

    /* featured documents layout */

    /* events section */
    .c-events {
      grid-row-gap: 4vh;
    }

    .c-events__heading {
      margin-top: 2vh;
    }
  }
`

export default Index
