import { render, screen } from '@testing-library/react'
import { Accordion } from '../index'

test('renders text field correctly with a label', () => {
  render(<Accordion />)

  expect(screen.getByText('here is main')).toBeInTheDocument()
})
