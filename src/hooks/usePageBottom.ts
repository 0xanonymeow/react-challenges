import { useState } from 'react'

export const usePageBottom = () => {
  const [isBottom, setIsBottom] = useState(false)

  const onScroll = () => {
    const root = document.getElementById('root')
    setIsBottom(window.scrollY + window.innerHeight === root?.offsetHeight)
  }

  return {
    isBottom,
    onScroll,
  }
}
