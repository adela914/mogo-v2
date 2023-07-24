import { useEffect, useRef, useState } from 'react'
import { Button, Form, Input, Item, List, Wrapper } from './style'
import { countries } from './constants'

export const Autocomplete = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [inputValue, setInputValue] = useState('')
  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(inputValue.toLowerCase())
  )
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }

    window.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [ref])

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        console.log('submit..')
      }}
    >
      <Wrapper ref={ref}>
        <Input
          type="text"
          value={inputValue}
          onFocus={() => setShowDropdown(true)}
          onInput={(e) => {
            setInputValue((e.target as HTMLInputElement).value)
            setShowDropdown(true)
          }}
        />
        {showDropdown && (
          <List>
            {filteredCountries.map((country) => {
              return (
                <Item
                  key={country}
                  onClick={() => {
                    setInputValue(country)
                    setShowDropdown(false)
                  }}
                >
                  {country}
                </Item>
              )
            })}
          </List>
        )}
      </Wrapper>
      <Button>Submit</Button>
    </Form>
  )
}
