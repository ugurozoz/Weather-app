import './searchPlacesForm.css'

const searchPlacesForm = () => {
  return (
    <div className='searchPlacesForm'>

      <div className="search-location">
        <input type='text' className='search-location-input' />
        <input type='button' value='Search' className="'search-location-input'" />
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
      </div>
    </div>
  );
};

export default searchPlacesForm;
