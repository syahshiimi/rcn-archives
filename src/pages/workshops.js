import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import DefaultButton from "../components/button"
import { PastEventsCard } from "../components/cards"
import Layout from "../components/Layout"

const Workshops = () => {
  return (
    <Layout>
      <WorkshopWrapper>
        <section className="l-pastworkshops">
          <h1 className="c-pastworkshops__heading">Past Events & Workshops</h1>

          <div className="l-pastworkshops__container">
            <PastEventsCard />
          </div>
          <DefaultButton title="See More" />
        </section>
      </WorkshopWrapper>
    </Layout>
  )
}

const WorkshopWrapper = styled.main`
  padding: 4vh var(--padding-mobile) 6vh var(--padding-mobile);

  .l-pastworkshops {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .l-pastworkshops > * {
    margin: 2vh 0vw;
  }

  .c-pastworkshops__heading {
    text-align: center;
  }

  .l-pastworkshops__container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: var(--primary-clr-50);
    padding: 2vh 8vw;
    border-radius: 25px;
  }

  .l-pastworkshops__container > * {
    margin: 2vh 0vw;
  }
`

export default Workshops
