import { Dish } from '../../containers/Home'

import * as S from './dish.card.style'

type Props = {
  dish: Dish
}

const DishCard = ({ dish }: Props) => {
  const { foto, descricao, nome } = dish

  return (
    <S.CardContainer>
      <img src={foto} alt="Pizza" />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <S.AddButton>Adicionar ao carrinho</S.AddButton>
    </S.CardContainer>
  )
}

export default DishCard
