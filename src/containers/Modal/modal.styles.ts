import styled, { keyframes, css } from 'styled-components'
import { colors } from '../../style/style'

type Props = {
  asideModal?: string
}

const slideOpenigAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideClosingAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
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
  display: ${(prop) => (prop.asideModal === 'true' ? 'flex' : 'none')};
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
  display: ${(props) => (props.asideModal === 'true' ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 100%;
  background-color: ${colors.tagsBackground};
  z-index: 1;
  padding: 32px 8px;
  color: ${colors.heroBackground};

  .containerForm {
    font-size: 14px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    width: 100%;

    h3 {
      font-size: 16px;
      margin-bottom: 16px;
    }

    input {
      width: 100%;
      height: 32px;
      border: none;
      margin: 8px 0;
      padding: 8px;
      font-size: 14px;
      font-weight: bold;
      background-color: ${colors.heroBackground};
      outline-color: ${colors.tagsBackground};
    }
  }

  p {
    margin-bottom: 24px;
  }

  h3 {
    width: 100%;
    margin-bottom: 16px;
  }

  ${({ asideModal }) =>
    asideModal === 'true' &&
    css`
      animation: ${slideOpenigAnimation} 0.5s ease-in-out forwards;
      animation-fill-mode: forwards;
    `}

  ${({ asideModal }) =>
    asideModal === 'false' &&
    css`
      animation: ${slideClosingAnimation} 0.5s ease-in-out forwards;
      animation-fill-mode: forwards;
    `}
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

export const StyledSpan = styled.span`
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

export const SubmitButton = styled.button`
  border: none;
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
