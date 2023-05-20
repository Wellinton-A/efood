import Logo from '../../assets/images_efood/logo.svg'
import * as S from './header.perfil.style'

import HeroImage from '../../assets/images_efood/fundo.png'

const HeaderPerfil = () => {
  return (
    <S.HeaderPerfilContainer style={{ backgroundImage: `url(${HeroImage})` }}>
      <S.ContentContainer>
        <S.HomeLink to="/"> Restaurantes</S.HomeLink>
        <S.HomeLink to="/">
          <img src={Logo} alt="logo efood" />
        </S.HomeLink>
        <span>0 produto(s) no carrinho</span>
      </S.ContentContainer>
    </S.HeaderPerfilContainer>
  )
}

export default HeaderPerfil
