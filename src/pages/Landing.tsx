import { Outlet } from "react-router-dom"
import Accueil from "../components/accueil/Accueil"
import Apropos from "../components/apropos/Apropos"
import Contact from "../components/contact/contact"

export default function Landing() {
  return (
    <>
      <Accueil />
      <h2 id="projects">Projets</h2>

      <Outlet />
      <Apropos />
      <Contact />
    </>
  )
}
