import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../utils/ThemeProvider"
import { ThemeProps } from "../utils/type"

const Path = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#4d4d4d" : "#ccc")};
`

export default function Terminal() {
  const { theme } = useContext(ThemeContext)

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <Path
        $isDarkMode={theme === "dark"}
        d="M9.4 86.6c-12.5-12.5-12.5-32.7 0-45.2s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
      ></Path>
    </svg>
  )
}
