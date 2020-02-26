import React from 'react';

const SearchBar = ({ onChange, placeholder }) => {

  return (
    <div>
      <span>Search:</span>
      <input placeholder={placeholder} data-testid="search-input" onChange={onChange} />
    </div>
  )
}

export { SearchBar }

