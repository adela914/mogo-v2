import { useState } from 'react'
import { TextField } from '../../components/TextField'

export const Main = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <TextField
        forId="test"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <p>here is main</p>
    </>
  )
}
