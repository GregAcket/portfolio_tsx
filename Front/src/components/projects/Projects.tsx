import { useContext, useEffect, useState } from "react"
import { css, styled } from "styled-components"

import { ThemeContext } from "../../utils/ThemeProvider"
import { Project, StyleProjectProps, ThemeProps } from "../../utils/type"

import CurlyBrackets from "../../assets/CurlyBrackets"
import SquareBrackets from "../../assets/SquareBrackets"
import Branch from "../../assets/Branch"
import { StateProjectsContext } from "../../utils/StateProjectsProvider"
import { StateSingleProjectsContext } from "../../utils/StateSingleProjectProvider"
import Terminal from "../../assets/Terminal"
import Code from "../../assets/Code"
import RoundBrackets from "../../assets/RoundBrackets"
import { SingleProject } from "./SingleProject"

const ProjectSection = styled.section<StyleProjectProps>`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 450px;
  padding: 0px 15px;

  opacity: 1;
  transition: opacity 500ms;
  ${({ $isProjectsWrapperHidden }) =>
    $isProjectsWrapperHidden &&
    css`
      opacity: 0;
    `};

  @media (min-width: 1180px) {
    margin: auto;
  }
`

const ProjectsWrappers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1149px;

  :hover div {
    background-position: left 8px;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;

    :nth-child(even) article {
      transform: translateY(260px);
    }
  }

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 50px;

    :nth-child(even) article {
      transform: translateY(0px);
    }
  }
  }
`

const Layer = styled.div`
  position: absolute;
  max-width: 1920px;
  width: 75%;
`

const TerminalWrapper = styled.div<ThemeProps>`
  position: absolute;
  bottom: -2420px;
  left: 55%;
  height: 50px;
  width: 50px;
  padding: 5px;
  border-radius: 5px;
  transform: rotate(25deg);
  border: 3px solid ${({ $isDarkMode }) => ($isDarkMode ? "#4d4d4d" : "#ccc")};

  @media (min-width: 768px) {
    bottom: -1150px;
    left: 20%;
  }

  @media (min-width: 992px) {
    bottom: -620px;
    left: 90%;
  }

  @media (min-width: 1180px) {
    left: 1000px;
  }
`

export default function Projects() {
  // STATE

  const [allProjects, setAllProjects] = useState<Project[]>([])

  //CTXT

  const { theme } = useContext(ThemeContext)
  const { isProjectsWrapperHidden, changeProjectsWrapper } =
    useContext(StateProjectsContext)

  const { isMasterWrapperShown, changeMasterWrapper } = useContext(
    StateSingleProjectsContext
  )

  // EFFECT

  const url = "https://realisations.greg-dev.com/realisations"

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)
        const DataJson = await response.json()
        setAllProjects(DataJson)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [url])

  useEffect(() => {
    const reset = () => {
      if (
        window.location.pathname === "/" &&
        isMasterWrapperShown &&
        isProjectsWrapperHidden
      ) {
        changeMasterWrapper()
        changeProjectsWrapper()
      }
    }
    reset()
  }, [
    isMasterWrapperShown,
    isProjectsWrapperHidden,
    changeMasterWrapper,
    changeProjectsWrapper,
  ])

  const projects = allProjects
    .map((project) => <SingleProject key={project.id} project={project} />)
    .reverse()

  return (
    <>
      <ProjectSection $isProjectsWrapperHidden={isProjectsWrapperHidden}>
        <ProjectsWrappers>{projects}</ProjectsWrappers>
        <Layer>
          <CurlyBrackets />
          <SquareBrackets />
          <Branch />
          <TerminalWrapper $isDarkMode={theme === "dark"}>
            <Terminal />
          </TerminalWrapper>
          <Code />
          <RoundBrackets />
        </Layer>
      </ProjectSection>
    </>
  )
}
