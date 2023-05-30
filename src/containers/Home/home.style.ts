import styled from 'styled-components'
import { colors } from '../../style/style'

export const ContainerHome = styled.div`
  max-width: 1024px;
  margin: 60px auto 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;
  grid-row-gap: 48px;
  justify-items: center;

  & > h3 {
    font-size: 32px;
    font-weight: bold;
    color: ${colors.tagsBackground};
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    width: 90%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`
