import { useDispatch } from 'react-redux'

import {
  CartDish,
  decreaseItem,
  increaseItem,
  removeFromCart
} from '../../store/cart/cart.reducer'

import remove from '../../assets/images_efood/lixeira-de-reciclagem 1.png'

import * as S from './cart.item.style'
import { parseToBrl } from '../../utils/utils'

type Props = {
  dish: CartDish
}

const CartItem = ({ dish }: Props) => {
  const { foto, nome, preco, quantity } = dish
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeFromCart(dish))
  }

  const handleIncrease = () => {
    dispatch(increaseItem(dish))
  }

  const handleDecrease = () => {
    dispatch(decreaseItem(dish))
  }

  return (
    <S.CartItemContainer>
      <S.RemoveContainer onClick={handleRemove}>
        <img src={remove} alt="lixeira icon" />
      </S.RemoveContainer>
      <img src={foto} />
      <S.InfoContainer>
        <span>{nome}</span>
        <S.ValueContainer>
          <S.NumbersQuantiy>
            <S.IncSpan onClick={handleDecrease}>{'<'}</S.IncSpan>
            <span>{quantity}</span>
            <S.IncSpan onClick={handleIncrease}>{'>'}</S.IncSpan>
          </S.NumbersQuantiy>
          <S.PriceSpan>X {parseToBrl(preco)}</S.PriceSpan>
        </S.ValueContainer>
      </S.InfoContainer>
    </S.CartItemContainer>
  )
}

export default CartItem
