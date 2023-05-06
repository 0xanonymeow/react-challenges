import { useLocation, useNavigate } from 'react-router-dom'

const UrlParaMetersTwo = () => {
  const navigate = useNavigate()
  const {
    state: { param },
  } = useLocation()

  const onClick = () => {
    navigate(-1) // go back
  }

  return (
    <div className="container">
      <p>{`Param: ${param}`}</p>
      <button onClick={onClick} className="mt-4">
        Back
      </button>
    </div>
  )
}

export default UrlParaMetersTwo
