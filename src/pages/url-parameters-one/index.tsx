import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UrlParaMetersOne = () => {
  const navigate = useNavigate()
  const [param, setParam] = useState('')

  const onClick = () => {
    navigate('/url-parameters-two', { state: { param } })
  }

  return (
    <div className="contaer">
      <p>Navigate with a param</p>
      <input className="bg-slate-500 rounded-lg p-2 mt-4 mr-2 text-white" onChange={(e) => setParam(e.target.value)} />
      <button onClick={onClick}>Go</button>
    </div>
  )
}

export default UrlParaMetersOne
