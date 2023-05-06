import { useState } from 'react'

const TodoList = () => {
  const [list, setList] = useState<string[]>([])
  const [item, setItem] = useState('')

  const onAdd = () => {
    setList([...list, item])
    setItem('')
  }

  const onRemove = (index: number) => {
    setList((list) => list.slice(0, index).concat(list.slice(index + 1, list.length)))
  }

  return (
    <div className="container">
      <div className="flex gap-2">
        <input
          className="bg-gray-200 rounded-md p-2"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          autoFocus
        />
        <button onClick={onAdd}>Add</button>
      </div>
      <ul className="mt-4 flex flex-col items-center gap-2">
        {list.map((item, i) => (
          <div key={i} className="w-full flex justify-center">
            {item}
            <div className="ml-2 text-red-500 hover:cursor-pointer" onClick={() => onRemove(i)}>
              X
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
