import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import {
  selectCartContent,
  selectIsCartOpen,
  selectIsModalOpen
} from '../../store/cart/cart.selector'
import {
  handleShowCart,
  handleShowModal,
  voidCartContent
} from '../../store/cart/cart.reducer'

import { formatPrice } from '../Perfil'

import CartItem from '../../components/Cart-item'

import * as S from './modal.styles'
import { useState } from 'react'

const CartModal = () => {
  const [isDeliveryOpen, setIsDeliveryOpen] = useState<boolean>(false)
  const [isPayment, setIsPayment] = useState<boolean>(false)
  const [isConfirm, setIsConfirm] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: undefined,
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: undefined,
      month: undefined,
      year: undefined
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const isCartOpen = useSelector(selectIsCartOpen)
  const isModalOpen = useSelector(selectIsModalOpen)

  const cartContent = useSelector(selectCartContent)
  const dispatch = useDispatch()

  const handleModal = () => {
    dispatch(handleShowCart(false))
    dispatch(handleShowModal(false))
    setIsDeliveryOpen(false)
    setIsPayment(false)
    setIsConfirm(false)
  }

  const handleAddressOpen = () => {
    setIsDeliveryOpen(true)
    dispatch(handleShowCart(false))
  }

  const handleGotoPayment = () => {
    setIsDeliveryOpen(false)
    setIsPayment(true)
  }

  const handleBackToCart = () => {
    dispatch(handleShowCart(true))
    setIsDeliveryOpen(false)
  }

  const handleBackToAddress = () => {
    setIsDeliveryOpen(true)
    setIsPayment(false)
  }

  const handleConfirmPurchase = () => {
    setIsConfirm(true)
    setIsPayment(false)
  }

  const handleConclude = () => {
    dispatch(handleShowCart(false))
    dispatch(handleShowModal(false))
    setIsDeliveryOpen(false)
    setIsPayment(false)
    setIsConfirm(false)

    dispatch(voidCartContent([]))
  }

  const totalValue = cartContent.reduce((acc: number, dish) => {
    return acc + dish.quantity * dish.preco
  }, 0)

  return (
    <S.CartModalContainer asideModal={isModalOpen.toString()}>
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
            <S.StyledSpan onClick={handleAddressOpen}>
              Continuar para a entrega
            </S.StyledSpan>
          </>
        ) : (
          <S.CartSpan>Seu carrinho esta vazio...</S.CartSpan>
        )}
      </S.CartContainer>
      <form onSubmit={formik.handleSubmit}>
        <S.CartContainer asideModal={isDeliveryOpen.toString()}>
          <div className="containerForm">
            <h3>Entrega</h3>
            <label htmlFor="receiver">Quem ira receber</label>
            <input
              type="text"
              id="receiver"
              value={formik.values.receiver}
              onChange={formik.handleChange}
            />
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              value={formik.values.city}
              onChange={formik.handleChange}
            />
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '34px' }}>
                <label htmlFor="zipCode">CEP</label>
                <input
                  type="text"
                  id="zipCode"
                  value={formik.values.zipCode}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label htmlFor="number">Numero</label>
                <input
                  type="text"
                  id="number"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <label htmlFor="complement">Complemento(opcional)</label>
            <input
              type="text"
              id="complement"
              value={formik.values.complement}
              onChange={formik.handleChange}
            />
          </div>
          <S.StyledSpan onClick={handleGotoPayment}>
            Continuar com o pagamento
          </S.StyledSpan>
          <S.StyledSpan style={{ marginTop: '8px' }} onClick={handleBackToCart}>
            Voltar para o carrinho
          </S.StyledSpan>
        </S.CartContainer>
        <S.CartContainer asideModal={isPayment.toString()}>
          <div className="containerForm">
            <h3>Pagamento - Valor a pagar {formatPrice(totalValue)}</h3>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              type="text"
              id="cardName"
              value={formik.values.cardName}
              onChange={formik.handleChange}
            />
            <div style={{ display: 'flex' }}>
              <div style={{ width: '228px', marginRight: '30px' }}>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={formik.values.cardNumber}
                  onChange={formik.handleChange}
                />
              </div>
              <div style={{ width: '87px' }}>
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  value={formik.values.cvv}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '34px' }}>
                <label htmlFor="month">Mês de vencimento</label>
                <input
                  type="text"
                  id="month"
                  value={formik.values.month}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label htmlFor="year">Ano de vencimento</label>
                <input
                  type="text"
                  id="year"
                  value={formik.values.year}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
          </div>
          <S.SubmitButton type="submit" onClick={handleConfirmPurchase}>
            Finalizar pagamento
          </S.SubmitButton>
          <S.StyledSpan
            style={{ marginTop: '8px' }}
            onClick={handleBackToAddress}
          >
            Voltar para a edição de endereço
          </S.StyledSpan>
        </S.CartContainer>
      </form>
      <S.CartContainer asideModal={isConfirm.toString()}>
        <h3>Pedido realizado - </h3>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <S.StyledSpan onClick={handleConclude}>Concluir</S.StyledSpan>
      </S.CartContainer>
    </S.CartModalContainer>
  )
}

export default CartModal
