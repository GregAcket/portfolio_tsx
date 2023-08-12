import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../utils/ThemeProvider"
import { ThemeProps } from "../utils/type"

const StyledInput = styled.input`
  display: none;
  height: 0;
  width: 0;
  opacity: 0;

  &: checked + label span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`

const StyledLabel = styled.label<ThemeProps>`
  position: relative;
  display: flex;
  cursor: pointer;
  width: 45px;
  height: 29px;
  background: ${({ $isDarkMode }) => ($isDarkMode ? "#e6e6e6" : "#333")};
  border-radius: 100px;
  transition: background-color 0.2s;

    @media (min-width: 768px){
      width: 60px;
      height:34px;
    }
  }
`

const Switch = styled.span<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 25px;
  height: 25px;
  border-radius: 45px;
  transition: 0.2s;
  background: ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")};

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`

export default function ThemeSwitcher() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  return (
    <>
      <StyledInput type="checkbox" id="switch" onClick={() => toggleTheme()} />
      <StyledLabel htmlFor="switch" $isDarkMode={theme === "dark"}>
        <Switch className="switch" $isDarkMode={theme === "dark"}>
          {theme === "dark" ? "🌙" : "☀️"}
        </Switch>
      </StyledLabel>
    </>
  )
}
