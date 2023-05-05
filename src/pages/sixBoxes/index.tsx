import { useEffect, useState } from 'react'

const Square = ({ onClick, backgroundColor }: { onClick: () => void; backgroundColor: string }) => {
  return (
    <div
      className="w-12 h-12 border-solid dark:border-white border-black border-2"
      style={{
        backgroundColor,
      }}
      onClick={onClick}
    />
  )
}

const wait = async (ms: number) => new Promise((res) => setTimeout(res, ms))

const SixBoxes = () => {
  const [clicked, setClicked] = useState<string[]>([])

  const onClick = (i: string) => {
    if (clicked.includes(i)) return

    setClicked(clicked.concat(i))
  }

  useEffect(() => {
    const removeLast = async (arr: string[]) => {
      if (arr.length === 0) return
      await wait(600)
      const newArr = [...arr]
      newArr.pop()
      setClicked(newArr)
      removeLast(newArr)
    }

    ;(async () => {
      if (clicked.length === 6) await removeLast(clicked)
    })()
  }, [clicked])

  return (
    <div
      style={{
        display: 'flex',
        gap: 8,
      }}
    >
      {[...Array(6)].map((_, i) => (
        <Square
          key={i}
          onClick={() => onClick(String(i))}
          backgroundColor={clicked.includes(String(i)) ? 'green' : 'transparent'}
        />
      ))}
    </div>
  )
}

export default SixBoxes
