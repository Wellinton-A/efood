import styled from 'styled-components'
import { colors } from '../../style/style'

export const CartItemContainer = styled.div`
  position: relative;
  width: 344px;
  display: flex;
  padding: 8px;
  background-color: ${colors.heroBackground};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  color: ${colors.tagsBackground};

  & > span {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }
`

export const ValueContainer = styled.div`
  display: flex;
  font-size: 14px;
  gap: 16px;
  align-items: center;
`

export const PriceSpan = styled.span``

export const IncSpan = styled.span`
  font-size: 20px;
  cursor: pointer;
`

export const NumbersQuantiy = styled.div`
  display: flex;
  font-size: 14px;
  gap: 4px;
  align-items: center;
`

export const RemoveContainer = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
  cursor: pointer;

  & > img {
    width: 16px;
    height: 16px;
  }
`
