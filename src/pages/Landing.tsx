import { Outlet } from "react-router-dom"
import Accueil from "../components/accueil/Accueil"
import Apropos from "../components/apropos/Apropos"
import Contact from "../components/contact/contact"
import { styled } from "styled-components"

const H2 = styled.h2`
  padding: 0px 30px;
`

export default function Landing() {
  return (
    <>
      <Accueil />
      <H2 id="projects">Projets</H2>

      <Outlet />

      <Apropos />
      <Contact />
    </>
  )
}
