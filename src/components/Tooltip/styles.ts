import styled from 'styled-components'

export const TooltipContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`

export const TooltipChild = styled.div`
  cursor: pointer;
`

export const TooltipWrapper = styled.div`
  padding: 10px;
  background-color: grey;
  position: absolute;
  top: 120%;
  border-radius: 10px;
`
