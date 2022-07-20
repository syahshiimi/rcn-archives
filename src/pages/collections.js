import React from 'react';
import parse from "html-react-parser";
import Layout from "../components/Layout";
import { Head } from "../components/head";
import Masonry from "react-masonry-css";

import slugify from "slugify";
import styled from "styled-components";
import { graphql } from 'gatsby';

// Import Components
import { SimpleButton } from "../components/simplebutton";


export const query = graphql`
   {
    allContentfulCollectionsPage(
      sort: { order: ASC, fields: collectionTitle }
    ) {
      nodes {
        collectionTitle
        collectionBlurb {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;


const CollectionsPage = ({ data }) => {
    const collections = data.allContentfulCollectionsPage.nodes;
    console.log(collections);
    // Metadata
    const pageBlurb = (
        <p className="c-browsearchives__content">
            Browse through our carefully curated oral archives. Working with on - the
            - ground experiences, we aim to provide a wholesome and comprehensive
            approach towards understanding the cold war from a grassroots perspective.
        </p>
    );
    const {
        props: { children },
    } = pageBlurb;

    return (
        <Layout>
            <Head title={"Featured Collections"} description={children} />
            <FeaturedCollectionsWrapper>
                <div className='c-featuredcollections-content'>
                    <h1 className='c-featuredcollections__heading'>
                        Featured Collections
                    </h1>
                    <p className='c-featuredcollections__blurb'>View our list of collections that we have been archiving over the past few years</p>
                </div>

                <div className='c-collectionspage__container'>
                    <Masonry
                        breakpointCols={{ default: 3, 992: 1, 1280: 2, 2500: 3 }}
                        columnClassName="c-collectionspage__masonrycolumn"
                        className="c-collectionspage__cardcontainer"
                    >

                        {collections.map((item) => {
                            const {
                                //          transcriptImage,
                                collectionTitle,
                                collectionBlurb: {
                                    childMarkdownRemark: { html },
                                },
                            } = item;
                            // remove dots in strings (if exists)
                            const cleanString = collectionTitle
                                .replace(".", " ")
                                .replace("(", " ")
                                .replace(")", " ")
                                .replace("'", " ");
                            // use slugify to return a string in a slug format
                            const slug = slugify(cleanString, { lower: true });
                            return (

                                <CollectionCardWrapper key={collectionTitle}>
                                    <div className="c-collectioncard">
                                        <div className="c-collectioncard__title">{collectionTitle}</div>
                                        <div className="c-collectioncard__blurb">{parse(`${html}`)}</div>
                                        <div className="c-collectioncard__button">
                                            <SimpleButton title="Read More" url={`../${slug}`} />
                                        </div>
                                    </div>
                                </CollectionCardWrapper>

                            )
                        })}
                    </Masonry>
                </div>
            </FeaturedCollectionsWrapper>
        </Layout >
    )
}


const FeaturedCollectionsWrapper = styled.main`
  display: flex;
  row-gap: 2vh;
  flex-direction: column;
  justify-contnet: center;
  text-align: center;
  padding: 2vh var(--padding-mobile);

  .c-featuredcollections__blurb {
    padding: 2vh 0vw;
  }

  .c-collectionspage__border {
    border: 1px solid var(--primary-clr-100);
    margin: 1vh 0vw;
  }

  .c-collectionspage__transcriptstitle {
    margin: 1vh 0vw;
  }

  .c-collectionspage__trasnscriptssubtitle {
    font-size: 0.85rem;
  }

  .c-collectionspage__container {
    background-color: var(--primary-clr-50);
    border-radius: var(--border-rad-mobile);
  }

  .c-collectionspage__cardcontainer {
    padding: 1vh 2vw;
    width: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .c-collectionspage__masonrycolumn {
    width: auto;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }

  //////////////////////////
  /////// Tablet ///////////
  //////////////////////////

  @media (min-width: 992px) {
    padding: 6vh var(--padding-desktop) 6vh var(--padding-desktop);
    row-gap: 1vh;

    .c-collectionspage__trasnscriptssubtitle {
      margin-bottom: 1vh;
    }
    .c-collectionspage__container {
      padding: 1vw;
    }

    .c-collectionspage__cardcontainer {
      padding: 0;
      margin: 0;
    }

    .c-collectionspage__masonrycolumn {
      margin: 0vh 1vw;
    }
  }

  ///////////////////////////
  ////////// Desktop ////////
  ///////////////////////////

  @media (min-width: 1280px) {
    .c-collectionspage__title {
      margin: 2vh 10vw;
    }
    .c-collectionspage__blurb {
      margin: 0vh 0vw;
    }
    .c-collectionspage__masonrycolumn {
      margin: 0;
    }

    .c-collectionspage__border {
      margin: 0;
    }
    .c-collectionspage__container {
        margin-top: 4vh;
      margin-bottom: 2vh;
    }
    .c-collectionspage__cardcontainer {
      margin: 0;
    }
    .c-collectionspage__transcriptstitle {
      margin: 2vh 0vw;
    }

    .c-collectionspage__trasnscriptssubtitle {
      margin: 0vh 0vw 4vh 0vw;
    }
  }
  ///////////////////////////
  /////// 4k Desktop ////////
  ///////////////////////////

  @media (min-width: 2500px) {
    padding: 5vh 24vw;
    .c-collectionspage__title {
      margin: 2vh 0vw;
      font-size: 4rem;
    }

    .c-collectionspage__blurb {
      margin: 1vh 0vw;
    }

    .c-collectionspage__container {
      margin: 3vh 0vw;
    }
    .c-collectionspage__masonrycolumn {
      margin: 0;
    }
    .c-collectionspage__cardcontainer {
      margin: 0vh 0vw;
    }

    .c-collectionspage__trasnscriptssubtitle {
      margin: 1vh 0vw;
      font-size: 1rem;
    }
  }

`;

const CollectionCardWrapper = styled.section`
  .c-collectioncard {
    display: flex;
    background-color: var(--primary-clr-100);
    padding: 3vh 7vw;
    margin: 1.5vh 2vw;

    /* styling */
    border-radius: calc(2rem + 6px);
    display: flex;
    box-shadow: 0px 4px 9px rgba(51, 53, 51, 0.55);
    flex-direction: column;
  }

  .c-collectioncard__title {
    text-align: center;
    font-family: "Lora", Serif;
    font-weight: bold;
    font-size: 0.95rem;
    margin: 0.45vh 0vw;
  }

  .c-collectioncard__blurb {
    margin: 2vh 1vw 0vh 1vw;
    text-align: left;
    p {
      font-size: 0.85rem;
      line-height: 1.25;
    }
  }
  .c-collectioncard__button {
    font-family: "Ubuntu", Serif;
    font-weight: normal;
    text-align: right;
    margin: 1vh 0vw;
    font-size: 0.85rem;
    color: var(--primary-clr-150);
    text-align: right;
  }

  @media (min-width: 992px) {
    .c-collectioncard {
      padding: 2vh 1.5vh;
      margin: 1vh 0vw;
      transition: var(--hover-transition);
    }

    .c-collectioncard: hover {
      transform: translateY(-4px);
      box-shadow: 0px 5px 14px rgba(51, 53, 51, 0.65);
    }

    .c-collectioncard__title {
      font-size: 0.85rem;
    }
    .c-collectioncard__blurb {
      margin: 1vh 0vw;
      p {
        font-size: 0.75rem;
      }
    }

    .c-collectioncard__read {
      margin: 0;
    }
    .c-collectioncard__button {
      margin: 0;

      .c-simplebutton {
        font-size: 0.65rem;
      }
    }
  }

  @media (min-width: 1280px) {
    .c-collectioncard {
      margin: 2vh 1vw;
      padding: 3vh 0.5vh;
    }

    .c-collectioncard__title {
      margin: 0vh 2vw;
      font-size: 0.95rem;
    }

    .c-collectioncard__blurb {
      margin: 1.5vh 1.8vw;
      p {
        font-size: 0.85rem;
      }
    }

    .c-collectioncard__button {
      margin: 0vh 2vw;
    }
  }
  //////////////////////////////
  //////// 4k Display //////////
  //////////////////////////////

  @media (min-width: 2500px) {
    .c-collectioncard {
      margin: 1.5vh 1vw;
      padding: 2vh 0.5vw;
    }
    .c-collectioncard__title {
      margin: 1vh 1vw;
      font-size: 1.125rem;
    }

    .c-collectioncard__blurb {
      margin: 1vh 1vw;
    }

    .c-collectioncard__read {
      margin: 0.25vh;
    }

    .c-collectioncard__button {
      margin: 0;
    }
    .c-simplebutton {
      margin: 0vh 1vw;
    }
  }
`;
export default CollectionsPage;

