import styled from 'styled-components'
import { colors } from '../../style/style'
import { Link } from 'react-router-dom'

export const HeaderPerfilContainer = styled.header`
  background-color: ${colors.heroBackground};
  display: flex;
`

export const HomeLink = styled(Link)`
  color: ${colors.tagsBackground};
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

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    ${HomeLink}:first-child {
      display: none;
    }

    & > span {
      padding: 16px;
    }
  }
`
