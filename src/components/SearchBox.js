import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div className='pas2'>
      <input
      className='pa3 ba b--green bg-lightest-blue mb2' 
      type='search' 
      placeholder='search robots'
      onChange={searchChange} 
      />
    </div>
  );
}

export default SearchBox;