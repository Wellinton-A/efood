import { TagStyled } from './tags.style'

export type Prop = {
  size?: string
  children?: string
}

const Tag = ({ children }: Prop) => {
  return <TagStyled>{children}</TagStyled>
}

export default Tag
