import React from 'react';

const SearchForm = ({ onChange, onClick, path }) =>{
  return(
    <div>
      <input
        id="url"
        type="text"
        value={ path }
        onChange={ onChange }
        style={{ width:'300px' }}
      />
      <button type="submit" onClick={ onClick }>Search</button>
    </div>
  )
}

export default SearchForm;
