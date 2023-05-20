import styled from 'styled-components'

import { TagStyled } from '../Tags/tags.style'
import { colors } from '../../style/style'

export const RestCardContainer = styled.div`
  width: 472px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.tagsBackground};
  background-color: ${colors.restCardBackgroud};

  & > span {
    color: ${colors.tagsBackground};
    font-size: 14px;
    margin: 0 8px 16px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  height: 217px;
`

export const TagsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  right: 16px;
  top: 16px;
`

export const TagNormal = styled(TagStyled)`
  cursor: initial;
`

export const TagHighlight = styled(TagNormal)`
  display: none;
  margin-right: 8px;
`

export const RestInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 8px 16px 8px;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.tagsBackground};
`

export const RateContainer = styled.div`
  display: flex;
  align-itens: center;

  span {
    margin-right: 8px;
  }
`

export const KnowMoreConainer = styled.div`
  margin-left: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`
