import './currentLocationButton.css';
import { useActions } from '../../hooks/use-actions';
import { skipCors } from '../../utilities/skipCors/skipCors';



const SearchPlacesButton: React.FC = (): JSX.Element => {
  const { getCityWoeid } = useActions();

  const getCurrentLocation = () => {
    console.log("LOCATION CALL")
    skipCors('http://ip-api.com/json/', 'https://weather-cors.trmov.com/', '').then(
      (data) => {
        console.log("DATA >>",data)
        if (data.status === 'success') {
          if (data.city === 'Frankfurt am Main') {
            localStorage.setItem('location', 'Frankfurt');
            getCityWoeid('Frankfurt')
          } else {
            localStorage.setItem('location', data.city);
            getCityWoeid(data.city)
          }
          
          


          
        } else {
          console.log('ERROR', 'Location could not be fetched');
        }
      }
    );
  };

  return (
    <button className='currentLocationButton' onClick={() => getCurrentLocation()}>
      <span></span>
    </button>
  );
};

export default SearchPlacesButton;