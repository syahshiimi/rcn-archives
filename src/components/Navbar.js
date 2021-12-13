import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Import Data
import { pageLinks } from "../data"

// Icons
import { BiSearchAlt } from "@react-icons/all-files/Bi/BiSearchAlt"
import { GiHamburgerMenu } from "@react-icons/all-files/Gi/GiHamburgerMenu"

// Variables
const title = "Reconceptualizing The Cold War"

const Navbar = () => {
  // hide list first by initial state of show = false
  const [show, setShow] = useState(false)
  // create button handler to change state
  const handleClick = () => {
    setShow(!show) // this returns opposite of the initial value which is false to true
  }
  //create CSS modiifer
  // const listState = show ? "nav__list show--container" : "nav__list"

  // useRef instead
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (show) {
      linksContainerRef.current.style.height = `${linksHeight}px`
      linksContainerRef.current.style.padding = `0.5rem 3rem 1rem 3rem`
    } else {
      linksContainerRef.current.style.height = '0px';
      linksContainerRef.current.style.padding = `0rem`
    }

     
  }, [show])

  return (
    <NavStyle>
      <h1 className="nav__title">{title}</h1>
      <div className="nav__separator"></div>
      <div className="nav__dropdown">
        <div className="nav__header">
          <button className="nav__btn" onClick={handleClick}>
            <GiHamburgerMenu color="#F5CB5C" />
          </button>
          <div className="nav__currentPage">
            <p>Home</p>
          </div>
          <button className="nav__btn btn--hidden">
            <GiHamburgerMenu color="#F5CB5C" />
          </button>
        </div>
        <div className="nav__list" ref={linksContainerRef}>
          <ul className="nav__links" ref={linksRef}>
            {pageLinks.map(link => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <Link activeClassName="active--link" to={url}>
                    {text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <form className="nav__search">
            <input
              type="text"
              className="nav__search input"
              placeholder="Search.."
            />
            <button className="nav__search button" type="button">
              <BiSearchAlt />
            </button>
          </form>
        </div>
      </div>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  grid-area: header;
  display: flex;
  max-height: 100%;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 2rem;

  .nav__title {
    font-size: 1.5rem;
    font-family: "Lora", serif;
    font-style: normal;
    font-weight: bold;
    white-space: pre-line;
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
    background-color: #333533;
    border-radius: 40px;
  }

  .nav__btn {
    display: flex;
    align-items: center;
    border: none;
    background-color: #333533;
  }

  .btn--hidden {
    opacity: 0;
  }

  .nav__currentPage {
    color: #e8eddf;
    width: 100%;
  }

  .nav__list {
    /* flex */
    display: flex;
    height: 0;
    overflow: hidden;
    flex-direction: column;
    position: static;

    /* font styling */
    font-family: "Ubuntu", sans-serif;
    font-style: normal;

    background-color: #f5cb5c;
    border-radius: 0 0 28px 28px;

    /* Card DS */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
    color: #000000;
  }

  .active--link {
    text-decoration: underline !important;
  }

  .nav__search {
    display: none;
  }

  @media (min-width: 768px) {
    .nav__search {
      display: flex;
      place-self: center;
    }
  }
`

export default Navbar
