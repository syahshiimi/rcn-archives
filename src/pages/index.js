import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Index = () => {
  return (
    <Layout>
      <HomeWrapper>
        <section className="home__one bg--std">
          <article className="who_we_are">
            <h1>Who We Are</h1>
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
              Voluptatem deserunt velit aut quibusdam cum asperiores est numquam
              eveniet.
            </p>
          </article>
        </section>
        <section className="home__two bg--gray">
          <article className="home__archives">
            <h1>Archives Map</h1>
          </article>
        </section>
        <section className="home__three bg--std">
          <article className="home__featureddocs">
            <h1>Featured Documents</h1>
          </article>
        </section>
        <section className="home__four bg--gray">
          <article>
            <h1>Workshops & Events</h1>
          </article>
        </section>
      </HomeWrapper>
    </Layout>
  )
}

const HomeWrapper = styled.section`
  flex-wrap: nowrap;
  flex-direction: column;

  .home__archives {
    padding: var(--padding-global-child);
  }
`

export default Index
