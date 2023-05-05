import { useEffect, useState } from 'react'

const MaxCount = () => {
  const [number, setNumber] = useState(0)
  const [time, setTime] = useState(10)

  const onClick = () => {
    setNumber((number) => number + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => time > 0 && setTime((time) => time - 1), 1000)

    return () => clearInterval(interval)
  }, [time])

  return (
    <div className="container">
      <p className="font-bold">No of Clicks until timer expires</p>
      <div className="mt-4 bg-orange-400 text-slate-700 p-4 rounded-xl">
        <p>{number}</p>
        <p className="mt-6">{`Time left: ${time} seconds`}</p>
        {time > 0 && (
          <button className="px-1 py-0 bg-slate-400 mt-6" onClick={onClick}>
            +
          </button>
        )}
      </div>
    </div>
  )
}

export default MaxCount
