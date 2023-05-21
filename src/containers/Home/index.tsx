import Footer from '../../components/Footer'
import HeaderHome from '../../components/Header-home'
import RestaurantCard from '../../components/Restaurant-card'

import { ContainerHome } from './home.style'
import { useGetRestarantsQuery } from '../../service/api'

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
  const { data: restaurants, isLoading } = useGetRestarantsQuery()

  return (
    <>
      <HeaderHome />
      <ContainerHome>
        {isLoading ? (
          <h3>Carregando</h3>
        ) : (
          restaurants?.map((rest) => (
            <RestaurantCard key={rest.id} restaurant={rest} />
          ))
        )}
      </ContainerHome>
      <Footer />
    </>
  )
}

export default Home
