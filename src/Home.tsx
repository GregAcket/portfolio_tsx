import { Outlet } from "react-router-dom"
import { Header } from "./components/header/Header"
import { ThemeProvider } from "./utils/ThemeProvider"
import GlobalStyle from "./utils/GlobalStyle"
import Intro from "./components/intro/Intro"
import { useRef, useState } from "react"
import Footer from "./components/footer/Footer"
import ScrollToTop from "./components/Scrolltotop"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<Boolean>(false)
  const toTopRef = useRef<HTMLElement>(null)

  const toTop = () => {
    if (toTopRef.current) toTopRef.current.scrollIntoView()
  }

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        {isLoaded === false ? (
          <Intro setIsLoaded={setIsLoaded} />
        ) : (
          <>
            <Header ref={toTopRef} />

            <Outlet />

            <Footer />
            <ScrollToTop toTop={toTop} />
          </>
        )}
      </ThemeProvider>
    </>
  )
}
