import Accueil from "../Components/accueil/Accueil"
import Apropos from "../Components/apropos/Apropos"
import Contact from "../Components/contact/contact"
import Projects from "../Components/projects/Projects"

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
