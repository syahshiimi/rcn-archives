import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt"
import { IconContext } from "@react-icons/all-files/lib"

const BrowseArchives = () => {
  return (
    <Layout>
      <BrowseArchivesWrapper>
        <section className="l-browsearchives">
          <h1 className="c-browsearchives__heading">Search The Archives</h1>
          <form className="c-browsearchives__searchbar">
            <input
              type="text"
              className="c-browsearchives__searchinput"
              placeholder="Browse by keywords, topics themes or #tags"
            />
            <button className="c-browsearchives__searchbutton" type="submit">
              <IconContext.Provider
                value={{ className: "c-browsearchives__searchicon" }}
              >
                <BiSearchAlt />
              </IconContext.Provider>
            </button>
          </form>
          <div className="c-browsearchives__filtercontainer">
            <label
              for="c-browsearchives__filterbykeywords"
              className="c-browsearchives__keywordscheckbox"
            >
              <input type="checkbox" value="keywords"  />
              Filter by keywords
            </label>
            <label
              for="c-browsearchives__filterbytags"
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
      </BrowseArchivesWrapper>
    </Layout>
  )
}

const BrowseArchivesWrapper = styled.main`
  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 4vh var(--padding-mobile) 16vh var(--padding-mobile);

    * {
      // apply text align center to all //
      text-align: center;
    }
  }

  .c-browsearchives__heading {
    text-align: center;
    font-size: 1.5rem;
  }

  .c-browsearchives__searchbar {
    justify-content: center;
    text-align: center;
    display: flex;
    margin: 2vh 0vw 1vh 0vw;
    border: 3px solid var(--primary-clr-200);
    border-radius: calc(4rem + 3px);
    background-color: var(--primary-clr-50);
  }

  .c-browsearchives__searchinput {
    width: 100%;
    height: 6vh;
    border: none;
    border-radius: calc(4rem + 3px) 0 0 calc(4rem + 3px);
    background-color: var(--primary-clr-50);

    ::placeholder {
      font-size: 0.625rem;
      text-align: left;
      padding-left: 8vw;
      opacity: 40%;
    }
  }

  .c-browsearchives__searchbutton {
    background-color: var(--primary-clr-100);
    width: 20%;
    border: none;
    border-radius: 0 calc(4rem + 3px) calc(4rem + 3px) calc(4rem + 3px);
  }

  .c-browsearchives__searchicon {
    height: 1.7em;
    width: 1.7em;
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
`
export default BrowseArchives
