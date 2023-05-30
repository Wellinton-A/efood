import styled from 'styled-components'
import { colors } from '../../style/style'

type Props = {
  modal?: string
}

export const DishesContainer = styled.div`
  max-width: 1024px;
  margin: 55px auto 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: 1024px) {
    width: 90%;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-column-gap: 24px;
  }

  @media (max-width: 767px) {
    width: 90%;
    grid-template-columns: 1fr;
    justify-items: center;
  }
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

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    width: 90%;
    flex-direction: column;

    h3 {
      margin-top: 16px;
    }
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
