import { Fragment, useEffect, useState } from 'react'

import DishCard from '../../components/Dish-Card'
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/Header-Perfil'
import HeroPerfil from '../../components/Hero'

import { Restaurant, Dish } from '../Home'

import { DishesContainer } from './perfil.style'
import { useParams } from 'react-router-dom'

const rest: Restaurant = {
  id: 0,
  titulo: '',
  destacado: false,
  descricao: '',
  tipo: '',
  avaliacao: 0,
  capa: '',
  cardapio: []
}

const Perfil = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>(rest)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (resp) => resp.json().then((resp) => setRestaurant(resp))
    )
  }, [id])

  return (
    <Fragment>
      <HeaderPerfil />
      <HeroPerfil restaurant={restaurant} />
      <DishesContainer>
        {restaurant.cardapio.map((dish: Dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </DishesContainer>
      <Footer />
    </Fragment>
  )
}

export default Perfil
