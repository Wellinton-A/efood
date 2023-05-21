import styled, { keyframes, css } from 'styled-components'
import { colors } from '../../style/style'

type Props = {
  modal?: string
  cart?: string
}

const slideOpenigAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

export const DishesContainer = styled.div`
  max-width: 1024px;
  margin: 55px auto 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
`

export const ModalContainer = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(prop) => (prop.modal === 'true' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  width: 1024px;
  background-color: ${colors.tagsBackground};
  padding: 32px;
  z-index: 1;
  color: ${colors.restCardBackgroud};

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    margin-bottom: 24px;
  }

  & > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CloseContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  cursor: pointer;
`

export const PortionSpan = styled.span`
  font-size: 14px;
  margin-bottom: 24px;
`

export const AddtoCart = styled.span`
  background-color: ${colors.bodyBackground};
  color: ${colors.tagsBackground};
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  width: fit-content;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const CartModalContainer = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(prop) => (prop.cart === 'true' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const CartContainer = styled.div<Props>`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 100%;
  background-color: ${colors.tagsBackground};
  z-index: 1;
  padding: 32px 8px;

  ${({ cart }) =>
    cart === 'true' &&
    css`
      animation: ${slideOpenigAnimation} 0.5s ease-in-out forwards;
      animation-fill-mode: forwards;
    `};
`

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 16px;
`

export const CartSpan = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.heroBackground};
`

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.heroBackground};
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  margin-top: 40px;
`

export const GoToDelivery = styled.span`
  background-color: ${colors.heroBackground};
  color: ${colors.tagsBackground};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin-top: 16px;
`
