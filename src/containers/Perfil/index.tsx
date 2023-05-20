import DishCard from '../../components/Dish-Card'
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/Header-Perfil'

import { DishesContainer } from './perfil.style'

const Perfil = () => {
  return (
    <>
      <HeaderPerfil />
      <DishesContainer>
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </DishesContainer>
      <Footer />
    </>
  )
}

export default Perfil
