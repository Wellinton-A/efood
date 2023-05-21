import {
  ImageHeroContainer,
  TypeSpan,
  DescContainer,
  TitleSpan
} from './hero.style'

import { Restaurant } from '../../containers/Home'

type Props = {
  restaurant: Restaurant
}

const HeroPerfil = ({ restaurant }: Props) => {
  const { capa, tipo, titulo } = restaurant

  return (
    <ImageHeroContainer style={{ backgroundImage: `url(${capa})` }}>
      <DescContainer>
        <TypeSpan>{tipo}</TypeSpan>
        <TitleSpan>{titulo}</TitleSpan>
      </DescContainer>
    </ImageHeroContainer>
  )
}

export default HeroPerfil
