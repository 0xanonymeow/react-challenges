import { useWindowDimensions } from 'hooks/useWindowDimensions'

const WindowDimensions = () => {
  const { width, height } = useWindowDimensions()

  return (
    <div className="container">
      <p className="font-bold">{`width: ${width}`}</p>
      <p className="font-bold">{`height: ${height}`}</p>
      <p>Resize the window to see dynamic width and height</p>
    </div>
  )
}

export default WindowDimensions
