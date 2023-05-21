import styled from 'styled-components'
import { colors } from '../../style/style'
import { Link } from 'react-router-dom'

export const HeaderPerfilContainer = styled.header`
  background-color: ${colors.heroBackground};
  display: flex;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  margin: 60px auto;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.tagsBackground};

  span {
    cursor: pointer;
  }
`

export const HomeLink = styled(Link)`
  color: ${colors.tagsBackground};
`
