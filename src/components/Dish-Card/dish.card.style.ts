import styled from 'styled-components'
import { colors } from '../../style/style'

export const CardContainer = styled.div`
  width: 320px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.tagsBackground};
  color: ${colors.heroBackground};

  p {
    font-size: 14px;
    line-height: 22px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
  }
`

export const AddButton = styled.span`
  background-color: ${colors.heroBackground};
  color: ${colors.tagsBackground};
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-top: 8px;
  cursor: pointer;
`
