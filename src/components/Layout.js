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
  display: flex;
  --padding-global-child: 4vh var(--padding-mobile);

  @media (min-width: 992px) {
    --padding-global-child: 5vh var(--padding-desktop) 10.5vh
      var(--padding-desktop);
  }
  @media (min-width: 1280px) {
    --padding-global-child: 10vh var(--padding-desktop) 21vh
      var(--padding-desktop);
  }
`

export default Layout
