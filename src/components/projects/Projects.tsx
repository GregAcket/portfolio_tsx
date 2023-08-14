import { useContext, useEffect, useState } from "react"
import { css, styled } from "styled-components"

import { ThemeContext } from "../../utils/ThemeProvider"
import { StyleProjectProps, ThemeProps } from "../../utils/type"
import { Link, useNavigate } from "react-router-dom"

import CurlyBrackets from "../../assets/CurlyBrackets"
import SquareBrackets from "../../assets/SquareBrackets"
import Branch from "../../assets/Branch"
import { StateProjectsContext } from "../../utils/StateProjectsProvider"
import { StateSingleProjectsContext } from "../../utils/StateSingleProjectProvider"

type Project = {
  id: number
  altLogo: string
  description: string
  github: string
  link: string
  screenshot: string
  techno: string[]
  urlLogo: string
  title: string
  comment: string
}

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 450px;
  padding: 0px 15px;
`

const ProjectsWrappers = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  opacity: 1;
  transition: opacity 400ms;

  :hover div {
    background-position: left 8px;
  }
`

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 50px 0px;
  cursor: pointer;
  opacity: 1;
`

const Images = styled.div`
  display: flex;
  flex-direction: column;
`

const Logo = styled.img`
  max-height: 100px;
  max-width: 100px;
`

const Screenshot = styled.img`
  object-fit: cover;
  max-height: 400px;
  max-width: 250px;
  margin-bottom: 10px;
`

const LogoUnderline = styled.div<StyleProjectProps>`
  min-width: 40px;
  height: 50px;
  margin-right: 20px;
  background: linear-gradient(
    to left,
    #ccc 50%,
    ${({ $ColorUnderline }) => $ColorUnderline}
  );
  background-repeat: no-repeat;
  background-size: 200% 3px;
  background-position: right 8px;
  transition: background-position ease-out 300ms;
`

const Links = styled(Link)<StyleProjectProps>`
  text-decoration: none;
  opacity: 1;
  transition: opacity 500ms;
  ${({ $isProjectsWrapperHidden }) =>
    $isProjectsWrapperHidden &&
    css`
      opacity: 0;
    `};
`

const Title = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 200;
  text-transform: uppercase;
`

const Comment = styled.p<ThemeProps>`
  max-width: 135px;
  font-size: 15px;
  color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
`

export default function Projects() {
  // STATE

  const [allProjects, setAllProjects] = useState<Project[]>([])

  //CTXT

  const { theme } = useContext(ThemeContext)
  const { isProjectsWrapperHidden, changeProjectsWrapper } =
    useContext(StateProjectsContext)

  const { changeMasterWrapper } = useContext(StateSingleProjectsContext)

  // NAVIGATE

  const navigate = useNavigate()

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

  // LOGIC

  const mappedProjects = allProjects.map((project) => {
    const colorArray = [
      "#0065fc 50%",
      "#9356dc 50%",
      "#f3976c 50%",
      "#0a3b4d 50%",
      "#ff6060 50%",
    ]

    const openProject = async () => {
      changeProjectsWrapper()
      await new Promise((resolve) => setTimeout(resolve, 600))
      navigate("project" + project.link)
      const target = document.getElementById("projects")
      const scroll = () => {
        target?.scrollIntoView()
      }
      setTimeout(() => {
        scroll()
      }, 100)
      setTimeout(() => {
        changeMasterWrapper()
      }, 200)
    }

    return (
      <Links
        to="#"
        key={project.id}
        $isProjectsWrapperHidden={isProjectsWrapperHidden}
        onClick={() => openProject()}
      >
        <StyledArticle>
          <Images>
            <Screenshot src={project.screenshot} alt="Project Screenshot" />

            <Logo src={project.urlLogo} alt={project.altLogo} />
          </Images>
          <Title>
            <LogoUnderline $ColorUnderline={colorArray[project.id]} />
            <Comment $isDarkMode={theme === "dark"}>{project.comment}</Comment>
          </Title>
        </StyledArticle>
      </Links>
    )
  })

  return (
    <>
      <ProjectSection>
        <CurlyBrackets />
        <SquareBrackets />
        <Branch />
        <ProjectsWrappers>{mappedProjects}</ProjectsWrappers>
      </ProjectSection>
    </>
  )
}
