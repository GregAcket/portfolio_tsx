import { useContext } from "react"
import { ThemeContext } from "../../utils/ThemeProvider"
import { styled } from "styled-components"
import { ThemeProps } from "../../utils/type"

const StyledG = styled.g<ThemeProps>`
  stroke: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
`

export default function Separator() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1422 800">
        <StyledG
          fill="none"
          $isDarkMode={theme === "dark"}
          strokeLinecap="round"
          strokeWidth="2"
        >
          <path d="M0 432q355.5-182 711-32t711 32"></path>
          <path d="M0 378q355.5-128 711 22t711-22"></path>
          <path d="M0 324q355.5-74 711 76t711-76"></path>
          <path d="M0 270q355.5-20 711 130t711-130"></path>
          <path d="M0 216q355.5 34 711 184t711-184"></path>
          <path d="M0 162q355.5 88 711 238t711-238"></path>
          <path d="M0 108q355.5 142 711 292t711-292"></path>
        </StyledG>
      </svg>
    </>
  )
}
