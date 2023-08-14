import { useContext } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { StateSingleProjectsContext } from "../utils/StateSingleProjectProvider"
import { StateProjectsContext } from "../utils/StateProjectsProvider"
import { css, styled } from "styled-components"
import { StyleProjectProps } from "../utils/type"

const MasterWrapper = styled.div<StyleProjectProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: opacity 500ms;
  transition-delay: 200ms;
  ${({ $isMasterWrapperShown }) =>
    $isMasterWrapperShown &&
    css`
      opacity: 1;
    `};
`

const Close = styled.p`
  font-size: 20px;
  font-weight: 600;
  align-self: end;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`

export default function MasterWrapperComponent() {
  const { isMasterWrapperShown, changeMasterWrapper } = useContext(
    StateSingleProjectsContext
  )

  const { changeProjectsWrapper } = useContext(StateProjectsContext)

  // NAVIGATE

  const navigate = useNavigate()

  const closeProject = async () => {
    changeMasterWrapper()
    await new Promise((resolve) => setTimeout(resolve, 600))
    navigate("/")
    setTimeout(() => {
      changeProjectsWrapper()
    }, 200)
  }

  return (
    <>
      <MasterWrapper $isMasterWrapperShown={isMasterWrapperShown}>
        <Close onClick={() => closeProject()}>x</Close>

        <Outlet />
      </MasterWrapper>
    </>
  )
}
