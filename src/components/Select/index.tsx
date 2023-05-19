import { ErrorText, StyledSelect, Wrapper } from './style'

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
  forId: string
  label: string
  width?: string
  required?: boolean
  value: string
  errorMsg?: string
}

export const Select = (props: SelectProps) => {
  const { children, forId, label, width, required, errorMsg, ...other } = props
  return (
    <Wrapper>
      {label && (
        <label htmlFor={forId}>
          {label}
          {required && '*'}
        </label>
      )}
      <StyledSelect {...other} id={forId} width={width}>
        <option disabled value="">
          {' '}
          -- select an option --{' '}
        </option>
        {children}
      </StyledSelect>
      {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
    </Wrapper>
  )
}
