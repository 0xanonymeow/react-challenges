import { useEffect, useState } from 'react'

const getAutoCompleteResults = (query: string): Promise<string[]> => {
  const fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    'Jackfruit',
    'Kiwi',
    'Lime',
    'Mango',
    'Nectarine',
    'Orange',
    'Papaya',
    'Quince',
    'Raspberry',
    'Strawberry',
    'Tangerine',
    'Ugli fruit',
    'Vanilla Bean',
    'Watermelon',
    'Xigua (Chinese watermelon)',
    'Yellow passionfruit',
    'Zucchini',
    'Apricot',
    'Blackcurrant',
    'Cranberry',
    'Dragonfruit',
    'Elderflower',
    'Feijoa',
    'Guava',
    'Honeyberry',
    'Jabuticaba',
    'Kumquat',
    'Lemon',
    'Melon',
    'Nashi pear',
    'Olive',
    'Pineapple',
    'Quandong',
    'Rhubarb',
    'Starfruit',
    'Tangelo',
    'Ugni',
    'Victoria plum',
    'White currant',
    'Ximenia',
    'Yellow watermelon',
    'Zinfandel grapes',
    'Boysenberry',
    'Currant',
    'Damson',
    'Fraise des bois',
    'Gooseberry',
    'Huckleberry',
    'Inca berry',
    'Jujube',
    'Kiwano (horned melon)',
    'Longan',
    'Mulberry',
    'Nance',
    'Okra',
    'Pomelo',
    'Redcurrant',
    'Saskatoon berry',
    'Tamarillo',
    'Wax jambu',
    'Yangmei (yumberry)',
    'Zante currant',
    'Acerola',
    'Bilberry',
    'Clementine',
    'Durian',
    'Finger lime',
    'Grapefruit',
    'Honeybell',
    'Jostaberry',
    'Kiwiberry',
    'Limequat',
    'Muscadine grapes',
    'Persimmon',
    'Rambutan',
    'Satsuma',
    'Ugni blanc',
    'Velvet apple',
    'White sapote',
    'Yuzu',
    'Zwetschge',
    'Ackee',
    'Blackberry',
    'Chayote',
  ]

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fruits.filter((fruit) => fruit.toLowerCase().includes(query.toLocaleLowerCase())))
    }),
      Math.random() * 1000
  })
}

const useDebounceValue = (value: string, time = 250) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value)
    }, time)

    return () => clearTimeout(timeout)
  }, [value, time])

  return debounceValue
}

const AutoComplete = () => {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])

  const onChange = (e) => {
    setQuery(e.target.value)
  }

  const debounceQuery = useDebounceValue(query)

  useEffect(() => {
    ;(async () => {
      setSuggestions([])
      if (debounceQuery.length > 0) {
        const data = await getAutoCompleteResults(debounceQuery)
        setSuggestions(data)
      }
    })()
  }, [debounceQuery])

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <input className="mt-24 mb-4" value={query} onChange={onChange} />
      <div className="text-slate-600 dark:text-slate-200 flex flex-col gap-2 items-start">
        {suggestions.map((s) => (
          <div key={s} className="w-full">
            {s}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AutoComplete
