import React from "react"
import styled from "styled-components"

// Import Main Components
import Navbar from "./Navbar"
import Footer from "./Footer"

// Import Global Items
import "normalize.css"
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
`

export default Layout
