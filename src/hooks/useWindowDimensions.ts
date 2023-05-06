import { useCallback, useEffect, useState } from 'react'

export const useWindowDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const onResize = useCallback(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    window.onresize = onResize
  }, [onResize])

  return {
    width,
    height,
  }
}
