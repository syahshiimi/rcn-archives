import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const title = "Reconceptualizing \n The Cold War"

const Navbar = () => {
  return (
    <NavStyle>
      <img className="nav__image" src="" alt="" />
      <h1 className="nav__title">{title}</h1>
      <ul className="nav__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/browsearchives">Browse Archives</Link>
        </li>
        <li>
          <Link to="/glossary">Glossary</Link>
        </li>
        <li>
          <Link to="/workshops">Workshops</Link>
        </li>
        <li>
          <Link to="/contribute">Contribute</Link>
        </li>
        <form className="nav__search">
          <input
            type="text"
            className="nav__search input"
            placeholder="Search.."
          />
          <button className="nav__search button" type="button">
            -->
          </button>
        </form>
      </ul>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  background-color: #333533;
  padding: 1rem 3rem 1rem 3rem;
  color: #e8eddf;
  grid-area: header;
  display: flex;
  height: 15vh;

  .nav__title {
    font-size: 1.5rem;
    font-family: "Lora", serif;
    font-style: normal;
    font-weight: bold;
    white-space: pre-line;
    text-decoration: underline;
    align-self: center;
  }

  .nav__list {
    font-family: "Ubuntu", sans-serif;
    font-style: normal;
    font-size: 1.125rem;
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .nav__list a {
    text-decoration: none;
    color: #e8eddf;
    padding-right: 1rem;
  }

  .nav__search {
    display: inline-flex;
  }


  .nav__search input {
    width: 160px;
    height: 25px;
    border-radius: 25px 0 0 25px;
    border: none;
    outline: none;
    background: rgba(232, 237, 223, 0.5);
    color: #000000;
    align-items: center;
  }

  .nav__search button {
    height: 25px;
    background: #f5cb5c;
    border: none;
    border-radius: 0px 25px 25px 0;
    padding-right: 9px;
    padding-left: 9px;
    align-items: center;
  }
`

export default Navbar
