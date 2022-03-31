import React from "react";
import { Head } from "../components/head";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

// Import Wrapper Components
import Layout from "../components/Layout";

export const query = graphql`
  {
    allContentfulContactUsPage {
      nodes {
        contactUsTitlePage
        contactUs {
          raw
        }
      }
    }
  }
`;

const ContactUs = () => {
  const data = useStaticQuery(query);
  const [contactinfo] = data.allContentfulContactUsPage.nodes;
  const { contactUsTitlePage, contactUs } = contactinfo;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>;
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <ol>{children}</ol>;
      },
      [BLOCKS.QUOTE]: (node, children) => {
        return <q>{children}</q>;
      },
    },
  };

  return (
    <Layout>
      <Head title="Contact Us" />
      <ContributeWrapper>
        <section className="l-contactus">
          <h1 className="c-contactus__header">Contact Us</h1>
          <h5 className="c-contactus__subheading">{contactUsTitlePage}</h5>
          <article className="c-contactus__content">
            {renderRichText(contactUs, options)}
          </article>
        </section>
      </ContributeWrapper>
    </Layout>
  );
};

const ContributeWrapper = styled.article`
  .l-contactus {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0vh var(--padding-mobile) 6vh var(--padding-mobile);
  }
  .c-contactus__title {
    flex: 1;
    text-align: center;
  }

  .c-contactus__subheading {
    margin: 1vh 0vw;
  }
  .c-contactus__content {
    p {
      margin: 2vh 0vw;
      text-align: justify;
    }
    ul {
      margin: 0vh 4vw 0vh 4vw;

      p {
        margin: 0.5vh 0vw;
      }
    }
    q {
      :before {
        display: none;
      }
      p {
        margin: 0vh 10vw;
      }
    }
  }

  ///////////////////
  ///////////////////
  // Tablet Layout //
  ///////////////////
  ///////////////////

  @media (min-width: 992px) {
    .l-contactus {
      padding: 6vh var(--padding-desktop);
      display: grid;
      grid-template-columns: auto 
      grid-template-rows: auto ;
      grid-template-areas:
        "header header"
        "subheading subheading"
      "content content";
    }

    .c-contactus__header {
      text-align: center;
      grid-area: header;
    }
    .c-contactus__subheading {
      margin: 2vh 0vw;
      grid-area: subheading;
      text-align: center;
    }
  .c-contactus__content {
      grid-area: content
      display: flex;
      flex-direction: column;
    p {
      text-align: justify;
    }
    ul {

      p {
      }
    }
    q {
      :before {
        display: none;
      }
      p {
      }
    }

    .c-contactus__btn {
      grid-area: button;
      justify-self: center;
    }
  }

  ///////////////////
  ///////////////////
  // Desktop Layout /
  ///////////////////
  ///////////////////

  @media (min-width: 1280px) {
    .l-contactus {
      padding: 10vh 25vw;
      grid-row-gap: 4vh;
    }

    .c-contactus__header {
      margin: 0;
    }

    .c-contactus__form {
      input {
        margin: 1vh 0vw;
        padding: 4vh 2vw;
      }
    }

    .c-contactus__subheading {
      font-size: 1.125rem;
      align-self: end;
    }
  }

  //////////////////////
  //////////////////////
  /////// Hi res ///////

  @media (min-width: 2500px) {
    .l-contactus {
      padding: 10vh 30vw;
    }
    .c-contactus__header {
      font-size: 4.5rem;
    }
    .c-contactus__subheading {
      font-size: 1.25rem;
      align-self: end;
    }

    .c-contactus__form {
      font-size: 1.8rem;
    }

    .c-contactus__form > input {
      padding: 2vh 2vw;
      ::placeholder {
        font-size: 1.25rem;
      }
    }
  }
`;

export default ContactUs;
