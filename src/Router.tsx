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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/" element={<Landing />} />

      {/*  <Route path="/booki" element={<SingleProject />} />
      <Route path="/ohmyfood" element={<Ohmyfood />} />
      <Route
        path="/ohmyfood/:name"
        element={<Restaurant />}
        errorElement={<Errorpage />}
      />
      <Route path="/la_panthere" element={<Panthere />} />
      <Route path="/kanap/*" element={<Kanap />} />
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
