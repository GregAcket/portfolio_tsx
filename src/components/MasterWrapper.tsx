import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { StateSingleProjectsContext } from "../utils/StateSingleProjectProvider"
import { StateProjectsContext } from "../utils/StateProjectsProvider"
import { css, styled } from "styled-components"
import { StyleProjectProps } from "../utils/type"

const MasterWrapper = styled.div<StyleProjectProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;
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
  margin-bottom: 10px;
  cursor: pointer;
`

export default function MasterWrapperComponent() {
  const { isProjectsWrapperHidden, changeProjectsWrapper } =
    useContext(StateProjectsContext)

  const { isMasterWrapperShown, changeMasterWrapper } = useContext(
    StateSingleProjectsContext
  )

  useEffect(() => {
    const reset = () => {
      if (isMasterWrapperShown === false && isProjectsWrapperHidden === false) {
        changeMasterWrapper()
        changeProjectsWrapper()
      }
    }
    reset()
  })

  // NAVIGATE

  const navigate = useNavigate()

  // LOGIC

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
