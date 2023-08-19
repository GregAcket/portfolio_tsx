import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import Pantherecontact from "./PanthereContact"
import SvgComponent from "./PanthereLogoSVG"
import PanthereMain from "./PanthereMain"
import { useState } from "react"
import "./panthere.css"

function Panthere() {
  // STATE

  const [isHomepage, setIsHomePage] = useState(true)

  const [isNavShown, setNav] = useState(false)

  let goToContactPage = () => {
    setIsHomePage(false)
    setTimeout(() => {
      scroll()
    }, 100)
  }

  let goToHomepage = () => {
    setIsHomePage(true)
  }

  let showOrHideNav = () => {
    setNav(!isNavShown)
  }

  let showNav = isNavShown ? "panthere_ul" : "panthere_ul hide_ul"

  const target = document.querySelector(".panthere_header")
  const scroll = () => {
    target?.scrollIntoView()
  }

  return (
    <>
      <header className="panthere_header">
        <nav className="panthere_nav">
          <div className="panthere_nav_div">
            <Link
              to={"/project/la_panthere"}
              className="panthere_a"
              onClick={goToHomepage}
            >
              <SvgComponent />
            </Link>
            <button
              id="nav-toggle"
              className="ui-navbar-toggle navbar-toggle"
              onClick={showOrHideNav}
            >
              <FontAwesomeIcon className="panthere_burger" icon={faBars} />
            </button>
          </div>

          <ul className={showNav}>
            <li className="panthere_li">
              <Link
                to={"/project/la_panthere"}
                className="panthere_a"
                aria-label="Aller à la page d'accueil"
                onClick={goToHomepage}
              >
                Accueil
              </Link>
            </li>
            <li className="panthere_li">
              <Link
                to={"/project/la_panthere"}
                className="panthere_a"
                aria-label="Aller à la page contact"
                onClick={goToContactPage}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="panthere_main">
        {isHomepage ? (
          <PanthereMain goToContactPage={goToContactPage} />
        ) : (
          <Pantherecontact />
        )}
      </main>

      <footer className="panthere_footer">
        <h2 className="panthere_footer_h2">
          Prêt pour redonner vie à votre projet ? Contactez notre équipe !
        </h2>

        <Link
          to="#"
          aria-label="Lien vers la page contact"
          className="panthere_button_contact"
          onClick={goToContactPage}
        >
          Contact
        </Link>

        <address>
          <p className="panthere_address">
            Agence La Panthère <br />2 place Sathonay 69001 Lyon <br />
            Ouvert de 9h à 18h, du lundi au vendredi
            <br />
          </p>
        </address>
        <div className="panthere_footer_socialLink">
          <a
            className="panthere_footer_social"
            href="#"
            aria-label="lien vers notre Twitter"
          >
            <span className="fa fa-twitter ltc-atomic-tangerine icon-md"></span>
          </a>
          <a
            className="panthere_footer_social"
            href="#"
            aria-label="lien vers notre Facebook"
          >
            <span className="fa fa-facebook ltc-atomic-tangerine icon-md"></span>
          </a>
          <a
            className="panthere_footer_social"
            href="#"
            aria-label="lien vers notre Instagram"
          >
            <span className="fa fa-instagram ltc-atomic-tangerine icon-md"></span>
          </a>
        </div>
      </footer>
    </>
  )
}

export default Panthere
