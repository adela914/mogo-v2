import { Link } from 'react-router-dom'

const links = [
  { to: '', name: 'Home' },
  { to: 'playground', name: 'Playground' },
  { to: 'accordion', name: 'Accordion' }
]

export const Main = () => {
  return (
    <>
      <ul>
        {links.map(({ name, to }) => {
          return (
            <li key={to}>
              <Link to={`/${to}`}>{name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
