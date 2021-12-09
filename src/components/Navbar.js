import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// Icons
import { BiSearchAlt } from "@react-icons/all-files/Bi/BiSearchAlt"
import { GiHamburgerMenu } from "@react-icons/all-files/Gi/GiHamburgerMenu"

// Variables
const title = "Reconceptualizing The Cold War"

const Navbar = () => {
  return (
    <NavStyle>
      <h1 className="nav__title">{title}</h1>
      <div className="nav__separator"></div>
      <div className="nav__dropdown">
        <div className="nav__header">
          <button className="nav__btn">
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="nav__links">
          <Link to="/" className="nav_link" activeClassName="active-link">
            Home
          </Link>
          <Link to="/about" className="nav_link" activeClassName="active-link">
            About
          </Link>
          <Link
            to="/browsearchives"
            className="nav_link"
            activeClassName="active-link"
          >
            Browse Archives
          </Link>
          <Link
            to="/glossary"
            className="nav_link"
            activeClassName="active-link"
          >
            Glossary
          </Link>
          <Link
            to="/workshops"
            className="nav_link"
            activeClassName="active-link"
          >
            Workshops
          </Link>
          <Link
            to="/contribute"
            className="nav_link"
            activeClassName="active-link"
          >
            Contribute
          </Link>
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
  margin: 1rem 3rem;

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
    width: 85%;
    border: 2px solid #f5cb5c;
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
    margin: 1rem 0rem;
  }

  .nav__btn {
  }

  .nav__links {
    /* display */
    height: 0;
    overflow: hidden;

    /* flex */
    display: flex;
    flex-direction: column;
    flex: 1;

    /* font styling */
    font-family: "Ubuntu", sans-serif;
    font-style: normal;
    list-style: none;

    /* styling */
    background-color: #f5cb5c;
    padding: 1rem 3rem;
  }

  .nav__links > a:link {
  margin: 0.2rem;
  text-decoration: none;
  }

  .show_links {
    /* display */
    height: 100%;

  }
  

  .active-link  {
    color: #000000;
    text-decoration: underline;
  }

  /* old */
  //background-color: #333533;
  //padding: 1rem 3rem 1rem 3rem;
  //color: #e8eddf;
  //grid-area: header;
  //display: flex;
  //height: 16vh;

  //.nav__title {
  //  font-size: 1.5rem;
  //  font-family: "Lora", serif;
  //  font-style: normal;
  //  font-weight: bold;
  //  white-space: pre-line;
  //  text-decoration: underline;
  //  align-self: center;
  //}

  //.nav__list {
  //  font-family: "Ubuntu", sans-serif;
  //  font-style: normal;
  //  font-size: 1.125rem;
  //  list-style: none;
  //  display: flex;
  //  align-items: center;
  //  margin-left: auto;
  //}

  //.nav__list a {
  //  text-decoration: none;
  //  color: #e8eddf;
  //  padding-right: 1rem;
  //}

  //.nav__search {
  //  display: inline-flex;
  //}

  //.nav__search input {
  //  width: 160px;
  //  height: 25px;
  //  border-radius: 25px 0 0 25px;
  //  border: none;
  //  outline: none;
  //  background: rgba(232, 237, 223, 0.5);
  //  align-items: center;
  //}

  //.nav__search button {
  //  height: 25px;
  //  background: #f5cb5c;
  //  border: none;
  //  border-radius: 0px 25px 25px 0;
  //  padding-right: 9px;
  //  padding-left: 9px;
  //  align-items: center;
  //}
`

export default Navbar
