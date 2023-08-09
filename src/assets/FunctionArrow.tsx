import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../utils/ThemeProvider"
import { ThemeProps } from "../utils/type"

const Path = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#4d4d4d" : "#ccc")};
`

export default function FunctionArrow() {
  const { theme } = useContext(ThemeContext)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      version="1.1"
      viewBox="0 -960 960 960"
    >
      <Path
        $isDarkMode={theme === "dark"}
        d="M530-481L332-679l43-43 241 241-241 241-43-43 198-198z"
      ></Path>
      <Path
        $isDarkMode={theme === "dark"}
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="0.4"
        d="M162.054 -590.822H479.72299999999996V-540.813H162.054z"
      ></Path>
      <Path
        $isDarkMode={theme === "dark"}
        fillRule="evenodd"
        stroke="#000"
        strokeWidth="0.4"
        d="M160.417 -418.587H478.086V-368.578H160.417z"
      ></Path>
    </svg>
  )
}
