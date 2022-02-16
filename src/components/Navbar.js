// Icons
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { Link } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Icon from "../../src/assets/icon.svg";

// Import Data
import { pageLinks } from "../data";

// Variables
const title = "Reconceptualizing the Cold War";

const isBrowswer = typeof window !== "undefined";
const Navbar = () => {
  // hide list first by initial state of show = false
  const [show, setShow] = useState(false);
  // create button handler to change state
  const handleClick = () => {
    setShow(!show); // this returns opposite of the initial value which is false to true
  };
  // useRef instead
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (show) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
      linksContainerRef.current.style.padding = `0.5rem 3rem 1rem 3rem`;
    } else {
      linksContainerRef.current.style.height = "0px";
      linksContainerRef.current.style.padding = `0rem`;
    }
  }, [show]);

  let CurrentNavTitle;

  const CurrentPage = () => {
    if (isBrowswer) {
      if (location.pathname === "/") {
        CurrentNavTitle = "Home";
        return CurrentNavTitle;
      } else if (location.pathname === "/about") {
        CurrentNavTitle = "About";
        return CurrentNavTitle;
      } else if (location.pathname === "/browsearchives") {
        CurrentNavTitle = "Browse Archives";
        return CurrentNavTitle;
      } else if (location.pathname === "/glossary") {
        CurrentNavTitle = "Glossary";
        return CurrentNavTitle;
      } else if (location.pathname === "/eventlist") {
        CurrentNavTitle = "Workshops";
        return CurrentNavTitle;
      } else if (location.pathname === "/contribute") {
        CurrentNavTitle = "Contact Us";
        return CurrentNavTitle;
      } else {
        CurrentNavTitle = "RCW-Asia";
      }
    } else {
    }
  };
  CurrentPage();

  return (
    <NavStyle>
      <div className="c-nav__container">
        <Icon />
        <hr className="c-nav__split"></hr>
        <section className="c-nav__titleandsub">
          {" "}
          <h1 className="nav__title">{title}</h1>
          <h3 className="nav__subtitle">On-the-ground Experiences In Asia</h3>
        </section>
      </div>
      <div className="nav__separator"></div>
      <div className="nav__dropdown">
        <div className="nav__header">
          <button className="nav__btn" onClick={handleClick}>
            <GiHamburgerMenu color="var(--primary-clr-100)" />
          </button>
          <div className="nav__currentPage">
            <p>{CurrentNavTitle}</p>
          </div>
          <button className="nav__btn btn--hidden">
            <GiHamburgerMenu color="var(--primary-clr-100)" />
          </button>
        </div>
        <div className="nav__list" ref={linksContainerRef}>
          <ul className="nav__links" ref={linksRef}>
            {pageLinks.map((link) => {
              const { pageID, url, text } = link;
              return (
                <li key={pageID} className={text}>
                  <Link
                    activeClassName="active--link"
                    to={url}
                    className={text}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <form className="nav__search">
            <input
              type="text"
              className="nav__search input"
              placeholder="Search.."
            />
            <button className="nav__search button" type="button">
              <BiSearchAlt color="var(--primary-clr-200)" />
            </button>
          </form>
        </div>
      </div>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  grid-area: header;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3vh var(--padding-mobile) 3.5vh var(--padding-mobile);

  .nav__title {
    font-size: 1.125rem;
    font-family: "Lora", sans-serif;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    align-self: center;
  }

  .nav__separator {
    width: 100%;
    border: 2px solid #f5cb5c;
    border-radius: 2px;
    flex: 1;
  }

  .c-nav__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2vh;
    svg {
      height: 45px;
      width: 45px;
      margin-bottom: 1vh;
    }
  }
  .nav__subtitle {
    font-size: 0.85rem;
    font-family: "Lora";
    font-weight: 800;
    font-style: normal;
    color: var(--primary-clr-150);
    opacity: 0.75;
  }

  .c-nav__split {
    display: none;
    visibility: none;
  }

  .nav__dropdown {
    /* flex */
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    flex: 1 1 0;

    /* styling */
    width: 100%;
  }

  .nav__header {
    margin: 1rem 0rem 0.5rem 0rem;
    padding: 0.7rem 2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    /* styling */
    background-color: var(--primary-clr-150);
    border-radius: 40px;
  }

  .nav__btn {
    display: flex;
    align-items: center;
    border: none;
    background-color: var(--primary-clr-150);
  }

  .btn--hidden {
    opacity: 0;
  }

  .nav__currentPage {
    color: var(--primary-clr-50);
    width: 100%;

    p {
      color: var(--primary-clr-50);
    }
  }

  .nav__list {
    /* flex */
    display: flex;
    overflow: hidden;
    flex-direction: column;

    /* font styling */
    font-family: "Ubuntu", sans-serif;
    font-style: normal;

    background-color: var(--primary-clr-100);
    border-radius: 0 0 28px 28px;

    /* Card DS */
    box-shadow: 0rem 0.2rem 0.2rem rgba(0, 0, 0, 0.25);

    /* transititon */
    transition: var(--transition);
  }

  .nav__links {
    list-style: none;
  }

  .nav__links li {
    margin: 0.875rem;
  }

  .nav__links a {
    text-decoration: none;
    color: var(--primary-clr-150);
  }

  .active--link {
    text-decoration: underline !important;
  }

  .nav__search {
    display: none;
  }

  .c-nav__dropdown > li {
    list-style: none;
  }

  ///////////////////////////////
  /////// TABLET ////////////////
  ///////////////////////////////

  @media (min-width: 992px) {
    margin: 0;
    padding: 0vh var(--padding-tablet);
    flex-direction: row;
    background-color: var(--primary-clr-150);
    height: 12vh !important;

    .c-nav__container {
      column-gap: 15px;
      margin-bottom: 0;

      flex-direction: row;
      svg {
        height: 60px;
        width: 60px;
        margin: 0;
        padding: 0;
      }
    }

    .c-nav__split {
      border: 1px solid var(--primary-clr-100);
      display: flex;
      height: 50px;
    }

    .c-nav__titleandsub {
      display: flex;
      flex-direction: column;
      /* margin-left: 6px; */
      /* row-gap: 0.45vh; */
      row-gap: 3px;
    }
    .nav__title {
      color: var(--primary-clr-50);
      white-space: pre-line;
      text-align: left;
      font-size: 1.2rem;
      margin: 0;
    }

    .nav__subtitle {
      font-size: 0.975rem !important;
      color: var(--primary-clr-50);
    }

    .nav__separator {
      display: none;
    }

    .nav__dropdown {
      flex-direction: row;
      height: 100%;
    }

    .nav__header {
      display: none;
    }

    .nav__list {
      font-size: 1rem;
      background-color: transparent;
      box-shadow: none;
      height: auto !important;
      overflow: visible;
      flex-direction: row !important;
      flex: 1 1 0;
      margin-left: auto;
      justify-content: right;
      align-self: center;
    }

    .nav__links {
      display: flex;
      align-items: center;
      column-gap: 0.85vw;
    }
    .nav__links a {
      color: var(--primary-clr-50);
    }

    .nav__links > li {
      margin: 0vw;
      display: block;
    }

    .active--link {
      color: var(--primary-clr-100) !important;
    }

    .nav__search {
      display: none;
      visibility: none;
    }
  }

  //////////////////////////////////
  ///////* Desktop Display *////////
  //////////////////////////////////
  @media (min-width: 1280px) {
    font-size: 1.125rem;
    padding: 4vh 4.5vw;
    /* height: 13vh !important; */

    .c-nav__container {
      svg {
        height: 72px;
        width: 72px;
      }
    }
    .nav__title {
      font-size: 1.5rem;
    }

    .nav__subtitle {
      font-size: 1.225rem !important;
    }

    .nav__links {
      font-size: 1.15rem;
    }

    .nav__search {
      display: none;
      margin: 0.875rem 0rem;

      .button {
        background-color: var(--primary-clr-100);
        display: block;
        border: none;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        height: 50px;
        border-radius: 0px 25px 25px 0px;
      }
      input {
        opacity: 50%;
        text-align: center;
        background: rgba(232, 237, 223, 0.5);
        border: none;
        border-radius: 25px 0px 0px 25px;
        ::placeholder {
          color: var(--primary-clr-50);
          font-size: 0.8rem;
        }
        /* dropdown menu for mobile */
        .nav__btn {
          display: none;
        }
      }
      input {
        ::placeholder {
          font-size: 0.95rem;
        }
      }
    }
  }

  /* 4k UHD display */
  @media (min-width: 2560px) {
    padding: 1vh 21vw;
    font-size: 2rem;

    .nav__title {
      font-size: 1.75rem;
    }
    a {
      font-size: 1.25rem;
    }
  }
`;

export default Navbar;
