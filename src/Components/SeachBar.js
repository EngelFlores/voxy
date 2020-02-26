import React from 'react';

const SearchBar = ({onChange}) => {

  return (
    <div>
        <input onChange={onChange}/>
    </div>
  )
}

export { SearchBar }

