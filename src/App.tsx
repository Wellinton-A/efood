import { Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Perfil from './containers/Perfil'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio/:id" element={<Perfil />} />
    </Routes>
  )
}

export default App
