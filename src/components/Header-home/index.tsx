import * as S from './header.home.style'

import heroImage from '../../assets/images_efood/fundo.png'
import logo from '../../assets/images_efood/logo.svg'

const HeaderHome = () => {
  return (
    <S.HeaderContainer style={{ backgroundImage: `url(${heroImage})` }}>
      <S.HeaderContent>
        <S.LogoContainer>
          <h1>
            <img src={logo} alt="lofo efood" />
          </h1>
        </S.LogoContainer>
        <S.StyledSpan>
          Viva experiências gastronômicas no conforto da sua casa
        </S.StyledSpan>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

export default HeaderHome
