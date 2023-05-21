import styled from 'styled-components'
import { colors } from '../../style/style'

export const ContainerHome = styled.div`
  max-width: 1024px;
  margin: 60px auto 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;
  grid-row-gap: 48px;

  & > h3 {
    font-size: 32px;
    font-weight: bold;
    color: ${colors.tagsBackground};
  }
`
