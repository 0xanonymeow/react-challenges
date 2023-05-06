import { useState } from 'react'

export const useToggleMode = () => {
  const [mode, setMode] = useState(document.documentElement.classList.contains('dark') ? 'dark' : 'light')

  return {
    mode,
    setMode: () => {
      setMode(mode === 'dark' ? 'light' : 'dark')
      document.documentElement.classList.toggle('dark')
    },
  }
}
