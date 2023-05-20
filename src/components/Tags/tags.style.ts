import styled from 'styled-components'

import { colors } from '../../style/style'

import { Prop } from '.'

export const TagStyled = styled.span<Prop>`
  background-color: ${colors.tagsBackground};
  color: ${colors.bodyBackground};
  font-size: ${(props) => (props.size === 'sm' ? '12px' : '14px')};
  padding: 6px;
  cursor: pointer;
`
