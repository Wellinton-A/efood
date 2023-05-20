import { Fragment } from 'react'
import DishCard from '../../components/Dish-Card'
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/Header-Perfil'
import HeroPerfil from '../../components/Hero'

import { DishesContainer } from './perfil.style'

const Perfil = () => {
  return (
    <Fragment>
      <HeaderPerfil />
      <HeroPerfil />
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
    </Fragment>
  )
}

export default Perfil
