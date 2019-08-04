import styled from 'styled-components'
import { styles } from '../utils'

const BannerButton = styled.button`
  display: block;
  color: ${ styles.colors.mainWhite };
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  ${ styles.border({ color:`${ styles.colors.mainWhite }` })}
  margin-bottom: 1rem;
  ${ styles.transition({})};
  &:hover{
    background: ${ styles.colors.mainWhite };
    color: ${ styles.colors.mainBlack };
    cursor: pointer;
  }
`
// this button does not have the position so it can be used in different situation.
// you have to specify it in the style where you want to use it (in this case in index.js)

export { BannerButton }