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
            <article>
              <StaticImage
                src="../assets/img/rcn_workshop_image.jpg"
                alt="RCN Workshop"
                layout="constrained"
                className="contribute__image"
              />
            </article>
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
            <DefaultButton title="Submit"/>
          </div>
        </section>
      </ContributeWrapper>
    </Layout>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  @media (min-width: 768px) {
    padding-right: 3vw;
  }

  .contribute__image {
    border: var(--imagecard-border-clr); 
    border-radius: var(--imagecard-border-radius); 
  }

  /* drop shadow */
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
`

const ContributeWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: var(--padding-global-child);

  .contribute__header {
    flex: 1;
    text-align: center;
  }

  .contribute__title {
    font-size: 2rem;
  }

  .contribute__content {
    align-items: start;
    display: flex;
    flex-direction: column;
    padding-top: 6.15vh;
  }

  .contribute__info {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 6.15vh;
  }

  .contribute__info > p,
  input {
    margin: 0vh 0rem 2vh 0rem;
  }

  .contribute__info > input {
    padding: 1rem;
    background: rgba(232, 237, 223, 0.5);
    border: none;
    outline: none;

    ::placeholder {
      opacity: 50%;
    }
  }

  .contribute__info .addinfo {
    height: 8.5vh;
    align-items: start;
  }

  @media (min-width: 768px) {
    flex-direction: column;

    .contribute__content {
      flex-direction: row;
      align-items: center;
    }

    .contribute__info {
      padding-top: 0vh;
      padding-left: 3vw;
    }
  }
`

export default Contribute
