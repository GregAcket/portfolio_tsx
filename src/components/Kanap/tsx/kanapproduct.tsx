import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import "../css/style.css"
import "../css/product.css"
import { KanapCart } from "../../../utils/type"

type CanapProduct = {
  id: string
  colors: string[]
  altTxt: string
  description: string
  imageUrl: string
  name: string
  price: number
}

// quantity: selectedQuantity,
// couleur: selectedColor,

export default function Kanapproduct() {
  const navigate = useNavigate()

  const [kanapData, setKanapData] = useState<CanapProduct>({
    id: "",
    colors: [],
    altTxt: "",
    description: "",
    imageUrl: "",
    name: "",
    price: 0,
  })

  const [isValidationMessageShown, setValidationMessage] = useState(false)

  const { id } = useParams()

  const objetUrl = `https://kanap.greg-dev.com/products/${id}`

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(objetUrl)
        const kanapJson = await response.json()
        setKanapData(kanapJson)

        if (Object.keys(kanapJson).length === 0) {
          navigate("/404")
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [objetUrl])

  const colorOptions = kanapData.colors?.map((color) => {
    return (
      <option key={color} value={color}>
        {color}
      </option>
    )
  })

  function validationMessage() {
    setValidationMessage(true)
    setTimeout(() => setValidationMessage(false), 2000)
  }

  const addToCart = () => {
    const targetColor = document.querySelector("#colors") as HTMLSelectElement
    const selectedColor = targetColor.value

    if (selectedColor === "") {
      return alert("Vous devez selectionner une couleur")
    }

    const targetQuantity = document.querySelector(
      "#quantity"
    ) as HTMLInputElement
    const selectedQuantity = parseInt(targetQuantity.value)

    if (selectedQuantity <= 0 || selectedQuantity > 100) {
      return alert(
        "Vous devez selectionner une quantité valide (entre 1 et 100)"
      )
    }
    if (id) {
      let selectedCanap: KanapCart = {
        id: id,
        quantity: selectedQuantity,
        couleur: selectedColor,
        altTxt: kanapData.altTxt,
        description: kanapData.description,
        imageUrl: kanapData.imageUrl,
        name: kanapData.name,
        price: kanapData.price,
      }
      let canapline = JSON.stringify([selectedCanap])

      const storedValue = localStorage.getItem("selectedCanap") as string
      console.log(storedValue)

      //     if (storedValue) {
      let verifyStorage: KanapCart[] = JSON.parse(storedValue)

      //si le stockage n'est pas inexistant

      if (verifyStorage !== null) {
        //on recherche si il existe deja un produit avec la meme id et la même couleur

        let findProduct = verifyStorage.find(
          (search) => search.id === id && search.couleur === selectedColor
        )

        // si un tel produit existe, on ajoute la nouvelle quantité à la quantité précédente

        if (findProduct !== undefined) {
          selectedCanap.quantity = selectedCanap.quantity + findProduct.quantity

          if (selectedCanap.quantity > 100) {
            return alert(
              "Vous ne pouvez pas selectionner plus de 100 articles identiques"
            )
          }

          let indexProduct = verifyStorage.indexOf(findProduct)

          verifyStorage.splice(indexProduct, 1, selectedCanap)

          localStorage.setItem("selectedCanap", JSON.stringify(verifyStorage))

          validationMessage()
        } else {
          // Si aucun element ne correspond, on l'ajoute à la liste des produits déjà existants

          verifyStorage.push(selectedCanap)

          localStorage.setItem("selectedCanap", JSON.stringify(verifyStorage))

          validationMessage()
        }

        //Si le localStorage est vide, on crée le premier objet
      } else {
        localStorage.setItem("selectedCanap", canapline)

        validationMessage()
      }
    }
  }

  return (
    <>
      <main className="limitedWidthBlockContainer Kanap_main">
        <div className="limitedWidthBlock">
          <section className="item">
            <article>
              <div className="item__img">
                <img src={kanapData.imageUrl} alt={kanapData.altTxt} />
              </div>
              <div className="item__content">
                <div className="item__content__titlePrice">
                  <h1 id="title">{kanapData.name}</h1>
                  <p>
                    Prix : <span id="price">{kanapData.price}</span>€
                  </p>
                </div>
                <div className="item__content__description">
                  <p className="item__content__description__title">
                    Description :
                  </p>
                  <p id="description">{kanapData.description}</p>
                </div>
                <div className="item__content__settings">
                  <div className="item__content__settings__color">
                    <label htmlFor="color-select">Choisir une couleur :</label>
                    <select name="color-select" id="colors">
                      <option value="">--SVP, choisissez une couleur --</option>
                      {colorOptions}
                    </select>
                  </div>
                  <div className="item__content__settings__quantity">
                    <label htmlFor="itemQuantity">
                      Nombre d'article(s) (1-100) :
                    </label>
                    <input
                      type="number"
                      name="itemQuantity"
                      min="1"
                      max="100"
                      defaultValue="1"
                      id="quantity"
                    />
                  </div>
                </div>
                <div className="item__content__addButton">
                  <button id="addToCart" onClick={addToCart}>
                    Ajouter au panier
                  </button>
                  {isValidationMessageShown === true && (
                    <p className="okMessage">
                      Votre produit a bien été ajouté au panier
                    </p>
                  )}
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  )
}
