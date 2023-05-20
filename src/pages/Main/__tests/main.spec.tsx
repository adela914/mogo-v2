import { render, screen } from '@testing-library/react'
import { Main } from '..'

test('renders text field correctly with a label', () => {
  render(<Main />)

  expect(screen.getByText('here is main')).toBeInTheDocument()
})
