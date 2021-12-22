import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import DefaultButton from "../components/button"

const About = () => {
  return (
    <Layout>
      <AboutWrapper>
        <section className="l-hero bg--std">
          <h1 className="c-hero__header">Who We Are</h1>
          <h2 className="c-hero__subheading">
            Reconceptualizing the Cold War Narratives is a long term project by
            historian Masuda Hajimu of National University Singapore.
          </h2>
          <StaticImage
            src="../assets/img/Masuda_cover_image.jpeg"
            className="c-hero__image std-style"
            alt="masuda about us iamge"
            layout="constrained"
            objectFit="cover"
            aspectRatio={3 / 2}
          />
          <p className="c-hero__content">
            I would like to explore the ways in which we can narrate the history
            of the twentieth century not only through the perspectives of
            empire, state, and policymakers but from a social point of view,
            particularly concerning ordinary people’s struggles concerning what
            kinds of societies to construct in the turbulent and globalizing
            twentieth century world.
          </p>
        </section>
        <section className="l-focus bg--light">
          <h1 className="c-focus__header">Our Focus</h1>
          <h2 className="c-focus__subheading">
            Engaging with On-The-Ground Narratives
          </h2>
          <StaticImage
            src="../assets/img/image1-31.png"
            alt="okinawan students departing for the USA"
            className="c-focus__image std-style"
            layout="constrained"
            objectFit="cover"
            aspectRatio={3 / 2}
          />
          <p className="c-focus__content">
            The primary goal of this oral archive is to captures the emotions,
            enthusiasms, and fears of the era, and explore experiences and
            memories of ordinary people who witnessed various kinds of real and
            imagined wars across Asia. Our oral history project in Asia—in a
            sense, an attempt at history from below, and from Asia—will be an
            important and useful corrective to conventional histories of the
            Cold War and decolonization, which have largely emphasized
            superpowers’ and political leaders’ conduct, with generally a
            Western-centric perspective.
          </p>
        </section>
        <section className="l-contact bg--std">
          <h1 className="c-contact__header">Get In Touch</h1>
          <h2 className="c-contact__subheading">
            We are always interested in hearing from you!
          </h2>
          <StaticImage
            src="../assets/img/rcw_workshops/rcw_2nd_workshop.jpg"
            alt="get in touch image"
            className="c-contact__image std-style"
            layout="constrained"
            objectFit="cover"
            aspectRatio={3 / 2}
          />
          <div className="c-contact__form">
            <input type="text" className="name" placeholder="Name" />
            <input type="text" className="email" placeholder="Email" />
            <input
              type="text"
              className="addinfo"
              placeholder="Additional Info"
            />
            <DefaultButton title="Submit" />
          </div>
        </section>
      </AboutWrapper>
    </Layout>
  )
}

const AboutWrapper = styled.main`
  section {
    padding: 4vh var(--padding-mobile) 6vh var(--padding-mobile);
    display: flex;
    jusitfy-content: center;
    flex-direction: column;
  }

  // apply to each parent block's child element
  .l-hero > * {
    margin: 2vh 0vw;
    text-align: center;
  }

  .l-focus > * {
    margin: 2vh 0vw;
    text-align: center;
  }

  .l-contact > * {
    margin: 2vh 0vw;
    text-align: center;
  }

  // form styling

  .c-contact__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1 1 0;
  }

  .c-contact__form > input {
    padding: 2vh 4vw;
    background: rgba(232, 237, 223, 0.5);
    border: none;
    outline: none;

    ::placeholder {
      opacity: 50%;
    }
  }

  .c-contact__form > p,
  input {
    margin: 0vh 0rem 2vh 0rem;
  }

  .c-contact__form > .addinfo {
    height: 8.5vh;
    align-items: start;
  }
  //  page wide image styling
  //
  .std-style {
    border-radius: calc(1.5rem + 4px);
    border: 2px solid var(--primary-clr-200);
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  }

  ///////////////////////////
  ///////////////////////////
  ///////////////////////////
  /////// Tablet ////////////
  ///////////////////////////
  ///////////////////////////
  ///////////////////////////

  @media (min-width: 992px) {
    section {
      padding: 6vh var(--padding-desktop);
    }

    // Hero Section
    .l-hero {
      display: grid;
      grid-column-gap: 6vw;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        "heading image"
        "subheading image"
        "content image";
    }

    .c-hero__header {
      grid-area: heading;
      align-self: center;
    }

    .c-hero__subheading {
      grid-area: subheading;
      align-self: center;
    }

    .c-hero__content {
      grid-area: content;
      align-self: center;
    }
    .c-hero__image {
      grid-area: image;
    }

    // Focus Section
    .l-focus {
      display: grid;
      grid-column-gap: 6vw;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        "image heading"
        "image subheading"
        "image content";
    }
    .c-focus__header {
      grid-area: heading;
      align-self: center;
    }

    .c-focus__subheading {
      grid-area: subheading;
      align-self: center;
    }

    .c-focus__content {
      grid-area: content;
      align-self: center;
    }
    .c-focus__image {
      grid-area: image;
    }

    // Contact Section
    .l-contact {
      display: grid;
      grid-column-gap: 4vw;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        "heading heading"
        "subheading subheading"
        "content image";
    }
    .c-contact__header {
      grid-area: heading;
      align-self: center;
    }

    .c-contact__subheading {
      grid-area: subheading;
      align-self: center;
    }

    .c-contact__form {
      align-self: center;
      grid-area: content;
      display: flex;
      flex-direction: column;
    }
    .c-contact__image {
      grid-area: image;
      align-self: start;
    }

    // Contact Form Styling
    //
    .c-contact__form > input {
      padding: 1vh 3vw;
    }
  }
  .c-contact__form > p,
  input {
    margin: 0vh 0vw 1vh 0vw;
  }

  ///////////////////////////
  ///////////////////////////
  ///////////////////////////
  /////// Desktop ///////////
  ///////////////////////////
  ///////////////////////////
  ///////////////////////////

  @media (min-width: 1280px) {
    section {
      padding: 10vh var(--padding-desktop);
    }

    .c-contact__form > input {
      padding: 3vh 3vw;
      font-size: 1.15rem;
    }
    .l-hero > * {
      margin: 4vh 0vw;
      text-align: center;
    }

    .l-focus > * {
      margin: 4vh 0vw;
      text-align: center;
    }

    .l-contact > * {
      margin: 4vh 0vw;
      text-align: center;
    }

  }

  // High Res Display

  @media (min-width: 2560px) {
    // Form Styling
    .c-contact__form > input {
      padding: 3vh 2vw;
      font-size: 1.9rem;
    }
    .c-contact__form > p,
    input {
      margin: 0vh 0vw 2vh 0vw;
    }
    .l-hero > * {
      margin: 4vh 0vw;
      text-align: center;
    }

    .l-focus > * {
      margin: 4vh 0vw;
      text-align: center;
    }

    .l-contact > * {
      margin: 4vh 0vw;
      text-align: center;
    }
  }
`
export default About
