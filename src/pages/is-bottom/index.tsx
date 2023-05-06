import { usePageBottom } from 'hooks/usePageBottom'
import { useEffect } from 'react'

const IsBottom = () => {
  const { isBottom, onScroll } = usePageBottom()

  useEffect(() => {
    window.onscroll = onScroll
  }, [onScroll])

  return (
    <div className="container w-screen flex flex-col">
      <div className="fixed top-24 bg-gray-200 rounded-lg p-6">
        <p className="text-slate-800">
          isBottom: <span className="text-green-500 font-bold">{`${isBottom}`}</span>
        </p>
      </div>
      <p className="mt-96">Scroll down</p>
      <div className="h-screen" />
      <p>Bottom</p>
    </div>
  )
}

export default IsBottom
