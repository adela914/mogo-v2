import { StyledButton } from './style'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export const Button = (props: ButtonProps) => {
  const { text, ...other } = props
  return <StyledButton {...other}>{text}</StyledButton>
}
