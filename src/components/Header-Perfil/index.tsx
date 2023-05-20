import Logo from '../../assets/images_efood/logo.svg'
import {
  ContentContainer,
  HeaderPerfilContainer,
  HomeLink
} from './header.perfil.style'

import HeroImage from '../../assets/images_efood/fundo.png'

const HeaderPerfil = () => {
  return (
    <HeaderPerfilContainer style={{ backgroundImage: `url(${HeroImage})` }}>
      <ContentContainer>
        <HomeLink to="/"> Restaurantes</HomeLink>
        <HomeLink to="/">
          <img src={Logo} alt="logo efood" />
        </HomeLink>
        <span>0 produto(s) no carrinho</span>
      </ContentContainer>
    </HeaderPerfilContainer>
  )
}

export default HeaderPerfil
