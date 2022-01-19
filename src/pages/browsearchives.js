import React, { useEffect, useRef, useState } from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt"
import { IconContext } from "@react-icons/all-files/lib"
import { graphql, useStaticQuery } from "gatsby"
import { SearchCard } from "../components/searchcard"
import { SearchFilter } from "../components/searchfilter"
import { useFlexSeach } from "react-use-flexsearch"
import { SearchBar } from "../components/search"

const query = graphql`
  {
    allContentfulInterviewTranscripts {
      nodes {
        id
        discussionQuestions {
          raw
        }
        englishFullTranscript {
          raw
        }
        englishTranscriptSummary {
          raw
        }
        transcriptTags
        transcriptTitle
        oneLineTeaser {
          childMarkdownRemark {
            html
          }
        }
        interviewee
        interviewer
      }
    }
    localSearchArchives {
      index
      store
    }
  }
`

const filterPosts = (transcript, query) => {
  if (!query) {
    return transcript
  }

  return transcript.filter(post => {
    const postName = post.name.toLowerCase()
    return postName.includes(query)
  })
}

const BrowseArchives = () => {
  const data = useStaticQuery(query)
  const transcript = data.allContentfulInterviewTranscripts.nodes
  console.log(transcript)
  // const search = data.localSearchArchives

  /////////////////////////////////
  //////// Search Function ////////
  /////////////////////////////////

  const { search } = window.location
  const searchQuery = new URLSearchParams(search).get("s")
  console.log(searchQuery)

  // Hide Search Section
  // 1. We set the default as false, meaning we hide the search section
  const [show, setShow] = useState(false)

  // 2. Create a button handler for on click events
  const SubmitClick = e => {
    e.preventDefault()
    console.log(SearchRef.current)
    setShow(!show)
  }

  // 3. We create variables for useRef vals.
  const SearchRef = useRef(null)
  const MapRef = useRef(null)
  const SearchInput = useRef(null)

  // 4. Hide Search Results Section via CSS + useEffects
  //  useEffect(() => {
  //    // Set default values before Side Effect kicks in
  //    MapRef.current.style.display = `none`
  //
  //    if (show) {
  //      SearchRef.current.style.display = `flex`
  //      MapRef.current.style.display = `none`
  //      window.scrollTo({
  //        behavior: "smooth",
  //        top: 700,
  //      })
  //    } else {
  //      SearchRef.current.style.display = `none`
  //      MapRef.current.style.display = `flex`
  //      window.scrollTo({
  //        behavior: "smooth",
  //        top: 0,
  //      })
  //    }
  //  }, [show])

  /////////////////////////////
  //////// Search Query ///////
  /////////////////////////////

  //  const { index, store } = search
  //  console.log(store)

  /////////////////////////////
  //////// Render Comp. ///////
  /////////////////////////////

  return (
    <Layout>
      <BrowseArchivesWrapper>
        <section className="l-browsearchives">
          <h1 className="c-browsearchives__heading">Search The Archives</h1>
          <SearchBar />
          <div className="c-browsearchives__filtercontainer">
            <label
              htmlFor="c-browsearchives__filterbykeywords"
              className="c-browsearchives__keywordscheckbox"
            >
              <input type="checkbox" value="keywords" />
              Filter by keywords
            </label>
            <label
              htmlFor="c-browsearchives__filterbytags"
              className="c-browsearchives__tagscheckbox"
            >
              <input type="checkbox" value="tags" />
              Filter by tags
            </label>
          </div>
          <p className="c-browsearchives__content">
            Browse through our carefully curated oral archives. Working with
            on-the-ground experiences, we aim to provide a wholesome and
            comprehensive approach towards understanding the cold war from a
            grassroots perspective.
          </p>
        </section>
        <section className="l-browsearchivesmap bg--gray desktop" ref={MapRef}>
          <h1 className="c-browsearchivesmap__heading">Archives Map</h1>
        </section>
        <section className="l-browsearchives__search" ref={SearchRef}>
          <h1 className="c-browsearchives__searchresults">Search Results</h1>
          <SearchFilter />
          <section className="c-browsearchives__searchcontainer">
            {transcript.map(item => {
              const {
                id,
                transcriptTitle,
                transcriptTags,
                oneLineTeaser: {
                  childMarkdownRemark: { html },
                },
              } = item
              return (
                <SearchCard
                  id={id}
                  transcriptTitle={transcriptTitle}
                  transcriptTags={transcriptTags}
                  html={html}
                  key={id}
                />
              )
            })}
          </section>
        </section>
      </BrowseArchivesWrapper>
    </Layout>
  )
}

const BrowseArchivesWrapper = styled.main`
  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 4vh var(--padding-mobile) 6vh var(--padding-mobile);

    * {
      // apply text align center to all //
      text-align: center;
    }
  }

  .c-browsearchives__heading {
    text-align: center;
  }

  .c-browsearchives__filtercontainer {
    margin: 1.5vh 0vw 4vh 0vw;
    display: flex;
    justify-content: center;
  }

  .c-browsearchives__filtercontainer > label {
    font-family: "Ubuntu", Serif;
    font-size: 0.725rem;
    display: flex;
    align-items: center;
  }

  .c-browsearchives__filtercontainer > * {
    margin: 0vh 2vw;
  }

  .c-browsearchives__keywordscheckbox > input {
    margin: 0vh 1.8vw;
  }

  .c-browsearchives__tagscheckbox > input {
    margin: 0vh 1.8vw;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;

    // custom styling
    font: inherit;
    width: 1.2rem;
    height: 1rem;
    border-radius: 0.5rem;
    border: 2px solid var(--primary-clr-200);
    background-color: var(--secondary-clr-250);
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65rem;
    height: 0.6rem;
    border-radius: inherit;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1rem 1rem var(--primary-clr-100);
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  .desktop {
    display: none;
  }

  .c-browsearchives__searchresults {
    text-align: center;
  }

  .c-browsearchives__searchcontainer {
    background-color: var(--primary-clr-50);
    padding: 2vw 2vh;
    border-radius: calc(5vw + 4px);
  }

  ////////////////////////////
  ////////////////////////////
  ////////////////////////////
  ///////// Tablet ///////////
  ////////////////////////////
  ////////////////////////////

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    // Enable archives
    .desktop {
      display: grid;
    }

    section {
      padding: 4vh var(--padding-desktop) 6vh var(--padding-desktop);
    }

    .c-browsearchives__filtercontainer {
      margin-right: 12vw;
      margin-top: 0;
      justify-content: end;
    }

    .c-browsearchives__filtercontainer > * {
      margin: 0vh 0.8vw;
    }

    .c-browsearchives__keywordscheckbox > input {
      margin: 0vh 0.5vw;
    }

    .c-browsearchives__tagscheckbox > input {
      margin: 0vh 0.5vw;
    }
    .c-browsearchives__filtercontainer > label {
      font-size: 0.825rem;
    }

    .c-browsearchives__searchresults {
      margin: 3vh 0vw;
    }

    .c-browsearchives__searchcontainer {
      margin: 2vh 0vw;
    }

  }

  ////////////////////////////
  ////////////////////////////
  ////////////////////////////
  //////// Desktop ///////////
  ////////////////////////////
  ////////////////////////////

  @media (min-width: 1280px) {
    section {
      padding: 10vh var(--padding-desktop);
    }

    .c-browsearchives__heading {
      font-size: 3rem; // 64px
    }

    
    .c-browsearchives__filtercontainer > label {
      font-size: 0.925rem;
    }

    .c-browsearchives__content {
      margin: 0vh 12vw;
    }

    .c-browsearchives__searchresults {
      margin-bottom: 8vh;
  }

    .c-browsearchives__searchcontainer {
      margin: 0vh 1vw;
    }
`
export default BrowseArchives
