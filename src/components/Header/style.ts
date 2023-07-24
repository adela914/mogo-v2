import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: var(--primary-color-2);
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
`

export const Heading = styled(Link)`
  color: var(--primary-color-1);
  font-size: 40px;
  text-decoration: none;
`
