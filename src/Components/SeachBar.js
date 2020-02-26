import React from 'react';

const SearchBar = ({ onChange }) => {

  return (
    <div>
      Search
        <input data-testid="search-input" onChange={onChange} />
    </div>
  )
}

export { SearchBar }

