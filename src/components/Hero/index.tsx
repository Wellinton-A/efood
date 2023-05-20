import {
  ImageHeroContainer,
  TypeSpan,
  DescContainer,
  TitleSpan
} from './hero.style'

import image from '../../assets/images_efood/capa.png'

const HeroPerfil = () => {
  return (
    <ImageHeroContainer style={{ backgroundImage: `url(${image})` }}>
      <DescContainer>
        <TypeSpan>Italiana</TypeSpan>
        <TitleSpan>Hioki Sushi</TitleSpan>
      </DescContainer>
    </ImageHeroContainer>
  )
}

export default HeroPerfil
