import { useState, useEffect } from 'react';
import './searchPlacesForm.css';

interface searchForm {
  formVisible: boolean;
  hideForm: () => void;

}


const SearchPlacesForm: React.FC<searchForm> = ({ formVisible, hideForm }) => {
  

  return (formVisible ? 
    <div className='searchPlacesForm'>
      <div className='search-location'>
        <input
          type='text'
          className='search-location-input'
          placeholder='Search location'
        />
        <input type='button' value='Search' className='search-location-bt' />
      </div>
      <div className='cities-near'>
        <button>
          <span>London</span>
        </button>
        <button>
          <span>Barcelona</span>
        </button>
        <button>
          <span>Long Beach</span>
        </button>
        <button>
          <span>California</span>
        </button>
      </div>
      <button className='close-form' onClick={hideForm}>
        <span></span>
      </button>
    </div> : null
  );
};

export default SearchPlacesForm;
