import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// Import Data
import { pageLinks } from "../data";

// Icons
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

// Variables
const title = "Reconceptualizing \n The Cold War";

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
      <h1 className="nav__title">{title}</h1>
      <div className="nav__separator"></div>
      <div className="nav__dropdown">
        <div className="nav__header">
          <button className="nav__btn" onClick={handleClick}>
            <GiHamburgerMenu color="var(--primary-clr-100)" />
          </button>
          <div className="nav__currentPage">
            <p>Home</p>
          </div>
          <button className="nav__btn btn--hidden">
            <GiHamburgerMenu color="var(--primary-clr-100)" />
          </button>
        </div>
        <div className="nav__list" ref={linksContainerRef}>
          <ul className="nav__links" ref={linksRef}>
            {pageLinks.map((link) => {
              const { pageID, url, text, subMenu } = link;
              return (
                <li key={pageID} className={text}>
                  <Link
                    activeClassName="active--link"
                    to={url}
                    className={text}
                  >
                    {text}
                  </Link>
                  <ul className="c-nav__dropdown">
                    {" "}
                    {subMenu != undefined
                      ? subMenu.map((items) => {
                          const { pageID, url, text } = items;
                          return (
                            <li key={url + pageID}>
                              <Link
                                activeClassName="active--link"
                                to={url}
                                className="c-nav__sublink"
                              >
                                {text}
                              </Link>
                            </li>
                          );
                        })
                      : null}
                  </ul>
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
  padding: 5vh var(--padding-mobile) 3.5vh var(--padding-mobile);

  .nav__title {
    font-size: 1rem;
    font-family: "Lora", sans-serif;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    text-decoration: underline;
    align-self: center;
  }

  .nav__separator {
    width: 100%;
    border: 2px solid #f5cb5c;
    border-radius: 2px;
    flex: 1;
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

  .Browse.Archives > a {
    display: none;
    visibility: none;
  }

  .Browse.Archives > li {
    margin: 0.875rem;
  }

  ///////////////////////////////
  /////// TABLET ////////////////
  ///////////////////////////////

  @media (min-width: 992px) {
    margin: 0;
    padding: 0vh var(--padding-tablet);
    flex-direction: row;
    background-color: var(--primary-clr-150);
    height: 15vh !important;
    font-size: 1.1rem;

    .nav__title {
      color: var(--primary-clr-50);
      white-space: pre-line;
      text-align: left;
      font-size: 1.5rem;
      padding: 0;
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
      display: inline-flex;
    }
    .nav__links a {
      color: var(--primary-clr-50);
    }

    .nav__links > li {
      margin: 0.8vw;
      display: block;
    }

    .active--link {
      color: var(--primary-clr-100) !important;
    }

    ul {
      display: inline-flex;
      align-items: center;
    }

    .nav__search {
      display: none;
    }

    .nav__links > li {
      transition-duration: 0.5s;
    }

    .Browse.Archives > a {
      visibility: visible;
      display: block;
    }

    .c-nav__dropdown {
      visibility: hidden;
      opacity: 0;
      transition: all 0.5 ease;
      display: none;
    }

    .c-nav__dropdown > li {
      clear: both;
    }

    // Hide Browse Archives anchor tag on hover
    ul li:hover > a.Browse.Archives {
      margin-top: 60px;
    }

    // We reveal the dropdown container .c-nav__dropdown & the nested
    // ul hover remains visible as long as hover = true
    ul li:hover > .c-nav__dropdown,
    .c-nav__dropdown > ul:hover {
      visibility: visible;
      transition: all 0.8s ease-in-out;
      opacity: 1;
      display: block;
    }
  }

  //////////////////////////////////
  ///////* Desktop Display *////////
  //////////////////////////////////
  @media (min-width: 1280px) {
    font-size: 1.125rem;
    padding: 3vh 4.5vw;

    .nav__title {
      font-size: 1.5rem;
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
    font-size: 2rem;

    .nav__title {
      font-size: 2.8rem;
    }

    .nav__links a {
      margin: 1vh;
    }

    input {
      ::placeholder {
        font-size: 1rem;
      }
    }
  }
`;

export default Navbar;
