import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import { PlacePage } from "../pages/place"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/place' element={<PlacePage />} />
      </Routes>
    </BrowserRouter>
  )
}

