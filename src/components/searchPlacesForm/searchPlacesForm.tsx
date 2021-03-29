import { useState, useEffect, useRef } from 'react';
import { skipCors } from '../../utilities/skipCors/skipCors';
import { location } from '../../types/index';
import './searchPlacesForm.css';

interface searchForm {
  formVisible: boolean;
  hideForm: () => void;
}

const SearchPlacesForm: React.FC<searchForm> = ({ formVisible, hideForm }) => {
  const [results, setResults] = useState([]);

  const srcInput = useRef<HTMLInputElement | null>(null);

  const onSubmitHandler = () => {
    setResults([])
    const searchTerm = `query=${srcInput.current?.value}`;
    console.log('searchTerm', searchTerm);
    skipCors(
      'https://www.metaweather.com/api/location/search/?',
      'http://localhost:4152/',
      searchTerm
    ).then((data) => {
      console.log(data);
      setResults(data);
    });
  };

  const searchResults = results.map((result: location) => {
    return (
      <button key={result.woeid}>
        <span>{result.title}</span>
      </button>
    );
  });

  return formVisible ? (
    <div className='searchPlacesForm'>
      <div className='search-location'>
        <input
          ref={srcInput}
          type='text'
          className='search-location-input'
          placeholder='Search location'
        />
        <input
          type='button'
          value='Search'
          className='search-location-bt'
          onClick={onSubmitHandler}
        />
      </div>
      <div className='cities-near'>
        {searchResults}
      </div>
      <button className='close-form' onClick={hideForm}>
        <span></span>
      </button>
    </div>
  ) : null;
};

export default SearchPlacesForm;
