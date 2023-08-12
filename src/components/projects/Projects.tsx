import { useContext, useEffect, useRef, useState } from "react"
import { css, styled } from "styled-components"
import CurlyBrackets from "../../assets/CurlyBrackets"
import SquareBrackets from "../../assets/SquareBrackets"
import { SingleProject } from "../../pages/SingleProject"
import Bookisite from "../booki/Booki"
import Ohmyfoodsite from "../ohmyfood/ohmyfoodsite"
import { ThemeContext } from "../../utils/ThemeProvider"
import { StyleProjectProps, ThemeProps } from "../../utils/type"
import Branch from "../../assets/Branch"

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

const ProjectsWrappers = styled.div<StyleProjectProps>`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  opacity: 1;
  transition: opacity 400ms;
  ${({ $hideProjectsWrapper }) =>
    $hideProjectsWrapper &&
    css`
      opacity: 0;
    `};
  ${({ $hideProjectsWrapper }) =>
    $hideProjectsWrapper === false &&
    css`
      opacity: 1;
    `};

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
  const { theme } = useContext(ThemeContext)
  const goToAsideRef = useRef<HTMLElement>(null)

  const [projects, setProjects] = useState<Project[]>([])
  const [isProjectShown, setIsProjectShown] = useState<boolean>(false)
  const [projectId, setProjectId] = useState<number>(0)
  const [isWrapperHidden, setIsWrapperhidden] = useState<boolean>(false)

  const url = "https://realisations.greg-dev.com/realisations"

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)
        const picturesDataJson = await response.json()
        setProjects(picturesDataJson)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [url])

  console.log(projects)
  console.log(projectId)

  let array = [<Bookisite />, <Ohmyfoodsite />]

  const closeProject = () => {
    setIsProjectShown(!isProjectShown)

    setTimeout(() => {
      setIsWrapperhidden(!isWrapperHidden)
    }, 300)
  }

  let mappedProjects = projects.map((project) => {
    const goToAside = () => {
      if (goToAsideRef.current) goToAsideRef.current.scrollIntoView()
    }

    const openProject = () => {
      setIsWrapperhidden(!isWrapperHidden)
      setTimeout(() => {
        setIsProjectShown(!isProjectShown)
      }, 500)
      setProjectId(project.id)
      setTimeout(() => {
        goToAside()
      }, 1200)
    }

    let colorArray = [
      "#0065fc 50%",
      "#9356dc 50%",
      "#f3976c 50%",
      "#0a3b4d 50%",
      "#ff6060 50%",
    ]

    return (
      <StyledArticle key={project.id} onClick={openProject}>
        <Images>
          <Screenshot src={project.screenshot} alt="" />

          <Logo src={project.urlLogo} alt={project.altLogo} />
        </Images>
        <Title>
          <LogoUnderline $ColorUnderline={colorArray[project.id]} />
          <Comment $isDarkMode={theme === "dark"}>{project.comment}</Comment>
        </Title>
      </StyledArticle>
    )
  })

  return (
    <>
      <ProjectSection>
        <h2 id="projects">Projets</h2>
        <CurlyBrackets />
        <SquareBrackets />
        <Branch />
        {isProjectShown ? (
          <SingleProject
            children={array[projectId]}
            closeProject={closeProject}
            isProjectShown={isProjectShown}
            ref={goToAsideRef}
          />
        ) : (
          <ProjectsWrappers $hideProjectsWrapper={isWrapperHidden}>
            {mappedProjects}
          </ProjectsWrappers>
        )}
      </ProjectSection>
    </>
  )
}
