import React, { useState, useRef, useEffect } from 'react'

const Search = () => {
  const inputEl = useRef(null)
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [showSearchResults, setShowSearchResults] = useState(false)

  useEffect(() => {
    if (showSearchBar) {
      inputEl.current.focus()
    }
  })

  const toggleSearchForm = () => {
    setShowSearchBar(!showSearchBar)
  }

  const toggleShowSearchResults = (event) => {
      const searchKey = inputEl.current.value
      if(searchKey.length > 0) {
          setShowSearchResults(true)
      }
      if(searchKey.length === 0) {
          setShowSearchResults(false)
      }
  }

  return (
    <>
      <button className="search-btn" onClick={() => toggleSearchForm()}>
        <span role="img" aria-label="search">
          🔍
        </span>
      </button>
      <form
        style={{
          visibility: showSearchBar ? 'visible' : 'hidden',
          position: 'absolute',
          marginTop: 4,
          marginLeft: 4,
          width: 320,
        }}
      >
        <input
          style={{
            height: 32,
          }}
          ref={inputEl}
          type="text"
          onChange={(event) => toggleShowSearchResults(event)}
        />
      </form>
      <div
        style={{
          backgroundColor: 'gray',
          position: 'fixed',
          marginTop: 50,
          left: 0,
          width: '100%',
          minHeight: 400,
          zIndex: 10,
          display: showSearchResults ? 'block' : 'none',
        }}
      >
        Search results
      </div>
    </>
  )
}

export default Search
