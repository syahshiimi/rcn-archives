import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import DefaultButton from "../components/button";

const About = () => {
  return (
    <Layout>
      <AboutWrapper></AboutWrapper>
    </Layout>
  );
};

const AboutWrapper = styled.main``;

export default About;
