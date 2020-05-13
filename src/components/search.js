import React, { useState, useRef, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_COMMENTS = gql`
  query SearchPostsQuery($searchTerm: String!) {
    posts(where: { search: $searchTerm }) {
      nodes {
        id
        title
      }
    }
  }
`

const Search = () => {
  const inputEl = useRef(null)
  const [searchKey, setSearchKey] = useState('')
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [showSearchResults, setShowSearchResults] = useState(false)

  const { data: queriedData } = useQuery(GET_COMMENTS, {
    variables: { searchTerm: searchKey },
  })

  console.log('queriedData', queriedData)

  useEffect(() => {
    if (showSearchBar) {
      inputEl.current.focus()
    }
  })

  const toggleSearchForm = () => {
    setShowSearchBar(!showSearchBar)
  }

  const toggleShowSearchResults = (event) => {
    setSearchKey(inputEl.current.value)
    if (searchKey.length > 0) {
      setShowSearchResults(true)
    }
    if (searchKey.length === 0) {
      setShowSearchResults(false)
    }
  }

  const onCloseSearchBar = () => {
    inputEl.current.value = ''
    setShowSearchResults(false)
    setShowSearchBar(false)
  }

  return (
    <>
      <button className="search-btn" onClick={() => toggleSearchForm()}>
        <span role="img" aria-label="search">
          🔍
        </span>
      </button>
      <form
        onSubmit={(e) => e.preventDefault()}
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
        <button
          style={{
            cursor: 'pointer',
            position: 'absolute',
            right: 9,
            top: 5,
          }}
          className="search-x-btn"
          onClick={() => onCloseSearchBar()}
        >
          ✕
        </button>
      </form>
      <div
        style={{
          backgroundColor: 'gray',
          position: 'absolute',
          marginTop: 50,
          left: 0,
          width: '100%',
          minHeight: 400,
          zIndex: 10,
          display: showSearchResults ? 'block' : 'none',
        }}
      >
        Search results
        <div>
          {!!searchKey &&
            queriedData?.posts?.nodes &&
            queriedData.posts.nodes.map((post) => (
              <h4 dangerouslySetInnerHTML={{ __html: post.title }} />
            ))}
        </div>
      </div>
    </>
  )
}

export default Search
