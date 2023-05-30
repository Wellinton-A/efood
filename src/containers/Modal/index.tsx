import { useDispatch, useSelector } from 'react-redux'
import {
  selectCartContent,
  selectIsCartOpen
} from '../../store/cart/cart.selector'
import { handleShowCart } from '../../store/cart/cart.reducer'

import { formatPrice } from '../Perfil'

import CartItem from '../../components/Cart-item'

import * as S from './modal.styles'

const CartModal = () => {
  const cartContent = useSelector(selectCartContent)
  const isCartOpen = useSelector(selectIsCartOpen)
  const dispatch = useDispatch()

  const handleModal = () => {
    dispatch(handleShowCart(false))
  }

  const totalValue = cartContent.reduce((acc: number, dish) => {
    return acc + dish.quantity * dish.preco
  }, 0)

  return (
    <>
      <S.CartModalContainer asideModal={isCartOpen.toString()}>
        <S.Overlay onClick={handleModal}></S.Overlay>
        <S.CartContainer asideModal={isCartOpen.toString()}>
          {cartContent.length > 0 ? (
            <>
              <S.CartContent>
                {cartContent.map((dish) => (
                  <CartItem key={dish.id} dish={dish} />
                ))}
              </S.CartContent>
              <S.TotalValue>
                <span>Valor total</span>
                <span>{formatPrice(totalValue)}</span>
              </S.TotalValue>
              <S.GoToDelivery>Continuar para a entrega</S.GoToDelivery>
            </>
          ) : (
            <S.CartSpan>Seu carrinho esta vazio...</S.CartSpan>
          )}
        </S.CartContainer>
      </S.CartModalContainer>
    </>
  )
}

export default CartModal
