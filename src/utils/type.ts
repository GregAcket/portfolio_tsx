import { Dispatch, SetStateAction } from "react"

export type ThemeProps = {
  $isDarkMode: boolean
}

export type IntroProps = {
  setIsLoaded: Dispatch<SetStateAction<Boolean>>
}

export type StyleProjectProps = {
  $isProjectShown?: boolean
  $hideProjectsWrapper?: boolean
  $ColorUnderline?: string
}
