import React from "react"
import styled from "styled-components"

// Import Main Components
import Navbar from "./Navbar"
import Footer from "./Footer"

// Import Global Items
import 'normalize.css'
import "../assets/main.css"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <ChildWrapper>{children}</ChildWrapper>
      <Footer />
    </LayoutWrapper>
  )
}
const LayoutWrapper = styled.section`
  height: 100vh;
  max-width: 100vw;
  background-color: #cfdbd5;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "body"
    "footer";
`

const ChildWrapper = styled.section`
  grid-area: body;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4vh 10vw;

  @media (min-width: 768px) {
    padding: 10vh 4.5vw 21vh 4.5vw;

  }

`

export default Layout
