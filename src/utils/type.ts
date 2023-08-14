import { Dispatch, SetStateAction } from "react"

export type ThemeProps = {
  $isDarkMode: boolean
}

export type IntroProps = {
  setIsLoaded: Dispatch<SetStateAction<Boolean>>
}

export type StyleProjectProps = {
  $isProjectShown?: boolean
  $ColorUnderline?: string
  $isProjectsWrapperHidden?: boolean
  $isMasterWrapperShown?: boolean
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
