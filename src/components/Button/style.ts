import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: var(--primary-color-1);
  border: none;
  min-height: 50px;
  padding: 15px 40px;
  border-radius: var(--border-radius-1);
  color: var(--primary-color-2);
  font-weight: var(--font-weight-4);
  font-size: var(--font-size-0);
  cursor: pointer;
  margin-top: 40px;

  &:disabled {
    background: var(--secondary-color-0);
    cursor: not-allowed;
  }
`
