import { render, screen } from '@testing-library/react'
import { TextField } from '../index'

test('renders text field correctly with a label', () => {
  render(<TextField label="label" forId="testing" readOnly />)

  const inputLabel = screen.getByLabelText('label')
  expect(inputLabel).toBeInTheDocument()
})

test('adds * when the field is required', () => {
  render(<TextField label="label" forId="testing" required readOnly />)

  const inputLabel = screen.getByLabelText('label*')
  expect(inputLabel).toBeInTheDocument()
})

test('shows error message when it exists', () => {
  render(<TextField label="label" forId="testing" errorMsg="error is here" readOnly />)

  const errorMsg = screen.getByText('error is here')
  expect(errorMsg).toBeInTheDocument()
})
