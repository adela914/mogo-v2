import { useEffect, useRef, useState } from 'react'
import { Tooltip } from '../../components/Tooltip'
import { TooltipChild } from '../../components/Tooltip/styles'
import { Autocomplete } from '../../components/Autocomplete'
import {
  Button,
  ButtonWrapper,
  CardsWrapper,
  LaunchCard,
  MovieCard,
  MoviesContainer,
  SelectContainer,
  Wrapper
} from './styles'

type Movie = {
  Title: string
  Year: number
  imdbID: string
}

type Launch = {
  mission_name: string
  details: string
  launch_date_unix: string
  flight_number: string
}
export const Playground = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [launches, setLaunches] = useState([])
  const [showTooltip, setShowTooltip] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const moviesRef = useRef<HTMLDivElement>(null)
  const handleHover = () => {
    setShowTooltip(true)
  }

  const handleLeave = () => {
    setShowTooltip(false)
  }

  const scroll = (scrollOffset: number) => {
    if (moviesRef.current) {
      moviesRef.current.scrollLeft += scrollOffset
    }
  }

  useEffect(() => {
    const getData = async () => {
      setIsLoading(false)
      const launches = await fetch(`https://api.spacexdata.com/v3/launches?limit=3`)
      const launchesData = await launches.json()
      setLaunches(launchesData)

      const data = await fetch('https://jsonmock.hackerrank.com/api/movies?Year=2015')
      const movies = await data.json()

      return movies.data
    }

    getData().then(setMovies)
  }, [])

  return (
    <>
      <h2>Autocomplete</h2>
      <Autocomplete />
      <h2>Tooltip</h2>
      <Tooltip isHovered={showTooltip}>
        <TooltipChild>
          <span onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            Here is text to hover
          </span>
        </TooltipChild>
      </Tooltip>
      <h2>Carousel</h2>
      <Wrapper>
        <ButtonWrapper>
          <Button onClick={() => scroll(-100)}>Left</Button>
        </ButtonWrapper>
        <MoviesContainer ref={moviesRef}>
          {isLoading
            ? '🤑'
            : movies.map((movie) => {
                return <MovieCard key={movie.imdbID}>{movie.Title}</MovieCard>
              })}
        </MoviesContainer>
        <ButtonWrapper>
          <Button onClick={() => scroll(100)}>Right</Button>
        </ButtonWrapper>
      </Wrapper>
      <h2>Select</h2>
      <form>
        <SelectContainer>
          <label htmlFor="movies-select">Movies</label>
          <select
            name="movies"
            id="movies-select"
            onChange={(e) => {
              console.log(e.target.value)
            }}
          >
            {movies.map((movie) => {
              return (
                <option key={movie.imdbID} value={movie.Title}>
                  {movie.Title}
                </option>
              )
            })}
          </select>
        </SelectContainer>
      </form>
      <h2>Cards</h2>
      <CardsWrapper>
        {launches.map((launch: Launch) => {
          return (
            <LaunchCard key={launch.flight_number}>
              <img src="https://picsum.photos/536/354" alt="" style={{ width: '40%' }} />
              <div style={{ padding: '20px' }}>
                {launch.mission_name}
                {launch.details}
                {launch.launch_date_unix}
              </div>
            </LaunchCard>
          )
        })}
      </CardsWrapper>
    </>
  )
}
