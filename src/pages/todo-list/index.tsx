import { useState } from 'react'

const TodoList = () => {
  const [list, setList] = useState<string[]>([])
  const [item, setItem] = useState('')

  const onAdd = () => {
    setList([...list, item])
    setItem('')
  }

  return (
    <div className="container">
      <div className="flex gap-2">
        <input className="p-2" value={item} onChange={(e) => setItem(e.target.value)} />
        <button onClick={onAdd}>Add</button>
      </div>
      <ul className="mt-4 flex flex-col items-center gap-2">
        {list.map((item, i) => (
          <div key={i} className="w-full">
            {item}
          </div>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
