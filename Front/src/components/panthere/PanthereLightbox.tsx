import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import ImageJson from "../../utils/panthere_images.json"
import "./pantherelightbox.css"
import { useEffect, useState } from "react"
import { lightboxPictureType } from "../../utils/type"

type LightboxPropsType = {
  show: boolean
  willClose: () => void
  whichPicture: lightboxPictureType
}

const Lightbox = ({ willClose, show, whichPicture }: LightboxPropsType) => {
  // STATE

  const [picture, setPicture] = useState<lightboxPictureType>({})

  // EFFECT

  useEffect(() => {
    setPicture(whichPicture)
  }, [whichPicture])

  // LOGIC

  function increase() {
    let number = picture.id
    if (number !== undefined) {
      number++
      if (number > ImageJson.length - 1) {
        number = 0
      }
    }
    const check = ImageJson.find((search) => search.id === number)
    if (check !== undefined) {
      setPicture(check)
    }
  }

  const showOrHideBox = show
    ? "panthere_lightbox panthere_lightbox_show"
    : "panthere_lightbox panthere_lightbox_hide"

  function decrease() {
    let number = picture.id
    if (number !== undefined) {
      number--
      if (number < 0) {
        number = ImageJson.length - 1
      }
    }
    const check = ImageJson.find((search) => search.id === number)
    if (check !== undefined) {
      setPicture(check)
    }
  }

  return (
    <>
      <div className={showOrHideBox} onClick={willClose}>
        <div
          className="panthere_main_lightbox"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="panthere_lightbox_carrousselWrapper">
            <img
              className="panthere_lightbox_image"
              src={picture.url}
              alt={picture.text}
            />
            <p className="panthere_lightbox_p">{picture.text}</p>
            <div className="panthere_lightbox_buttonWrapper">
              <button onClick={decrease}>
                <FontAwesomeIcon
                  className="panthere_lightbox_arrow"
                  icon={faChevronLeft}
                />
              </button>
              <button onClick={increase}>
                <FontAwesomeIcon
                  className="panthere_lightbox_arrow"
                  icon={faChevronRight}
                />
              </button>
            </div>
          </div>
          <FontAwesomeIcon
            className="panthere_lightbox_xmark"
            icon={faXmark}
            onClick={willClose}
          />
        </div>
      </div>
    </>
  )
}

export default Lightbox
