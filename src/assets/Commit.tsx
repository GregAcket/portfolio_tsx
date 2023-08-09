import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../utils/ThemeProvider"
import { ThemeProps } from "../utils/type"

const Path = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#4d4d4d" : "#ccc")};
`

export default function Commit() {
  const { theme } = useContext(ThemeContext)

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <Path
        $isDarkMode={theme === "dark"}
        d="M320 336a80 80 0 100-160 80 80 0 100 160zm156.8-48C462 361 397.4 416 320 416s-142-55-156.8-128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h131.2C178 151 242.6 96 320 96s142 55 156.8 128H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H476.8z"
      ></Path>
    </svg>
  )
}
