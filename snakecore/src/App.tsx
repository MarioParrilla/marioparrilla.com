import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App

//la barra de busqueda se le pasa un array de los elementos de la lsita y la posicion para destacar la pos