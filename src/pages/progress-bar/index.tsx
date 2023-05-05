import { useState } from 'react'

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(100)

  const onChange = (e) => setPercentage(e.target.value)

  return (
    <div className="container">
      <p className="text-xl font-bold">Progress bar</p>
      <div className="mt-4 rounded-2xl bg-slate-500 w-96 h-8 overflow-hidden">
        <div
          className="bg-gradient-to-r from-pink-300 to-red-500"
          style={{
            width: (384 * percentage) / 100,
          }}
        >
          <p className="px-2 py-1 font-bold">{percentage}%</p>
        </div>
      </div>
      <div className="mt-2 flex justify-center items-center">
        <p>Input Percentage:</p>
        <input
          type="number"
          min={0}
          max={100}
          className="ml-4 rounded-2xl border-slate-500 border-2 w-16 h-8 text-center"
          value={percentage}
          onChange={onChange}
        />
        <span>%</span>
      </div>
    </div>
  )
}

export default ProgressBar
