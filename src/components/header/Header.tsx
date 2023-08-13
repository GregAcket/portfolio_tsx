import { Link } from "react-router-dom"
import { styled } from "styled-components"
import LogoDev from "./logodev"
import ThemeSwitcher from "../ThemeSwitcher"
import { ThemeContext } from "../../utils/ThemeProvider"
import { useContext } from "react"
import { ThemeProps } from "../../utils/type"

const MainHeader = styled.header`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1920px;
  width: 100%;
  padding: 30px 15px 0px;
  height: 20vh;

  @media (min-width: 768px) {
  }
`

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BrandId = styled.div`
  display: flex;
  align-items: center;
  max-width: 72px;
  max-height: 50px;

  @media (min-width: 768px) {
    max-width: 170px;
  }
`

const BrandName = styled.p<ThemeProps>`
  font-size: 22px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 35px;
    font-weight: 600;
  }
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0px;
  margin-top: 25px;
`

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (min-width: 570px) {
    flex-direction: row;
    align-items: center;
  }
`

const Li = styled.li<ThemeProps>`
  cursor: pointer;
  list-style: none;
  border-bottom: 1px solid transparent;
  transition: all 500ms;

  &:hover {
    border-bottom: 1px solid green;
    text-shadow: ${({ $isDarkMode }) =>
      $isDarkMode
        ? "0px 0px 3px rgba(195, 191, 39, 0.8)"
        : "0px 0px 3px rgba(60, 64, 67, 0.8)"};
  }

  a {
    text-decoration: none;
    color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`

export default function Header() {
  const { theme } = useContext(ThemeContext)

  const Links = [
    {
      name: "Projets",
      path: "#projects",
    },
    {
      name: "À propos",
      path: "#a_propos",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ]

  const Navigation = Links.map((link) => {
    const mapped = (
      <Li key={link.name} $isDarkMode={theme === "dark"}>
        <Link reloadDocument to={link.path}>
          {link.name}
        </Link>
      </Li>
    )
    return mapped
  })

  return (
    <>
      <MainHeader>
        <TopDiv>
          <Link to={"/"}>
            <BrandId>
              <LogoDev />
            </BrandId>
          </Link>
          <BrandName $isDarkMode={theme === "dark"}>Greg_Dev</BrandName>
          <ThemeSwitcher />
        </TopDiv>
        <Nav>
          <Ul>{Navigation}</Ul>
        </Nav>
      </MainHeader>
    </>
  )
}
