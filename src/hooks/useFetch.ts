import { useState } from 'react'

const API_ENDPOINT = 'https://dummyjson.com/products/'

export const useFetch = () => {
  const id = Math.floor(Math.random() * 100)
  const [data, setData] = useState()
  const get = async () => {
    const res = fetch(API_ENDPOINT + id).then((res) => res.json())
    setData(await res)
  }

  return {
    data,
    get,
  }
}
