import React, { 
   useState, 
   useMemo,
  //useEffect,
  //useEffect 
  } 
  from 'react';
import debounce from 'lodash.debounce';
// import suma from './suma'
import Suma from "./Suma"

const SearchWithDebounce = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (value) => {
    console.log('Search API call with:', value);
  };


  // Debounce the handleSearch function
  const debouncedSearch = useMemo(() => debounce(handleSearch, 500), []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value); // Trigger debounced function
  };
  // useEffect(() => {
  //   return () => {
  //     debouncedSearch.cancel(); // clean up
  //   };
  // }, []);
  

  return (
    <div>
      <Suma />
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search here..."
    />
    </div>
  );
};

export default SearchWithDebounce;
