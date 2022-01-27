import React from "react";
import parse from "html-react-parser";
import Layout from "../components/Layout";
import styled from "styled-components";
import { getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

// components
import DefaultButton from "../components/button";
import { BACard } from "../components/ba-cards";
import { FeatureCard } from "../components/feature-cards";
import { RecentlyAdd } from "../components/recently-added";

export const query = graphql`
  {
    allContentfulHomePage {
      nodes {
        browseArchivesBlurb
        workshopsImageCard {
          gatsbyImageData(
            resizingBehavior: FILL
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
          workshopalt: title
        }
        welcomeMessageImageCard {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            resizingBehavior: FILL
          )
          welcomealt: title
        }
        welcomeMessage {
          childMarkdownRemark {
            html
          }
        }
        projectMembersImageCard {
          gatsbyImageData(
            placeholder: TRACED_SVG
            resizingBehavior: FILL
            layout: CONSTRAINED
          )
          membersalt: title
        }
        projectMembersBlurb
      }
    }
  }
`;
const Index = () => {
  const data = useStaticQuery(query);
  const homepage = data.allContentfulHomePage.nodes;

  // 1. Destructure homepage GraphQL query
  // homepage query returns an array which has a single object
  // we destructure the array first
  const [HomeItems] = homepage;

  // 2. Afterward,s we can proceed to destructure the HomeItems obj.

  const {
    browseArchivesBlurb,
    workshopsImageCard,
    welcomeMessageImageCard,
    workshopsImageCard: { workshopalt },
    welcomeMessageImageCard: { welcomealt },
    welcomeMessage: {
      childMarkdownRemark: { html },
    },
    projectMembersImageCard,
    projectMembersBlurb,
    projectMembersImageCard: { membersalt },
  } = HomeItems;

  // 3. Create Image Paths with getFile for images
  const pathToWelcomeImage = getImage(welcomeMessageImageCard);
  const pathToWorkshopsImage = getImage(workshopsImageCard);
  const pathToProjectMembersImage = getImage(projectMembersImageCard);

  return (
    <Layout>
      <IndexWrapper>
        <section className="l-welcome">
          <h1 className="c-welcome__title">Welcome Message</h1>
          <ImageWrapper>
            {" "}
            <GatsbyImage
              image={pathToWelcomeImage}
              alt={welcomealt}
              className="c-welcome__image"
            ></GatsbyImage>
          </ImageWrapper>
          <div className="c-welcome__blurb">{parse(`${html}`)}</div>
          <DefaultButton url="/about" title="See More"></DefaultButton>
        </section>
        <section className="l-featureddocs">
          <h1 className="c-featureddocs__title">Featured Documents</h1>
          <div className="c-featureddocs__container">
            <FeatureCard />
          </div>
        </section>
        <section className="l-recentlyadded">
          <h1 className="c-recentlyadded__title">Recently Added</h1>
          <div className="c-recentlyadded__container">
            {" "}
            <RecentlyAdd />
          </div>
        </section>
        <section className="l-browsearchives">
          <h1 className="c-browsearchives__title">Browse Archives</h1>
          <div className="c-browsearchives__container">
            <BACard type="Search" />
            <BACard type="Geography" />
          </div>
        </section>
        <section className="l-workshops">
          <h1 className="c-workshops__title">Workshops</h1>
          <ImageWrapper>
            {" "}
            <GatsbyImage
              image={pathToWorkshopsImage}
              alt={workshopalt}
              className="c-workshops__image"
            ></GatsbyImage>
          </ImageWrapper>
          <p className="c-workshops__blurb">{browseArchivesBlurb}</p>
          <DefaultButton url="/eventlist" title="See More"></DefaultButton>
        </section>
        <section className="l-projectmembers">
          <h1 className="c-projectmembers__title">Project Members</h1>
          <ImageWrapper>
            {" "}
            <GatsbyImage
              image={pathToProjectMembersImage}
              alt={membersalt}
              className="c-projectmembers__image"
            ></GatsbyImage>
          </ImageWrapper>
          <p className="c-projectmembers__blurb">{projectMembersBlurb}</p>
          <DefaultButton url="/about" title="See More"></DefaultButton>
        </section>
      </IndexWrapper>
    </Layout>
  );
};

const ImageWrapper = styled.article`
  margin: 0;
  .c-welcome__image {
    margin: 2vh 0vw;
    border-radius: calc(1.5rem + 4px);
    border: 1px solid var(--primary-clr-200);
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  }

  .c-workshops__image {
    margin: 2vh 0vw;
    border-radius: calc(1.5rem + 4px);
    border: 1px solid var(--primary-clr-200);
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  }

  .c-projectmembers__image {
    margin: 2vh 0vw;
    border-radius: calc(1.5rem + 4px);
    border: 1px solid var(--primary-clr-200);
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  }
`;

const IndexWrapper = styled.main`
  padding: 0vh var(--padding-mobile) 6vh var(--padding-mobile);

  .c-welcome__title {
    text-align: center;
  }

  .c-welcome__blurb {
    text-align: justify;
    margin: 2vh 0vw;
    font-style: normal;
    font-weight: 500;
  }

  .l-featureddocs {
    margin: 6vh 0vw;
  }
  .c-featureddocs__container {
    background-color: var(--primary-clr-50);
    padding: 2vh 2vw;
    margin: 2vh 0vw;
    border-radius: calc(5vw + 4px);
  }
  .c-featureddocs__title {
    text-align: center;
  }

  .l-recentlyadded {
    margin: 6vh 0vw;
  }

  .c-recentlyadded__container {
    background-color: var(--primary-clr-50);
    padding: 2vh 2vw;
    margin: 2vh 0vw;
    border-radius: calc(5vw + 4px);
  }

  .c-recentlyadded__title {
    text-align: center;
  }

  .l-browsearchives {
    margin: 6vh 0vw;
  }
  .c-browsearchives__title {
    text-align: center;
  }

  .c-browsearchives__container {
    margin: 2vh 0vw;
  }

  .l-workshops {
    margin: 6vh 0vw;
  }
  .c-workshops__title {
    text-align: center;
  }

  .c-workshops__blurb {
    margin: 2vh 0vw;
    font-style: normal;
    font-weight: 500;
    text-align: center;
  }

  .l-projectmembers {
    margin: 6vh 0vw;
  }

  .c-projectmembers__title {
    text-align: center;
  }

  .c-projectmembers__blurb {
    text-align: center;
    font-style: normal;
    font-weight: 500;
    margin: 2vh 0vw;
  }

  ///////////////////////////////////
  /////////// Tablet ////////////////
  ///////////////////////////////////
  @media (min-width: 922px) {
    padding: 4vh 5vw 6vh 5vw;
    max-width: 100vh;
    display: grid;
    column-gap: 2vh;
    grid-template-columns: 1fr 1fr 1.5fr;
    grid-template-auto: auto;
    grid-template-areas:
      "featured recentlyadded welcome"
      "featured recentlyadded browsearchives"
      "featured recentlyadded workshops"
      "featured recentlyadded projectmembers";
  }

  .l-welcome {
    grid-area: welcome;
    margin-bottom: 2vh;
  }

  .c-welcome__title {
    font-size: 2rem;
  }
  .l-featureddocs {
    grid-area: featured;
    margin: 0;
  }

  .c-featureddocs__title {
    font-size: 2rem;
  }

  .c-featureddocs__container {
    background-color: transparent;
    padding: 0;
  }

  .l-recentlyadded {
    grid-area: recentlyadded;
    margin: 0;
  }

  .c-recentlyadded__title {
    font-size: 2rem;
  }

  .c-recentlyadded__container {
    background-color: transparent;
    padding: 0;
  }
  .l-browsearchives {
    grid-area: browsearchives;
    margin-bottom: 2vh;
    margin: 0;
  }

  .c-browsearchives__title {
    font-size: 2rem;
  }

  .c-bacard__Search {
    display: none;
  }
  .c-bacard__Geography {
    display: none;
  }

  .l-workshops {
    grid-area: workshops;
    margin: 0;
    margin-bottom: 2vh;
  }

  .c-workshops__title {
    font-size: 2rem;
  }
  .l-projectmembers {
    grid-area: projectmembers;
    margin: 0;
    margin-bottom: 2vh;
  }

  .c-projectmembers__title {
    font-size: 2rem;
  }
`;

export default Index;
