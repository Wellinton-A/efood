import logo from '../../assets/images_efood/logo.svg'
import instagram from '../../assets/images_efood/socials/instagram-round-svgrepo1.png'
import facebook from '../../assets/images_efood/socials/facebook-round-svgrepo-.png'
import twitter from '../../assets/images_efood/socials/twitter-2-svgrepo.png'
import {
  FooterContainer,
  ImageSocialContainer,
  LogoContainer
} from './footer.style'

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <img src={logo} alt="logo efood" />
        <ImageSocialContainer>
          <img src={instagram} alt="logo instagram" />
          <img src={facebook} alt="logo facebook" />
          <img src={twitter} alt="logo twitter" />
        </ImageSocialContainer>
      </LogoContainer>
      <span>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </span>
    </FooterContainer>
  )
}

export default Footer
