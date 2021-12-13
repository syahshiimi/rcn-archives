import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Import Data
import { pageLinks } from "../data"

// Icons
import { BiSearchAlt } from "@react-icons/all-files/Bi/BiSearchAlt"
import { GiHamburgerMenu } from "@react-icons/all-files/Gi/GiHamburgerMenu"

// Variables
const title = "Reconceptualizing \n The Cold War"

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
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    if (show) {
      linksContainerRef.current.style.height = `${linksHeight}px`
      linksContainerRef.current.style.padding = `0.5rem 3rem 1rem 3rem`
    } else {
      linksContainerRef.current.style.height = "0px"
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
              <BiSearchAlt color="#000000" />
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5vh 10vw 3.5vh 10vw;

  .nav__title {
    font-size: 1.5rem;
    font-family: "Lora", serif;
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
    overflow: hidden;
    flex-direction: column;

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

  /* Desktop Layout */

  @media (min-width: 768px) {
    margin: 0;
    padding: 1vh 4.5vw;
    flex-direction: row;
    background-color: #333533;
    height: 15vh !important;
    font-size: 1.125rem;

    .nav__title {
      color: #e8eddf;
      white-space: pre-line;
      text-align: left;
      font-size: 1.5rem;
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

    .nav__links a {
      color: #e8eddf;
    }

    .active--link {
      color: #f5cb5c !important;
    }

    ul {
      display: inline-flex;
      align-items: center;
    }

    .nav__search {
      display: flex;
      margin: 0.875rem 0rem;
    }

    .button {
      background-color: #F5CB5C;
      display: flex;
      border: none;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 0px 25px 25px 0px;
    }

    input {
      opacity: 50%;
      text-align: center;
      background: rgba(232, 237, 223, 0.5);
      border: none;
      border-radius: 25px 0px 0px 25px;

    ::placeholder {
    color: #E8EDDF; 
    font-size: 0.8rem;
    }

    /* dropdown menu for mobile */
    .nav__btn {
      display: none;
    }

  }

  /* 4k UHD displasy */

  @media (min-width: 2560px) {
  font-size: 1.5rem;

  .nav__title {
  font-size: 2rem;
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

`

export default Navbar
