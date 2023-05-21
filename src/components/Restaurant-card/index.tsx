import star from '../../assets/images_efood/estrela.png'

import { Restaurant } from '../../containers/Home'

import * as S from './rest.card.style'

type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => {
  const { id, titulo, destacado, tipo, avaliacao, descricao, capa } = restaurant

  return (
    <S.RestCardContainer>
      <S.ImageContainer style={{ backgroundImage: `url(${capa})` }}>
        <S.TagsContainer>
          <S.TagHighlight destacado={destacado.toString()} size="sm">
            Destaque da semana
          </S.TagHighlight>
          <S.TagNormal size="sm">{tipo}</S.TagNormal>
        </S.TagsContainer>
      </S.ImageContainer>
      <S.RestInfoContainer>
        <span>{titulo}</span>
        <S.RateContainer>
          <span>{avaliacao}</span>
          <img src={star} alt="star" />
        </S.RateContainer>
      </S.RestInfoContainer>
      <span>{descricao}</span>
      <S.KnowMoreConainer>
        <S.LinkTag to={`/cardapio/${id}`}>Saiba mais</S.LinkTag>
      </S.KnowMoreConainer>
    </S.RestCardContainer>
  )
}

export default RestaurantCard
