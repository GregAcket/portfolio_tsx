import { useEffect, useState } from "react"
import { styled } from "styled-components"
import CurlyBrackets from "../../assets/CurlyBrackets"
import SquareBrackets from "../../assets/SquareBrackets"
import FunctionArrow from "../../assets/FunctionArrow"

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
  max-width: 90vh;
  min-height: 450px;
  padding: 0px 15px;
`

const ProjectsWrappers = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  :hover div {
    background-position: left 8px;
  }
`

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-bottom: 100px;
  cursor: pointer;
`

const Test = styled.div`
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

const LogoUnderline = styled.div`
  min-width: 40px;
  height: 50px;
  margin-right: 20px;
  background: linear-gradient(to left, #ccc 50%, #0065fc 50%);
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

const Comment = styled.p`
  max-width: min-content;
`

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

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

  let mappedProjects = projects.map((project) => {
    return (
      <StyledArticle key={project.id}>
        <Test>
          <Screenshot src={project?.screenshot} alt="" />

          <Logo src={project?.urlLogo} alt={project.altLogo} />
        </Test>
        <Title>
          <LogoUnderline></LogoUnderline>
          <Comment>{project?.comment}</Comment>
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
        <FunctionArrow />
        <ProjectsWrappers>{mappedProjects}</ProjectsWrappers>
      </ProjectSection>
    </>
  )
}

//          <StyledArticle>
//            <Test>
//              <Screenshot src={projects[0]?.screenshot} alt="" />
//
//              <Logo src={projects[0]?.urlLogo} alt={projects[0]?.altLogo} />
//            </Test>
//            <Title>
//              <LogoUnderline></LogoUnderline>
//              Intégration <br /> d'une maquette
//            </Title>
//          </StyledArticle>
//
//          <StyledArticle>
//            <Test>
//              <Screenshot src={projects[1]?.screenshot} alt="" />
//
//              <Logo src={projects[1]?.urlLogo} alt={projects[1]?.altLogo} />
//            </Test>
//            <Title>
//              <LogoUnderline></LogoUnderline>
//              Animation <br /> Css et Sass
//            </Title>
//          </StyledArticle>
//
//          <StyledArticle>
//            <Test>
//              <Screenshot src={projects[2]?.screenshot} alt="" />
//
//              <Logo src={projects[2]?.urlLogo} alt={projects[2]?.altLogo} />
//            </Test>
//            <Title>
//              <LogoUnderline></LogoUnderline>
//              Accessibilité <br /> et SEO
//            </Title>
//          </StyledArticle>
//
//          <StyledArticle>
//            <Test>
//              <Screenshot src={projects[3]?.screenshot} alt="" />
//
//              <Logo src={projects[3]?.urlLogo} alt={projects[3]?.altLogo} />
//            </Test>
//            <Title>
//              <LogoUnderline></LogoUnderline>
//              E-commerce <br /> en JavaScript
//            </Title>
//          </StyledArticle>
//
//          <StyledArticle>
//            <Test>
//              <Screenshot src={projects[4]?.screenshot} alt="" />
//
//              <Logo src={projects[4]?.urlLogo} alt={projects[4]?.altLogo} />
//            </Test>
//            <Title>
//              <LogoUnderline></LogoUnderline>
//              Application <br /> React
//            </Title>
//          </StyledArticle>
