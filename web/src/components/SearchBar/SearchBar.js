import { useState } from 'react'
import { useParams } from '@redwoodjs/router'

const SearchBar = () => {
  const { term } = useParams()
  const [searchInput, setSearchInput] = useState(term || '')

  const onChange = (event) => {
    setSearchInput(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    location.href = `/search/${searchInput}`
  }

  return (
    <form className="mx-auto w-1/2" action="/search" onSubmit={onSubmit}>
      <input
        type="text"
        name="q"
        placeholder="Search"
        value={searchInput}
        onChange={onChange}
        className="w-10/12 border border-blue-600 text-sm px-4 py-2 rounded-l outline-none"
      />
      <button
        type="button"
        className="border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white uppercase text-sm rounded-r px-3 py-2"
        onClick={onSubmit}
      >
        Go
      </button>
    </form>
  )
}

export default SearchBar
