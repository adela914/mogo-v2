import { ErrorText, StyledDatePicker, Wrapper } from './style'

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  forId: string
  label: string
  errorMsg?: string
}
export const DatePicker = (props: DatePickerProps) => {
  const { forId, label, required, errorMsg, ...other } = props
  return (
    <Wrapper>
      <label htmlFor={forId}>
        {label && (
          <label htmlFor={forId}>
            {label}
            {required && '*'}
          </label>
        )}
      </label>
      <StyledDatePicker {...other} type="date" id={forId} />
      {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
    </Wrapper>
  )
}
