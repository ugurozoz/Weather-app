import './searchPlacesForm.css';

const searchPlacesForm = () => {
  return (
    <div className='searchPlacesForm'>
      <div className='search-location'>
        <input type='text' className='search-location-input' />
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
      </div>
      <button className='close-form'><span></span></button>
    </div>
  );
};

export default searchPlacesForm;
