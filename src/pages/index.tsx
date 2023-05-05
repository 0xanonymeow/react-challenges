import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container flex flex-col">
      <Link to="six-boxes">Six Boxes</Link>
      <Link to="autocomplete">Autocomplete</Link>
    </div>
  )
}

export default Home
