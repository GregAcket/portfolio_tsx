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
import Terminal from "../../assets/Terminal"
import Code from "../../assets/Code"
import RoundBrackets from "../../assets/RoundBrackets"

type Project = {
  id: number
  altLogo: string
  description: string
  github: string
  link: string
  screenshot: string
  smallscreenshot: string
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

  @media (min-width: 1180px) {
    margin: auto;
  }
`

const ProjectsWrappers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1149px;
  opacity: 1;
  transition: opacity 400ms;

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

// @media (min-width: 992px) {
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: auto;
//
//   :nth-child(even) article {
//     transform: translateY(0px);
//   }

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 50px 0px;
  cursor: pointer;
  opacity: 1;
  @media (min-width: 768px) {
    margin: 0;
  }
`

const Images = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    min-height: 510px;
  }
`

const Logo = styled.img`
  max-height: 100px;
  max-width: 100px;
`

const Screenshot = styled.img`
  object-fit: cover;
  height: 400px;
  width: 250px;
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
  background-position: left 8px;
  transition: background-position ease-out 300ms;
  @media (min-width: 768px) {
    background-position: right 8px;
    min-width: 80px;
    align-self: ;
    margin: 0px;
  }
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
  @media (min-width: 768px) {
    display: flex;
  }
`

const Title = styled.div`
  display: flex;
  width: fit-content;
  font-size: 16px;
  font-weight: 200;
  text-transform: uppercase;
  @media (min-width: 768px) {
    position: relative;
    bottom: 100px;
    left: 115px;
    flex-direction: column-reverse;
    align-items: end;
  }
`

const Comment = styled.p<ThemeProps>`
  max-width: 135px;
  font-size: 15px;
  color: ${({ $isDarkMode }) => ($isDarkMode ? "white" : "black")};
  @media (min-width: 768px) {
    text-align: right;
  }
`

const TerminalWrapper = styled.div<ThemeProps>`
  position: absolute;
  bottom: -2500px;
  right: 65px;
  height: 50px;
  width: 50px;
  padding: 5px;
  border-radius: 5px;
  transform: rotate(25deg);
  border: 3px solid ${({ $isDarkMode }) => ($isDarkMode ? "#4d4d4d" : "#ccc")};

  @media (min-width: 768px) {
    bottom: -1150px;
    right: 105px;
  }

  @media (min-width: 910px) {
    bottom: -1180px;
  }

  @media (min-width: 992px) {
    bottom: -1300px;
    right: 525px;
  }

  @media (min-width: 1200px) {
    bottom: -1180px;
    right: 640px;
  }

  @media (min-width: 1700px) {
    bottom: -1260px;
    right: 640px;
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

  // LOGIC

  const mappedProjects = allProjects.map((project) => {
    // color needed for the underline

    const colorArray = [
      "#0065fc 50%",
      "#9356dc 50%, #f576da",
      "#f3976c 50%",
      "#0a3b4d 50%",
      "#ff6060 50%",
    ]

    /* The openProject function closes the projects section, wait for 600ms the time projects section fades-out, 
    goes to the wanted address, scroll to the top of the opened project and finally makes him finally fades-in
    */

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
            <Screenshot
              src={project.smallscreenshot}
              alt="Project Screenshot"
              width={250}
              height={400}
            />

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

  let reversedProjects = mappedProjects.reverse()

  return (
    <>
      <ProjectSection>
        <CurlyBrackets />
        <SquareBrackets />
        <Branch />
        <TerminalWrapper $isDarkMode={theme === "dark"}>
          <Terminal />
        </TerminalWrapper>
        <Code />
        <RoundBrackets />
        <ProjectsWrappers>{reversedProjects}</ProjectsWrappers>
      </ProjectSection>
    </>
  )
}
