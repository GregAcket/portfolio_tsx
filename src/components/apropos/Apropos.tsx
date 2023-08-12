import { useContext } from "react"
import { styled } from "styled-components"
import { ThemeContext } from "../../utils/ThemeProvider"
import { ThemeProps } from "../../utils/type"
import RoundBrackets from "../../assets/RoundBrackets"
import Code from "../../assets/Code"
import Terminal from "../../assets/Terminal"

const Section = styled.section<ThemeProps>`
  background: linear-gradient(
    to bottom,
    ${({ $isDarkMode }) => ($isDarkMode ? "white" : "white")} 30%,
    ${({ $isDarkMode }) => ($isDarkMode ? "black" : "black")}
  );
`
const TerminalWrapper = styled.div<ThemeProps>`
  position: absolute;
  bottom: -1930px;
  right: 65px;
  height: 50px;
  width: 50px;
  padding: 5px;
  border-radius: 5px;
  transform: rotate(25deg);
  border: 3px solid ${({ $isDarkMode }) => ($isDarkMode ? "#4d4d4d" : "#ccc")};
`

export default function Apropos() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <TerminalWrapper $isDarkMode={theme === "dark"}>
        <Terminal />
      </TerminalWrapper>
      <Code />
      <RoundBrackets />
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
