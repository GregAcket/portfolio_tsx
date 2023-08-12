import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faStar,
  faLocationDot,
  faMoneyBill1Wave,
  faChildReaching,
  faHeart,
  faDog,
  faInfo,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"

import Logo from "../../assets/booki/icons/logoBooki.webp"

import Bleu from "../../assets/booki/pics/bleuetblanc.jpg"
import Calanques from "../../assets/booki/pics/calanques.jpg"
import Amina from "../../assets/booki/pics/chezamina.jpg"
import Coeur from "../../assets/booki/pics/coeurdeleau.jpg"
import Frioul from "../../assets/booki/pics/frioul.jpg"
import Garde from "../../assets/booki/pics/garde.jpg"
import Cannebiere from "../../assets/booki/pics/hotelcannebiere.jpg"
import Mer from "../../assets/booki/pics/hotellamer.jpg"
import Mouettes from "../../assets/booki/pics/hotellesmouettes.jpg"
import Hotelport from "../../assets/booki/pics/hotelport.jpg"
import Panier from "../../assets/booki/pics/lepanier.jpg"
import Longchamp from "../../assets/booki/pics/longchamp.jpg"
import Pomegues from "../../assets/booki/pics/pomegues.jpg"
import Port from "../../assets/booki/pics/port.jpg"
import Soleil from "../../assets/booki/pics/soleildumatin.jpg"

import "./bookisite.css"

function Bookisite() {
  return (
    <>
      <header className="booki_header">
        <Link to={"/booki"}>
          <img className="booki_image" src={Logo} alt="Logo Booki" />
        </Link>
        <nav className="booki_nav">
          <ul className="booki_ul">
            <li>
              <a className="booki_a" href="#hebergement">
                Hébergements
              </a>
            </li>
            <li>
              <a className="booki_a" href="#activite">
                Activités
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="booki_main">
        <section className="booki_top">
          <h1 className="booki_h1">
            Trouvez votre hébergement pour des vacances de rêve
          </h1>

          <p className="booki_p">En plein centre ville ou en pleine nature</p>

          <form className="booki_form">
            <button>
              <FontAwesomeIcon
                className="booki_fa-solid"
                icon={faLocationDot}
              />
            </button>
            <input
              className="booki_input"
              type="text"
              placeholder="Marseille, France"
              id="ville"
              name="ville"
            />
            <button className="research_button">
              <FontAwesomeIcon
                className="booki_fa-solid"
                icon={faMagnifyingGlass}
              />
              <span className="bolder">Rechercher</span>
            </button>
          </form>

          <div id="filtres_main_wrapper">
            <span className="bold">Filtres</span>

            <div className="filtre">
              <div className="contours">
                <FontAwesomeIcon
                  className="booki_fa-solid"
                  icon={faMoneyBill1Wave}
                />
                <span className="bold">Economiques</span>
              </div>
            </div>

            <div className="filtre">
              <div className="contours">
                <FontAwesomeIcon
                  className="booki_fa-solid"
                  icon={faChildReaching}
                />
                <span className="bold">Familial</span>
              </div>
            </div>

            <div className="filtre">
              <div className="contours">
                <FontAwesomeIcon className="booki_fa-solid" icon={faHeart} />
                <span className="bold">Romantique</span>
              </div>
            </div>

            <div className="filtre">
              <div className="contours">
                <FontAwesomeIcon className="booki_fa-solid " icon={faDog} />
                <span className="bold">Animaux autorisés</span>
              </div>
            </div>
          </div>
          <div className="booki_info">
            <FontAwesomeIcon
              className="booki_fa-solid booki_fa-info"
              icon={faInfo}
            />
            <p>Plus de 500 logements sont disponibles dans cette ville</p>
          </div>
        </section>

        <section className="hbg_main_wrapper">
          <div className="hbg_main">
            <h2 className="booki_h2" id="hebergement">
              Hébergements à Marseille
            </h2>

            <div className="hbg_main_card">
              <Link className="booki_a" to="#">
                <article className="hbg_cards">
                  <img
                    className="hbg_img"
                    src={Cannebiere}
                    alt="la cannebiere"
                  />

                  <div className="footer_card">
                    <div className="booki_card_text">
                      <span className="bolder">Auberge La Cannebière</span>

                      <p>
                        Nuit à partir de <span className="bolder">25€</span>
                      </p>
                    </div>

                    <div className="card_star">
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="gris">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>

              <Link className="booki_a" to="#">
                <article className="hbg_cards">
                  <img className="hbg_img" src={Hotelport} alt="port" />

                  <div className="footer_card">
                    <div className="booki_card_text">
                      <span className="bolder">Hôtel du port</span>

                      <p>
                        Nuit à partir de <span className="bolder">52€</span>
                      </p>
                    </div>

                    <div className="card_star">
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>

              <Link className="booki_a" to="#">
                <article className="hbg_cards">
                  <img className="hbg_img" src={Mouettes} alt="les mouettes" />

                  <div className="footer_card">
                    <div className="booki_card_text">
                      <span className="bolder">Hôtel Les mouettes</span>

                      <p>
                        Nuit à partir de <span className="bolder">76€</span>
                      </p>
                    </div>

                    <div className="card_star">
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="gris">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>

              <Link className="booki_a" to="#">
                <article className="hbg_cards">
                  <img className="hbg_img" src={Mer} alt="la mer" />

                  <div className="footer_card">
                    <div className="booki_card_text">
                      <span className="bolder">Hôtel de la mer</span>

                      <p>
                        Nuit à partir de <span className="bolder">45€</span>
                      </p>
                    </div>

                    <div className="card_star">
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="gris">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="gris">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>

              <Link className="booki_a" to="#">
                <article className="hbg_cards">
                  <img className="hbg_img" src={Panier} alt="le panier" />

                  <div className="footer_card">
                    <div className="booki_card_text">
                      <span className="bolder">Auberge Le Panier</span>

                      <p>
                        Nuit à partir de <span className="bolder">23€</span>
                      </p>
                    </div>

                    <div className="card_star">
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="gris">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>

              <Link className="booki_a" to="#">
                <article className="hbg_cards">
                  <img className="hbg_img" src={Amina} alt="Chez Amina" />

                  <div className="footer_card">
                    <div className="booki_card_text">
                      <span className="bolder">Hôtel Chez Amina</span>

                      <p>
                        Nuit à partir de <span className="bolder">25€</span>
                      </p>
                    </div>

                    <div className="card_star">
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="bleue">
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>

            <Link className="booki_a" to="#">
              <span className="bolder">Afficher Plus</span>
            </Link>
          </div>

          <aside className="booki_aside">
            <span className="bolder">
              Les plus populaires
              <FontAwesomeIcon icon={faStar} />
            </span>

            <Link className="booki_a" to="#">
              <article className="aside_card">
                <img src={Soleil} alt="Hôtel le soleil du matin" />

                <div className="footer_card">
                  <div className="booki_card_text">
                    <span className="bolder">Hôtel le soleil du matin</span>

                    <p>
                      Nuit à partir de <span className="bolder">128€</span>
                    </p>
                  </div>

                  <div className="card_star">
                    <div className="bleue">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="bleue">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="bleue">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="bleue">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="bleue">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                </div>
              </article>
            </Link>

            <Link className="booki_a" to="#">
              <article className="aside_card">
                <img src={Coeur} alt="Chambre d'Hôtes" />

                <div className="footer_card">
                  <div className="booki_card_text">
                    <span className="bolder">
                      Au coeur de l'eau Chambres d'hôtes
                    </span>

                    <p>
                      Nuit à partir de <span className="bolder">71€</span>
                    </p>
                  </div>

                  <div className="card_star">
                    <div className="bleue">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="bleue">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="bleue">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="bleue">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="gris">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                </div>
              </article>
            </Link>

            <Link className="booki_a" to="#">
              <article className="aside_card">
                <img src={Bleu} alt="Hôtel Tout bleu et Blanc" />

                <div className="footer_card">
                  <div className="booki_card_text">
                    <span className="bolder">Hôtel Tout bleu et Blanc</span>

                    <p>
                      Nuit à partir de <span className="bolder">68€</span>
                    </p>
                  </div>

                  <div className="card_star">
                    <div className="bleue">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="bleue">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="bleue">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="bleue">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="gris">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </aside>
        </section>

        <section className="activite_main_wrapper">
          <h2 className="bolder booki_h2" id="activite">
            Activités à Marseille
          </h2>

          <div className="activites_card">
            <Link className="vieux booki_a" to="#">
              <article className="activite_article">
                <img className="activite_img" src={Port} alt="Vieux port" />

                <p className="booki_p">
                  <span className="bolder">Vieux Port</span>
                </p>
              </article>
            </Link>
          </div>

          <div className="activites_card">
            <Link className="fort booki_a" to="#">
              <article className="activite_article">
                <img
                  className="activite_img"
                  src={Pomegues}
                  alt="Fort de pomègues"
                />

                <p className="booki_p">
                  <span className="bolder">Fort de Pomègues</span>
                </p>
              </article>
            </Link>

            <Link className="ile booki_a" to="#">
              <article className="activite_article">
                <img
                  className="activite_img"
                  src={Frioul}
                  alt="Iles de frioul"
                />

                <p className="booki_p">
                  <span className="bolder">Îles du Frioul</span>
                </p>
              </article>
            </Link>
          </div>

          <div className="activites_card">
            <Link className="calanques booki_a" to="#">
              <article className="activite_article">
                <img className="activite_img" src={Calanques} alt="Calanques" />

                <p className="booki_p">
                  <span className="bolder">Parc National des Calanques</span>
                </p>
              </article>
            </Link>
          </div>

          <div className="activites_card">
            <Link className="garde booki_a" to="#">
              <article className="activite_article">
                <img
                  className="activite_img"
                  src={Garde}
                  alt="Notre dame de la garde"
                />

                <p className="booki_p">
                  <span className="bolder">Notre-Dame-de-la-Garde</span>
                </p>
              </article>
            </Link>

            <Link className="longchamp booki_a" to="#">
              <article className="activite_article">
                <img
                  className="activite_img"
                  src={Longchamp}
                  alt="Parc Longchamp"
                />

                <p className="booki_p">
                  <span className="bolder">Parc Longchamp</span>
                </p>
              </article>
            </Link>
          </div>
        </section>
      </main>

      <footer className="booki_footer">
        <div className="footer_column">
          <ul className="booki_footer_ul">
            <li>
              <span className="bolder">A propos</span>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Fonctionnement du site
              </Link>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Conditions générales de vente
              </Link>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Données et confidentialité
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer_column">
          <ul className="booki_footer_ul">
            <li>
              <span className="bolder">Nos hébergements</span>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Charte qualité
              </Link>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Soumettre votre hôtel
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer_column">
          <ul className="booki_footer_ul">
            <li>
              <span className="bolder">Assistance</span>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Centre d'aide
              </Link>
            </li>
            <li>
              <Link className="booki_a" to="#">
                Nous contacter
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Bookisite
