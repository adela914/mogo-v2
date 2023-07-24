import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const MoviesContainer = styled.div`
  margin: 10px;
  display: flex;
  gap: 10px;
  max-width: 700px;
  overflow: auto;
  scroll-behavior: smooth;
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const MovieCard = styled.div`
  padding: 20px;
  border: 1px solid grey;
  width: 500px;

  &:hover {
    transform: scale(1.2, 1.2);
    background-color: red;
  }
`

export const Button = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const LaunchCard = styled.div`
  display: flex;
  border: 1px solid grey;
`

export const CardsWrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`
