import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import GlossaryCard from "../components/glossarycard";

import { Head } from "../components/head";
import Layout from "../components/Layout";

const query = graphql`
  {
    allContentfulGlossaryPage {
      nodes {
        alphabetA {
          childMarkdownRemark {
            html
          }
        }
        alphabetB {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

const Glossary = () => {
  const data = useStaticQuery(query);
  const glossary = data.allContentfulGlossaryPage.nodes;
  return (
    <Layout>
      <Head title="Glossary" />
      <GlossaryWrapper>
        <section className="l-glossary bg--std">
          <h1 className="c-glossary title">Glossary</h1>
          <section className="c-glossary__linkscontainer">
            <a className="c-glossary__a">A</a>
            <a className="c-glossary__b">B</a>
          </section>
          <section className="c-glossary__container">
            <GlossaryCard glossary={glossary} />
          </section>
        </section>
      </GlossaryWrapper>
    </Layout>
  );
};

const GlossaryWrapper = styled.main`
  display: flex;
  flex-direction: column;

  .l-glossary {
    display: flex;
    flex-direction: column;
    flex-wrap: flex-wrap;
    justify-content: center;
    text-align: center;
  }

  .c-glossary__container {
  }
`;

export default Glossary;
