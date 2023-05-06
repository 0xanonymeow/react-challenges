const RemoveChild = () => {
  const onClick = (e) => {
    const node = document.getElementById(e.target.id)
    document.getElementById('parent')?.removeChild(node)
  }

  return (
    <div className="container">
      <div id="parent" className="flex flex-col gap-2 ">
        {[...Array(3)].map((_, i) => (
          <button
            key={i}
            id={i}
            className="bg-slate-500 dark:bg-slate-100 text-white dark:text-slate-700"
            onClick={onClick}
          >{`Click to remove Button ${i}`}</button>
        ))}
      </div>
    </div>
  )
}

export default RemoveChild
