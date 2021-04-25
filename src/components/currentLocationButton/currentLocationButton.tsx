import './currentLocationButton.css';
import { useActions } from '../../hooks/use-actions';
import { skipCors } from '../../utilities/skipCors/skipCors';
import { getPosition } from '../../utilities/getPosition';



const SearchPlacesButton: React.FC = (): JSX.Element => {
  const { getCityWoeid } = useActions();

  // const getCurrentLocation = () => {
  //   console.log("LOCATION CALL")
  //   skipCors('http://ip-api.com/json/', 'https://weather-cors.trmov.com/', '').then(
  //     (data) => {
  //       console.log("DATA >>",data)
  //       if (data.status === 'success') {
  //         if (data.city === 'Frankfurt am Main') {
  //           localStorage.setItem('location', 'Frankfurt');
  //           getCityWoeid('Frankfurt')
  //         } else {
  //           localStorage.setItem('location', data.city);
  //           getCityWoeid(data.city)
  //         }
          
          


          
  //       } else {
  //         console.log('ERROR', 'Location could not be fetched');
  //       }
  //     }
  //   );
  // };


  const getCurrentLocation = () => {
    getPosition()
      .then((position) => {
        console.log('POSITION DATA', position);
        const apiURL = `https://www.metaweather.com/api/location/search/?lattlong=${position.coords.latitude},${position.coords.longitude}`;
        skipCors(
          apiURL,
          'https://weather-cors.trmov.com/',
          ''
        ).then((data) => {
          console.log("DATA >>",data[0].title,data)
          if (data) {
            if (data[0].title === 'Frankfurt am Main') {
              localStorage.setItem('location', 'Frankfurt');
              getCityWoeid('Frankfurt')
            } else {              
              localStorage.setItem('location', data[0].title);
              getCityWoeid(data[0].title)
            }
          } else {
            console.log('ERROR', 'Location could not be fetched');
          }
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <button className='currentLocationButton' onClick={() => getCurrentLocation()}>
      <span></span>
    </button>
  );
};

export default SearchPlacesButton;