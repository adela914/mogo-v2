import styled from 'styled-components'

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  max-height: 200px;
  overflow-y: auto;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: #fff;
  box-shadow: 0 10px 10px #666;
  width: 100%;
`

export const Item = styled.li`
  border: 1px solid grey;
  padding: 5px;
  height: 50px;
  border-top: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background-color: grey;
  }
`

export const Input = styled.input`
  height: 50px;
  font-size: 20px;
  width: 200px;
`

export const Wrapper = styled.div`
  position: relative;
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
`

export const Button = styled.button`
  width: 100px;
  height: 50px;
`
