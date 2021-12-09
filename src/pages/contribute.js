import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

// Import Wrapper Components
import Layout from "../components/Layout"

// Import Global Components
import DefaultButton from "../components/button"

// Variables
const contributeSub = "Contribute to the project!"
const ContributeHead =
  "We are always looking for contributors to the archives.\n Fill in the form below and we will get back to you."

const Contribute = () => {
  return (
    <Layout>
      <ContributeWrapper>
        <section className="contribute__header">
          <h1>Contribute</h1>
          <h2>{contributeSub}</h2>
        </section>
        <section className="contribute__content">
          <ImageWrapper>
            <StaticImage
              src="../assets/img/rcn_workshop_image.jpg"
              alt="RCN Workshop"
              layout="constrained"
            />
          </ImageWrapper>
          <div className="contribute__info">
            <p>{ContributeHead}</p>
            <input type="text" className="name" placeholder="Name" />
            <input type="text" className="email" placeholder="Email" />
            <input
              type="text"
              className="addinfo"
              placeholder="Additional Info"
            />
            <DefaultButton />
          </div>
        </section>
      </ContributeWrapper>
    </Layout>
  )
}

const ImageWrapper = styled.div`
  flex: 1;
  border: 1px solid black;

  /* drop shadow */
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
`

const ContributeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  .contribute__header {
    padding: 1rem;
    flex: 1;
    text-align: center;
  }

  .contribute__title {
    font-size: 2rem;
  }

  .contribute__content {
    align-items: center;
    display: flex;
    padding-top: 2rem;
    flex-direction: column;
  }

  /* right side */

  .contribute__info {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 1rem;
  }

  .contribute__info > p,
  input {
    margin: 1rem 0rem 0.5rem 0rem;
  }

  .contribute__info > input {
    padding: 1rem;
    background: rgba(232, 237, 223, 0.5);
    border: none;
    outline: none;
  }

  .contribute__info .addinfo {
    height: 4rem;
    align-items: start;
  }
`

export default Contribute
