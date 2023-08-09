import { Link } from "react-router-dom"
import { styled } from "styled-components"
import LogoDev from "./logodev"
import ThemeSwitcher from "../ThemeSwitcher"
import { ThemeContext } from "../../utils/ThemeProvider"
import { forwardRef, useContext, useImperativeHandle, useRef } from "react"
import { ThemeProps } from "../../utils/type"

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
  color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  font-size: 22px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 35px;
    font-weight: 600;
  }
`

export const Header = forwardRef(function Header(props, ref) {
  const { theme } = useContext(ThemeContext)
  const brandRef = useRef<HTMLParagraphElement>(null)

  useImperativeHandle(ref, () => {
    return {
      scrollIntoView() {
        if (brandRef.current) brandRef.current.scrollIntoView()
      },
    }
  })

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

  const Navigation = Links.map((link, index) => {
    const mapped = (
      <li key={index}>
        <Link reloadDocument to={link.path}>
          {link.name}
        </Link>
      </li>
    )
    return mapped
  })

  return (
    <>
      <header>
        <TopDiv>
          <Link to={"/"}>
            <BrandId>
              <LogoDev />
            </BrandId>
          </Link>
          <BrandName $isDarkMode={theme === "dark"} ref={brandRef}>
            Greg_Dev
          </BrandName>
          <ThemeSwitcher />
        </TopDiv>
        <nav>
          <ul>{Navigation}</ul>
        </nav>
      </header>
    </>
  )
})
