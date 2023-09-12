import { Dispatch, SetStateAction } from "react"

export type User = {
  authenticated: boolean
  user: { userId: string | null; token: string } | null
}

export type ThemeProps = {
  $isDarkMode: boolean
  $isChecked?: boolean
}

export type IntroProps = {
  setIsLoaded: Dispatch<SetStateAction<boolean>>
}

export type StyleProjectProps = {
  $isProjectShown?: boolean
  $ColorUnderline?: string
  $isProjectsWrapperHidden?: boolean
  $isMasterWrapperShown?: boolean
  $isIntersected?: boolean
}

export type Delay = {
  $isIntersected: boolean
  $isDelayed: number
}

export type Ohmyfood = {
  id: number
  image: string
  name: string
  nouveau: boolean
  place: string
  entree: [{ accompagnement: string; principal: string; prix: string }]
  plat: [{ accompagnement: string; principal: string; prix: string }]
  dessert: [{ accompagnement: string; principal: string; prix: string }]
}

export type KanapType = {
  id: string
  altTxt: string
  colors: string[]
  description: string
  imageUrl: string
  name: string
  price: number
}

export type KanapCart = {
  id: string
  altTxt: string
  couleur: string
  description: string
  imageUrl: string
  name: string
  price: number
  quantity: number
}

export type lightboxPictureType = {
  id?: number
  url?: string
  text?: string
  alt?: string
  h3?: string
  p?: string
}

export type Project = {
  id: number
  name: string
  smallscreenshot: string
  urlLogo: string
  altLogo: string
  colorUnderline: string
  title: string
  link: string
  [k: string | number]: string | number
}

export type Kasa = {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: {
    name: string
    picture: string
  }
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}
