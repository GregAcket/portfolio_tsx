import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"

import Home from "./Home"
import Error from "./pages/Error404"

import Landing from "./pages/Landing"
import Bookisite from "./components/booki/Booki"
import Ohmyfoodsite from "./components/ohmyfood/OhmyfoodSite"
import Restaurant from "./components/ohmyfood/Restaurant"
import Projects from "./components/projects/Projects"
import Panthere from "./components/panthere/Panthere"
import PanthereMain from "./components/panthere/PanthereMain"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/" element={<Landing />}>
        <Route path="/" element={<Projects />} />

        <Route path="/booki" element={<Bookisite />} />
        <Route path="/ohmyfood" element={<Ohmyfoodsite />} />
        <Route
          path="/ohmyfood/:name"
          element={<Restaurant />}
          errorElement={<Error />}
        />
        <Route path="/la_panthere" element={<Panthere />}>
          <Route
            path="/la_panthere"
            element={<PanthereMain goToContactPage={function (): void {}} />}
          />
        </Route>
      </Route>

      {/*<Route path="/kanap/*" element={<Kanap />} />
      <Route path="/hot_takes" element={<Hottakes />} />
      <Route path="/kasa/*" element={<Kasa />} />  */}
      <Route path="*" element={<Error />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
