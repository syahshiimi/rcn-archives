import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

// components
import DefaultButton from "../components/button";
import { BACard, FeatureCard, EventsCard } from "../components/cards";

const Index = () => {
  return (
    <Layout>
      <IndexWrapper>
        <section className="l-welcome"></section>
        <section className="l-featureddocs"></section>
        <section className="l-recentlyadded"></section>
        <section className="l-browsearchives"></section>
        <section className="l-workshops"></section>
        <section className="l-projectmembers"></section>
      </IndexWrapper>
    </Layout>
  );
};

const IndexWrapper = styled.main``;

export default Index;
