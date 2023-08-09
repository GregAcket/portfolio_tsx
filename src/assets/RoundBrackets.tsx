import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../utils/ThemeProvider"
import { ThemeProps } from "../utils/type"

const Path = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#4d4d4d" : "#ccc")};
`

export default function RoundBrackets() {
  const { theme } = useContext(ThemeContext)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <Path
        $isDarkMode={theme === "dark"}
        d="M2 12c0 6.41 4.58 10.18 4.63 10.22A1.002 1.002 0 016 24c-.22 0-.44-.07-.62-.22C5.16 23.6 0 19.39 0 12S5.16.39 5.38.22c.43-.34 1.06-.28 1.41.16.35.43.28 1.06-.16 1.41-.04.04-4.62 3.81-4.62 10.22zM18.62.22a.998.998 0 00-1.4.15c-.35.43-.28 1.06.15 1.41C17.42 1.82 22 5.59 22 12s-4.54 10.15-4.63 10.22a1 1 0 00.62 1.78c.22 0 .44-.07.62-.22.22-.18 5.38-4.39 5.38-11.78S18.84.39 18.62.22z"
      ></Path>
    </svg>
  )
}
