import { useFetch } from 'hooks/useFetch'

const Fetch = () => {
  const { data, get } = useFetch()

  const onClick = async () => await get()

  return (
    <div className="container">
      <p>Product</p>
      <div className="text-left max-w-xl break-all">
        {data &&
          Object.entries(data).map(([key, value]) => (
            <div>
              <p>
                <span className="font-bold">{`${key} : `}</span>
                {['thumbnail', 'images'].includes(key) ? (
                  Array.isArray(value) ? (
                    [...value].map((src) => <img src={src} width={200} height={100} />)
                  ) : (
                    <img src={value} width={200} height={100} />
                  )
                ) : (
                  <span>{value}</span>
                )}
              </p>
            </div>
          ))}
      </div>
      <button className="mt-4 bg-slate-400 text-white" onClick={onClick}>
        Fetch
      </button>
    </div>
  )
}

export default Fetch
