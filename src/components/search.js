import React from "react"
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt"
import { IconContext } from "@react-icons/all-files/lib"
import styled from "styled-components"

export const SearchBar = () => {
  return (
    <SeaerchBarWrapper>
      <form className="c-browsearchives__searchbar">
        <label htmlFor="c-browsearchives__searchinput">
          <span className="visually-hidden">
            Browse by keywords, topic themes or #tags
          </span>
        </label>
        <input
          type="text"
          className="c-browsearchives__searchinput"
          placeholder="Browse by keywords, topics themes or #tags"
          name="s"
        />
        <button className="c-browsearchives__searchbutton" type="submit">
          <IconContext.Provider
            value={{ className: "c-browsearchives__searchicon" }}
          >
            <BiSearchAlt />
          </IconContext.Provider>
        </button>
      </form>
    </SeaerchBarWrapper>
  )
}

const SeaerchBarWrapper = styled.div`
  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  .c-browsearchives__searchbar {
    display: flex;
    text-align: center;
    justify-content: center;
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
      font-size: 0.645rem;
      text-align: left;
      padding-left: 4vw;
      opacity: 40%;
    }
  }

  // disable input field border highlighting

  input[type='text']: focus {
    outline: none;
  }

  .c-browsearchives__searchbutton {
    background-color: var(--primary-clr-100);
    width: 25%;
    border: none;
    border-radius: 0 calc(4rem + 3px) calc(4rem + 3px) calc(4rem + 3px);
  }

  .c-browsearchives__searchicon {
    height: 1.7em;
    width: 1.7em;
  }

  @media (min-width: 992px) {
    .c-browsearchives__searchbar {
      margin-left: 12vw;
      margin-right: 12vw;
    }

    .c-browsearchives__searchinput {
      height: 4vh;

      ::placeholder {
        text-align: center;
        font-size: 1rem;
        padding-left: 20%;
      }
    }

    .c-browsearchives__searchbutton {
      width: 20%;
    }
    .c-browsearchives__searchicon {
      height: 2.2rem;
      width: 2.2rem;
    }
  }

  @media (min-width: 1280px) {
    .c-browsearchives__searchbar {
      margin-bottom: 3vh;
    }
    .c-browsearchives__searchinput {
      height: 8vh;

      ::placeholder {
        text-align: center;
        font-size: 1.125rem;
        padding-left: 20%;
      }
    }

    .c-browsearchives__searchbutton {
      width: 15%;
    }

    .c-browsearchives__searchicon {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`
