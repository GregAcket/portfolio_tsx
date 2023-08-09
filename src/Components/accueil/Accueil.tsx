import { RefObject, useContext, useRef } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../../utils/ThemeProvider"
import { ThemeProps } from "../../utils/type"
import Separator from "./Separator"

const SectionAccueil = styled.section<ThemeProps>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 55vh;
  padding: 70px 30px 0px;
`

const StyledP = styled.p<ThemeProps>`
  margin-top: 40px;
  font-size: 18px;
  color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  text-shadow: ${({ $isDarkMode }) =>
    $isDarkMode
      ? "3px 3px 5px rgba(221, 218, 216, 0.3)"
      : "3px 3px 5px rgba(34, 37, 39, 0.3)"};
`

const StyledH1 = styled.h1<ThemeProps>`
  display: flex;
  font-size: 20px;
  font-weight: 600;
  width: 345px;
  margin-top: 40px;
  text-transform: uppercase;
  color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  text-shadow: ${({ $isDarkMode }) =>
    $isDarkMode
      ? "3px 3px 5px rgba(221, 218, 216, 0.6)"
      : "3px 3px 5px rgba(34, 37, 39, 0.6)"};
`

export default function Accueil() {
  const { theme } = useContext(ThemeContext)

  let paragraph = useRef<HTMLParagraphElement>(null)
  let title = useRef<HTMLHeadingElement>(null)

  let p = "Bonjour, c'est Greg ! 👋"

  let h1 = "Développeur Fullstack React / Node.js"

  let speed = 45
  let delay = p.length * speed + speed

  function effect(sentence: string, ref: RefObject<HTMLElement>, time: number) {
    let i = 0
    let timer = setInterval(() => {
      if (ref.current !== null && ref.current.innerHTML !== undefined)
        if (
          i < sentence.length &&
          ref.current.innerHTML.length < sentence.length
        ) {
          ref.current.append(sentence.charAt(i))
          i++
        } else {
          clearInterval(timer)
        }
    }, time)
  }

  effect(p, paragraph, speed)

  setTimeout(() => {
    effect(h1, title, speed)
  }, delay)

  return (
    <>
      <SectionAccueil $isDarkMode={theme === "dark"}>
        <StyledP ref={paragraph} $isDarkMode={theme === "dark"}></StyledP>
        <StyledH1 ref={title} $isDarkMode={theme === "dark"}></StyledH1>
      </SectionAccueil>
      <Separator />
    </>
  )
}
