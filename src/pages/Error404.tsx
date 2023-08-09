import { Link } from "react-router-dom"
import { styled } from "styled-components"

const ErrorSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NotFound = styled.p`
  font-weight: 700;
  font-size: 288px;
  margin-top: 125px;
`

const Oups = styled.p`
  margin-top: 66px;
  margin-bottom: 100px;
  font-size: 36px;
`

const ErrorLink = styled(Link)`
  text-decoration-line: underline;
  margin-bottom: 50px;
`
export default function Error() {
  return (
    <>
      <ErrorSection>
        <NotFound>404</NotFound>
        <Oups>La page que vous cherchez n'existe pas</Oups>
        <ErrorLink to={"/"}>Retour à la page d'accueil</ErrorLink>
      </ErrorSection>
    </>
  )
}
