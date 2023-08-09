import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../../utils/ThemeProvider"
import { ThemeProps } from "../../utils/type"

const Section = styled.section<ThemeProps>`
  background: linear-gradient(
    to bottom,
    ${({ $isDarkMode }) => ($isDarkMode ? "black" : "white")} 30%,
    ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")}
  );
`

export default function Apropos() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Section $isDarkMode={theme === "dark"}>
        <h2 id="a_propos">À propos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          veritatis labore iure accusamus facilis, perferendis debitis ipsa
          consectetur dicta sequi doloremque ut voluptatem dolores minus
          voluptatibus delectus repellat! Quidem, officiis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          veritatis labore iure accusamus facilis, perferendis debitis ipsa
          consectetur dicta sequi doloremque ut voluptatem dolores minus
          voluptatibus delectus repellat! Quidem, officiis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          veritatis labore iure accusamus facilis, perferendis debitis ipsa
          consectetur dicta sequi doloremque ut voluptatem dolores minus
          voluptatibus delectus repellat! Quidem, officiis?
        </p>
      </Section>
    </>
  )
}
