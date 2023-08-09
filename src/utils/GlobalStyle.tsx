import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"
import { createGlobalStyle } from "styled-components"
import { ThemeProps } from "./type"

const StyledGlobalStyle = createGlobalStyle<ThemeProps>`

* {
  box-sizing: border-box;

}

html{
  scroll-behavior:smooth;
}

body {
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")};
  color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  margin:0;
}

#root {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1440px;
  font-size: 18px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

header, main, footer {
  line-height:1.5;
}

h1,
h2,
p,
ul {
  margin: 0px;
}

h2{
  margin-bottom: 50px;
}

button,
ul {
  padding: 0px;
}

header{
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1920px;
  padding: 30px 15px 0px;
  height:20vh;

  @media (min-width: 768px) {
  }
}

nav{
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0px;
  margin-top:25px;
}

ul{
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (min-width: 570px) {
    flex-direction: row;
    align-items: center;
}

li{
  cursor: pointer;
  list-style: none;
  border-bottom:1px solid transparent;
  transition: all 500ms;

  &:hover {
    border-bottom: 1px solid green;
    text-shadow: ${({ $isDarkMode }) =>
      $isDarkMode
        ? "0px 0px 3px rgba(195, 191, 39, 0.8)"
        : "0px 0px 3px rgba(60, 64, 67, 0.8)"};
  }

  a{
    text-decoration: none;
    color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
}
`

export default function GlobalStyle() {
  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle $isDarkMode={theme === "dark"} />
}
