import styled from 'styled-components'
import { colors } from '../../style/style'

export const FooterContainer = styled.footer`
  height: 250px;
  background-color: ${colors.heroBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${colors.tagsBackground};
    font-size: 10px;
    margin-bottom: 40px;
    max-width: 480px;
    text-align: center;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 115px;
  margin-top: 40px;

  & > img {
    margin-bottom: 32px;
  }
`

export const ImageSocialContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    margin-right: 8px;
  }
`
