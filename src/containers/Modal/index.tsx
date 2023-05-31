import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
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
import { usePurchaseMutation } from '../../service/api'

const CartModal = () => {
  const [isDeliveryOpen, setIsDeliveryOpen] = useState<boolean>(false)
  const [isPayment, setIsPayment] = useState<boolean>(false)
  const [isConfirm, setIsConfirm] = useState<boolean>(false)

  const [purchase, { data }] = usePurchaseMutation()

  const formik = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter um minimo de 5 caracteres.')
        .required('O nome de quem ira receber e obrigatorio.'),
      address: Yup.string().required('O endereco e obrigatorio.'),
      city: Yup.string().required('A cidade e obrigatorio.'),
      zipCode: Yup.string()
        .min(8, 'O CEP precisa ter 8 numeros.')
        .max(8, 'O CEP precisa ter 8 numeros.')
        .required('O CEP e e obrigatorio.'),
      number: Yup.string().required('O numero da casa e obrigatorio.'),
      cardName: Yup.string()
        .min(5, 'O campo precisa ter um minimo de 5 caracteres.')
        .required('O campo e obrigatorio.'),
      cardNumber: Yup.string()
        .min(16, 'O campo precisa ter 16 caracteres.')
        .max(16, 'O campo precisa ter 16 caracteres.')
        .required('O campo e obrigatorio.'),
      cvv: Yup.string()
        .min(3, 'O campo precisa ter 3caracteres.')
        .max(3, 'O campo precisa ter 3 caracteres.')
        .required('O campo e obrigatorio.'),
      month: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres.')
        .required('O campo e obrigatorio.'),
      year: Yup.string()
        .min(4, 'O campo precisa ter 4 caracteres.')
        .required('O campo e obrigatorio.')
    }),
    onSubmit: (values, { resetForm }) => {
      setTimeout(
        () =>
          purchase({
            products: cartContent.map((product) => {
              return { id: product.id, price: product.preco }
            }),
            delivery: {
              receiver: values.receiver,
              adress: {
                description: values.address,
                city: values.city,
                zipCode: values.zipCode,
                number: Number(values.number),
                complement: values.complement
              }
            },
            payment: {
              card: {
                name: values.cardName,
                number: values.cardNumber,
                code: Number(values.cvv),
                expires: {
                  month: Number(values.month),
                  year: Number(values.year)
                }
              }
            }
          }),
        3000
      )
      handleConfirmPurchase()
      dispatch(voidCartContent([]))
      resetForm()
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
  }

  const totalValue = cartContent.reduce((acc: number, dish) => {
    return acc + dish.quantity * dish.preco
  }, 0)

  const getErrorMessage = (fieldName: string, messageError?: string) => {
    const touchedField = fieldName in formik.touched
    const errorMessase = fieldName in formik.errors

    if (touchedField && errorMessase) return messageError
    return ''
  }

  return (
    <S.CartModalContainer asidemodal={isModalOpen.toString()}>
      <S.Overlay onClick={handleModal}></S.Overlay>
      <S.CartContainer asidemodal={isCartOpen.toString()}>
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
        <S.CartContainer asidemodal={isDeliveryOpen.toString()}>
          <div className="containerForm">
            <h3>Entrega</h3>
            <label htmlFor="receiver">Quem ira receber</label>
            <input
              type="text"
              id="receiver"
              value={formik.values.receiver}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small style={{ marginBottom: '8px' }}>
              {getErrorMessage('receiver', formik.errors.receiver)}
            </small>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small style={{ marginBottom: '8px' }}>
              {getErrorMessage('address', formik.errors.address)}
            </small>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small style={{ marginBottom: '8px' }}>
              {getErrorMessage('city', formik.errors.city)}
            </small>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '34px' }}>
                <label htmlFor="zipCode">CEP</label>
                <input
                  type="text"
                  id="zipCode"
                  value={formik.values.zipCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <small style={{ marginBottom: '8px' }}>
                  {getErrorMessage('zipCode', formik.errors.zipCode)}
                </small>
              </div>
              <div>
                <label htmlFor="number">Numero</label>
                <input
                  type="text"
                  id="number"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <small style={{ marginBottom: '8px' }}>
                  {getErrorMessage('number', formik.errors.number)}
                </small>
              </div>
            </div>
            <label htmlFor="complement">Complemento(opcional)</label>
            <input
              type="text"
              id="complement"
              value={formik.values.complement}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <S.StyledSpan onClick={handleGotoPayment}>
            Continuar com o pagamento
          </S.StyledSpan>
          <S.StyledSpan style={{ marginTop: '8px' }} onClick={handleBackToCart}>
            Voltar para o carrinho
          </S.StyledSpan>
        </S.CartContainer>
        <S.CartContainer asidemodal={isPayment.toString()}>
          <div className="containerForm">
            <h3>Pagamento - Valor a pagar {formatPrice(totalValue)}</h3>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              type="text"
              id="cardName"
              value={formik.values.cardName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <small style={{ marginBottom: '8px' }}>
              {getErrorMessage('cardName', formik.errors.cardName)}
            </small>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '228px', marginRight: '30px' }}>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={formik.values.cardNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <small style={{ marginBottom: '8px' }}>
                  {getErrorMessage('cardNumber', formik.errors.cardNumber)}
                </small>
              </div>
              <div style={{ width: '87px' }}>
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  value={formik.values.cvv}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <small style={{ marginBottom: '8px' }}>
                  {getErrorMessage('cvv', formik.errors.cvv)}
                </small>
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
                  onBlur={formik.handleBlur}
                />
                <small style={{ marginBottom: '8px' }}>
                  {getErrorMessage('month', formik.errors.month)}
                </small>
              </div>
              <div>
                <label htmlFor="year">Ano de vencimento</label>
                <input
                  type="text"
                  id="year"
                  value={formik.values.year}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <small style={{ marginBottom: '16px' }}>
                  {getErrorMessage('year', formik.errors.year)}
                </small>
              </div>
            </div>
          </div>
          <S.SubmitButton type="submit">Finalizar pagamento</S.SubmitButton>
          <S.StyledSpan
            style={{ marginTop: '8px' }}
            onClick={handleBackToAddress}
          >
            Voltar para a edição de endereço
          </S.StyledSpan>
        </S.CartContainer>
      </form>
      <S.CartContainer asidemodal={isConfirm.toString()}>
        {data ? (
          <>
            <h3>Pedido realizado - ORDER_ID:{data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <S.StyledSpan onClick={handleConclude}>Concluir</S.StyledSpan>
          </>
        ) : (
          <S.SpinnerContainer>
            <S.SpinnerInner />
          </S.SpinnerContainer>
        )}
      </S.CartContainer>
    </S.CartModalContainer>
  )
}

export default CartModal
