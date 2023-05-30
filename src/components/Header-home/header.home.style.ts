import styled from 'styled-components'
import { colors } from '../../style/style'

export const HeaderContainer = styled.header`
  background-color: ${colors.heroBackground};
  width: 100%;
  height: 300px;
`

export const HeaderContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  width: 125px;
  margin-top: 40px;
`

export const StyledSpan = styled.span`
  font-size: 36px;
  font-weight: bold;
  color: ${colors.tagsBackground};
  margin-bottom: 36px;
  max-width: 550px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
    width: 90%;
  }
`
