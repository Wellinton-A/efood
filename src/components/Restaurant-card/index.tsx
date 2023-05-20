import star from '../../assets/images_efood/estrela.png'

import imageCard from '../../assets/images_efood/Hioki_sushi.png'

import * as S from './rest.card.style'

const RestaurantCard = () => {
  return (
    <S.RestCardContainer>
      <S.ImageContainer style={{ backgroundImage: `url(${imageCard})` }}>
        <S.TagsContainer>
          <S.TagHighlight size="sm">Destaque da semana</S.TagHighlight>
          <S.TagNormal size="sm">Japonesa</S.TagNormal>
        </S.TagsContainer>
      </S.ImageContainer>
      <S.RestInfoContainer>
        <span>Hioki Sushi</span>
        <S.RateContainer>
          <span>4.9</span>
          <img src={star} alt="star" />
        </S.RateContainer>
      </S.RestInfoContainer>
      <span>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </span>
      <S.KnowMoreConainer>
        <S.LinkTag to="/cardapio">Saiba mais</S.LinkTag>
      </S.KnowMoreConainer>
    </S.RestCardContainer>
  )
}

export default RestaurantCard
