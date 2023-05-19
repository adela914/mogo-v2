import { ErrorText, StyledInput, Wrapper } from './style'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  width?: string
  errorMsg?: string
  forId: string
}
export const TextField = (props: TextFieldProps) => {
  const { label, width, required, forId, value, errorMsg, ...other } = props
  return (
    <Wrapper>
      {label && (
        <label htmlFor={forId}>
          {label}
          {required && '*'}
        </label>
      )}
      <StyledInput {...other} value={value || ''} width={width} id={forId} />
      {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
    </Wrapper>
  )
}
