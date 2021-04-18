import { useState, useRef } from 'react';
import { useActions } from '../../hooks/use-actions';
import { skipCors } from '../../utilities/skipCors/skipCors';
import { location } from '../../types/index';
import './searchPlacesForm.css';

interface searchForm {
  formVisible: boolean;
  hideForm: () => void;
}

interface iSearch {
  found: null | boolean;
  searching: boolean;
}

const SearchPlacesForm: React.FC<searchForm> = ({
  formVisible,
  hideForm,
}): JSX.Element => {
  const [results, setResults] = useState([]);
  const [found, setFound] = useState<iSearch>({
    searching: false,
    found: null,
  });
  const { setCity } = useActions();

  // useEffect(() => {
  //   setFound({ searching: false, found: null });
  // }, []);

  const srcInput = useRef<HTMLInputElement | null>(null);

  const onSubmitHandler = () => {
    setResults([]);
    setFound({ searching: true, found: null });
    const searchTerm = `query=${srcInput.current?.value}`;
    skipCors(
      'https://www.metaweather.com/api/location/search/?',
      'http://weather-cors.trmov.com/',
      searchTerm
    ).then((data) => {
      if (data.length > 0) {
        setResults(data);
        setFound({ searching: false, found: true });
      } else {
        setResults([]);
        setFound({ searching: false, found: false });
      }
    });
  };

  const onCitySelect = (index: number): void => {
    const cityData = results[index];
    setCity(cityData);
    hideForm();
  };

  const searchResults = results.map((result: location, index: number) => {
    return (
      <button key={result.woeid} onClick={() => onCitySelect(index)}>
        <span>{result.title}</span>
      </button>
    );
  });

  const searchResultsElements = () => {
    if (found.searching)
      return <div className='Search-in-progress'> Search in progress</div>;
    if (!found.searching && found.found) return searchResults;
    if (!found.searching && found.found === false)
      return <div className='not-found'>Not found</div>;
  };

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
      <div className='cities-near'>{searchResultsElements()}</div>
      <button className='close-form' onClick={hideForm}>
        <span></span>
      </button>
    </div>
  ) : (
    <div></div>
  );
};

export default SearchPlacesForm;
