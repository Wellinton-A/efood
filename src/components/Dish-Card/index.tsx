import { useDispatch } from 'react-redux'
import { Dish } from '../../containers/Home'

import * as S from './dish.card.style'
import { setContentModal, setModal } from '../../store/modal/modal.reducer'

type Props = {
  dish: Dish
}

const DishCard = ({ dish }: Props) => {
  const { foto, descricao, nome } = dish

  const dispatch = useDispatch()

  const handlerModal = () => {
    dispatch(setContentModal(dish))
    dispatch(setModal(true))
  }

  return (
    <S.CardContainer>
      <img src={foto} alt="Pizza" />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <S.AddButton onClick={handlerModal}>Adicionar ao carrinho</S.AddButton>
    </S.CardContainer>
  )
}

export default DishCard
