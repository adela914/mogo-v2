import { ReactElement } from 'react'
import { TooltipChild, TooltipContainer, TooltipWrapper } from './styles'

export const Tooltip = ({
  children,
  isHovered
}: {
  children: ReactElement
  isHovered: boolean
}) => {
  return (
    <TooltipContainer>
      <TooltipChild>{children}</TooltipChild>
      {isHovered && <TooltipWrapper>Here is Tooltip</TooltipWrapper>}
    </TooltipContainer>
  )
}
