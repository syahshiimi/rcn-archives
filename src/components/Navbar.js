// Icons
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Import Icons
import DarkIcon from "../../src/assets/alt.svg";

// Import Components
import { CurrentPage } from "../components/currentnavtitle";
import { MenuItems } from "../components/menuitem";

// Import Data
import { pageLinks } from "../data";

// Variables
const title = "Reconceptualizing the Cold War";

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

  return (
    <NavStyle>
      <div className="c-nav__container">
        <DarkIcon className="c-nav__icon" />
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
          <button className="nav-btn__hamburger" onClick={handleClick}>
            <GiHamburgerMenu color="var(--primary-clr-100)" />
          </button>
          <div className="nav__currentPage">
            <p>
              <CurrentPage />
            </p>
          </div>
          <button className="nav-btn__hamburger  btn--hidden">
            <GiHamburgerMenu color="var(--primary-clr-100)" />
          </button>
        </div>
        <div className="nav__list" ref={linksContainerRef}>
          <ul className="nav__links" ref={linksRef}>
            {pageLinks.map((link, index) => {
              return <MenuItems link={link} key={index} />;
            })}
          </ul>
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
  }

  .c-nav__icon {
    display: flex;
    justify-content: center;
    align-self: center;
    height: 45px;
    width: 45px;
    margin-bottom: 1vh;
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

  .nav-btn__hamburger {
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

  /* Remove styling for dropdown menu */
  .c-nav__dropdownmenu {
    list-style: none;
  }

  /* hide browse archive button */
  .c-nav__dropdownbutton {
    display: none;
    visibility: hidden;
  }

  /* hide Search Map as it is not available for mobile */
  .c-nav.Search.Map {
    display: none;
    visibility: none;
  }

  ///////////////////////////////
  /////// TABLET ////////////////
  ///////////////////////////////

  @media (min-width: 992px) {
    margin: 0;
    padding: 3vh var(--padding-tablet);
    flex-direction: row;
    background-color: var(--primary-clr-150);

    .c-nav__container {
      column-gap: 15px;
      margin-bottom: 0;

      flex-direction: row;

      .c-nav__icon {
        height: 55px;
        width: 55px;
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
      font-size: 1.1rem;
      margin: 0;
    }

    .nav__subtitle {
      font-size: 0.875rem !important;
      color: var(--primary-clr-50);
      font-weight: 500;
      text-align: left;
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
      justify-content: flex-end;
      align-self: center;
    }

    .nav__links {
      display: flex;
      align-items: center;
      column-gap: 0.85vw;
    }
    .nav__links a {
      color: var(--primary-clr-50);
      font-size: 0.95rem;
    }

    .nav__links li {
      margin: 0;
      display: block;
    }

    .active--link {
      color: var(--primary-clr-100) !important;
    }

    .nav__search {
      display: none;
      visibility: none;
    }

    .c-nav__Browse.Archives {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* re-enable dropdown button on tablet onwards */
    .c-nav__dropdownbutton {
      display: flex;
      justify-content: flex-end;
      visibility: visible;
      background-color: transparent;
      border: none;
      font-size: 0.95rem;
      color: var(--primary-clr-50);
      margin: 0 !important;
    }
    .c-nav__dropdowntext {
      color: inherit;
    }

    /* toggle class */
    .c-nav__dropdownmenu {
      visibility: none;
      display: none;
    }

    /* toggle class */
    .c-nav__dropdownmenu-active {
      display: flex;
      position: absolute;
      visibility: visible;
      margin-top: 1.5rem;
      margin-left: 1.2rem;
      row-gap: 0.3rem;
      flex-direction: column;
    }

    .c-nav.Search.Archive {
      display: flex;
      visibility: visible;
      justify-content: flex-end;
      font-size: 0.85rem;
    }
    .c-nav.Search.Map {
      display: flex;
      justify-content: flex-end;
      font-size: 0.85rem;
      visibility: visible;
    }
  }

  //////////////////////////////////
  ///////* Desktop Display *////////
  //////////////////////////////////
  @media (min-width: 1280px) {
    padding: 4.5vh 4.5vw;
    /* height: 13vh !important; */

    .c-nav__container {
      svg {
        height: 72px;
        width: 72px;
      }
    }
    .nav__title {
      font-size: 1.3rem;
    }

    .nav__subtitle {
      font-size: 1.05rem !important;
    }

    .c-nav.Search.Map {
      display: flex;
      visibility: visible;
    }

    .c-nav.Search.Archive {
      display: flex;
      visibility: visible;
    }

    .c-nav.Search.Archive {
      font-size: 0.85rem;
    }
    .c-nav.Search.Map {
      display: flex;
      justify-content: flex-end;
      font-size: 0.85rem;
      visibility: visible;
    }
  }

  /////////////////////////
  /* 4k UHD display */
  //////////////////////
  @media (min-width: 2560px) {
    padding: 3.5vh 21vw;
    font-size: 2rem;

    .nav__title {
      font-size: 1.5rem;
    }
    .nav__subtitle {
      font-size: 1.2rem !important;
    }
  }
`;

export default Navbar;
