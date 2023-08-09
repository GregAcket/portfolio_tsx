import { Outlet } from "react-router-dom"
import { Header } from "./Components/header/Header"
import { ThemeProvider } from "./utils/ThemeProvider"
import GlobalStyle from "./utils/GlobalStyle"
import Intro from "./Components/intro/Intro"
import { useRef, useState } from "react"
import Footer from "./Components/footer/Footer"
import ScrollToTop from "./Components/Scrolltotop"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<Boolean>(false)
  const ref = useRef<HTMLElement>(null)

  const toTop = () => {
    if (ref.current) ref.current.scrollIntoView()
  }

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        {isLoaded === false ? (
          <Intro setIsLoaded={setIsLoaded} />
        ) : (
          <>
            <Header ref={ref} />

            <Outlet />

            <Footer />
            <ScrollToTop toTop={toTop} />
          </>
        )}
      </ThemeProvider>
    </>
  )
}
