import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import HeaderHome from '../../components/Header-home'
import RestaurantCard from '../../components/Restaurant-card'

import { ContainerHome } from './home.style'

export type Dish = {
  foto: string
  preco: number
  id: number
  descricao: string
  porcao: string
  nome: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]
}

const Home = () => {
  const [restaurants, SetRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((resp) => resp.json())
      .then((resp) => SetRestaurants(resp))
  }, [])

  return (
    <>
      <HeaderHome />
      <ContainerHome>
        {restaurants.map((rest) => (
          <RestaurantCard key={rest.id} restaurant={rest} />
        ))}
      </ContainerHome>
      <Footer />
    </>
  )
}

export default Home
