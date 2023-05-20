import Footer from '../../components/Footer'
import HeaderHome from '../../components/Header-home'
import RestaurantCard from '../../components/Restaurant-card'
import { ContainerHome } from './home.style'

const Home = () => {
  return (
    <>
      <HeaderHome />
      <ContainerHome>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </ContainerHome>
      <Footer />
    </>
  )
}

export default Home
