import styled from 'styled-components'
import { colors } from '../../style/style'

export const ImageHeroContainer = styled.div`
  position: relative;
  display: flex;
  height: 280px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after {
    position: absolute;
    background-color: #000000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  @media (max-width: 767px) {
    background-size: cover;
  }
`

export const TitleSpan = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: ${colors.restCardBackgroud};
  margin-top: 150px;
`

export const DescContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 90%;

    ${TitleSpan} {
      font-size: 24px;
    }
  }
`

export const TypeSpan = styled.span`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.restCardBackgroud};
  margin-top: 24px;
`
