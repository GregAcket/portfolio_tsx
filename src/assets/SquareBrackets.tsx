import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../utils/ThemeProvider"
import { ThemeProps } from "../utils/type"

const Path = styled.path<ThemeProps>`
  fill: ${({ $isDarkMode }) => ($isDarkMode ? "#4d4d4d" : "#ccc")};
`

const Svg = styled.svg`
  position: absolute;
  bottom: -475px;
  left: 70px;
  width: 70px;
  height: 70px;
  transform: rotate(-25deg);
  z-index: -1;
`

export default function SquareBrackets() {
  const { theme } = useContext(ThemeContext)

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <Path
        $isDarkMode={theme === "dark"}
        d="M2 5v14c0 1.65 1.35 3 3 3h2c.55 0 1 .45 1 1s-.45 1-1 1H5c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h2c.55 0 1 .45 1 1s-.45 1-1 1H5C3.35 2 2 3.35 2 5zm17-5h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.65 0 3 1.35 3 3v14c0 1.65-1.35 3-3 3h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5z"
      ></Path>
    </Svg>
  )
}
