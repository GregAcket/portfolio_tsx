import { Link } from "react-router-dom"
import logementJson from "../../../utils/kasa/logements.json"
import "./thumb.css"

export default function Thumb() {
  const goToHeader = () => {
    const target = document.querySelector(".Kasa_header")
    const scroll = () => {
      setTimeout(() => {
        target?.scrollIntoView()
      }, 200)
    }
    scroll()
  }

  const Accomodations = () => {
    const mapped = logementJson.map((rental) => (
      <Link
        to={"/project/kasa/" + rental.id}
        key={rental.id}
        onClick={() => goToHeader()}
      >
        <article className="homepageArticle">
          <img className="rentalImg" src={rental.cover} alt={rental.title} />
          <p className="rentalName"> {rental.title}</p>
        </article>
      </Link>
    ))
    return mapped
  }

  return (
    <>
      <Accomodations />
    </>
  )
}
