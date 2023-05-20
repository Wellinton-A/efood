import Pizza from '../../assets/images_efood/Pizza_marguerita.png'

import * as S from './dish.card.style'

const DishCard = () => {
  return (
    <S.CardContainer>
      <img src={Pizza} alt="Pizza" />
      <h3>Pizza Marguerita</h3>
      <p>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </p>
      <S.AddButton>Adicionar ao carrinho</S.AddButton>
    </S.CardContainer>
  )
}

export default DishCard
