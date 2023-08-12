import { PropsWithChildren, forwardRef } from "react"
import { css, keyframes, styled } from "styled-components"
import { StyleProjectProps } from "../utils/type"

const In = keyframes`
100%{
  right:0%;
}
`

const Aside = styled.aside<StyleProjectProps>`
  z-index: 1;
  display: ${({ $isProjectShown }) => ($isProjectShown ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: relative;
  right: -200%;
  width: 100%;
  background: white;
  animation: ${({ $isProjectShown }) =>
    $isProjectShown &&
    css`
      ${In} 500ms linear forwards normal
    `};
`

const Close = styled.span`
  z-index: 2;
  align-self: start;
  position: absolute;
  font-size: 25px;
  font-weight: 400;
  cursor: pointer;
  color: black;
`

type SingleProjectProps = PropsWithChildren<{
  closeProject: () => void
  isProjectShown: boolean
}>

export const SingleProject = forwardRef<HTMLElement, SingleProjectProps>(
  ({ children, closeProject, isProjectShown }, ref) => {
    return (
      <>
        <Aside $isProjectShown={isProjectShown} ref={ref}>
          <Close onClick={closeProject}>X</Close>
          {children}
        </Aside>
      </>
    )
  }
)
