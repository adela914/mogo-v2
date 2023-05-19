import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;

  label {
    font-weight: var(--font-weight-3);
  }
`
export const StyledSelect = styled.select<{ width?: string }>`
  min-height: 40px;
  border-radius: var(--border-radius-0);
  border: 1px solid;
  text-transform: capitalize;
  padding: 10px 16px;
  margin-top: 12px;
  width: ${({ width }) => (width ? width : '260px')};
`

export const ErrorText = styled.span`
  color: var(--error-color-0);
  margin-top: 6px;
`
