import React from 'react';

const SearchForm = ({ onChange, onSubmit, path }) =>{
  return(
    <form onSubmit={ onSubmit }>
      <label htmlFor="url">
        show open issues for https://github.com/
      </label>
      <input
        id="url"
        type="text"
        value={ path }
        onChange={ onChange }
        style={{ width:'300px' }}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm;
