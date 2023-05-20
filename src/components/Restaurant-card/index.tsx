import star from '../../assets/images_efood/estrela.png'
import Tag from '../Tags'

import imageCard from '../../assets/images_efood/Hioki_sushi.png'

import {
  ImageContainer,
  KnowMoreConainer,
  RateContainer,
  RestCardContainer,
  RestInfoContainer,
  TagHighlight,
  TagNormal,
  TagsContainer
} from './rest.card.style'

const RestaurantCard = () => {
  return (
    <RestCardContainer>
      <ImageContainer style={{ backgroundImage: `url(${imageCard})` }}>
        <TagsContainer>
          <TagHighlight size="sm">Destaque da semana</TagHighlight>
          <TagNormal size="sm">Japonesa</TagNormal>
        </TagsContainer>
      </ImageContainer>
      <RestInfoContainer>
        <span>Hioki Sushi</span>
        <RateContainer>
          <span>4.9</span>
          <img src={star} alt="star" />
        </RateContainer>
      </RestInfoContainer>
      <span>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </span>
      <KnowMoreConainer>
        <Tag>Saiba mais</Tag>
      </KnowMoreConainer>
    </RestCardContainer>
  )
}

export default RestaurantCard
