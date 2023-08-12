import Accueil from "../components/accueil/Accueil"
import Apropos from "../components/apropos/Apropos"
import Contact from "../components/contact/contact"
import Projects from "../components/projects/Projects"

export default function Landing() {
  return (
    <>
      <Accueil />
      <Projects />
      <Apropos />
      <Contact />
    </>
  )
}
