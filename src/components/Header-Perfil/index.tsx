import { useDispatch, useSelector } from 'react-redux'

import { handleShowCart } from '../../store/cart/cart.reducer'

import Logo from '../../assets/images_efood/logo.svg'
import * as S from './header.perfil.style'

import HeroImage from '../../assets/images_efood/fundo.png'
import { selectCartContent } from '../../store/cart/cart.selector'

const HeaderPerfil = () => {
  const cartContent = useSelector(selectCartContent)
  const dispatch = useDispatch()

  const handleCart = () => {
    dispatch(handleShowCart(true))
  }

  const numberOfItems: number = cartContent.reduce((acc: number, dish) => {
    return acc + dish.quantity
  }, 0)

  return (
    <S.HeaderPerfilContainer style={{ backgroundImage: `url(${HeroImage})` }}>
      <S.ContentContainer>
        <S.HomeLink to="/"> Restaurantes</S.HomeLink>
        <S.HomeLink to="/">
          <img src={Logo} alt="logo efood" />
        </S.HomeLink>
        <span onClick={handleCart}>{numberOfItems} produto(s) no carrinho</span>
      </S.ContentContainer>
    </S.HeaderPerfilContainer>
  )
}

export default HeaderPerfil
