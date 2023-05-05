import { useMemo, useRef, useState } from 'react'

const Timer = () => {
  const timer = useRef<number | undefined>() // seconds
  const [time, setTime] = useState(0)
  const mins = useMemo(() => Math.floor(time / 60), [time])
  const secs = useMemo(() => time % 60, [time])

  const onStart = () => {
    timer.current = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
  }
  const onStop = () => {
    clearInterval(timer.current)
  }
  const onReset = () => {
    clearInterval(timer.current)
    setTime(0)
  }

  return (
    <div className="container">
      <p className="text-xl">Timer</p>
      <p>{`${mins} mins ${secs} secs`}</p>
      <div className="mt-2">
        <button onClick={onStart}>Start</button>
        <button onClick={onStop}>Stop</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  )
}

export default Timer
