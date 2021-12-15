import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

// components
import DefaultButton from "../components/button"
import { BACard } from "../components/cards"

const Index = () => {
  return (
    <Layout>
      <HomeWrapper>
        <section className="home__one bg--std">
          <article>
            <div className="hero__header">
              <h1>Who We Are</h1>
              <ImageWrapper>
                <StaticImage
                  src="../assets/img/china_interviews_10.jpeg"
                  className="hero__image"
                  alt="Hero Image"
                />
              </ImageWrapper>
            </div>
            <div className="hero__content">
              <h3>
                Aliquam facilis numquam. Quisquam soluta officia. Molestias
                voluptate voluptatem cupiditate sed sit. Nihil quod corrupti et
                vel consectetur illum quo.
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
          </article>
        </section>
        <section className="home__two bg--gray">
          <article className="home__archives">
            <h1>Archives Map</h1>
            <BACard type="search"/>
            <BACard type="geography" />
          </article>
        </section>
        <section className="home__three bg--std">
          <article className="home__featureddocs">
            <h1>Featured Documents</h1>
          </article>
        </section>
        <section className="home__four bg--gray">
          <article className="home__Events">
            <h1>Workshops & Events</h1>
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
  margin: 6vh 0vw 6vh 0vw;

  @media (min-width: 768px) {
    padding-right: 3vw;
  }

  .hero__image {
    border: 0.125rem solid var(--primary-clr-200);
    border-radius: calc(2rem + 0.125rem);
  }

  /* drop shadow */
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
`

const HomeWrapper = styled.section`
  flex-wrap: nowrap;
  flex-direction: column;

  section > article {
  }

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

  .hero__content {
    margin: 4vh 0vw 0vh 0vw;
  }

  .hero__button {
    margin: 4vh 0vw 4vh 0vw;
  }
`

export default Index
