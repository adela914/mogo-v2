import styled from 'styled-components'

export const StyledDatePicker = styled.input`
  border: 1px solid;
  border-radius: var(--border-radius-0);
  height: 40px;
  padding: 10px 16px;
  width: ${({ width }) => (width ? width : '260px')};
  font-size: var(--font-size-0);
  margin-top: 12px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;

  label {
    font-weight: var(--font-weight-3);
  }
`

export const ErrorText = styled.span`
  color: var(--error-color-0);
  margin-top: 6px;
`
