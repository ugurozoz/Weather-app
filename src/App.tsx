import Current from './components/current/current';
import ForecatsHighlights from './components/forecasts-highlights/forecasts-highlights';
import { useActions } from './hooks/use-actions';
import { useEffect, useState } from 'react';
import { skipCors } from './utilities/skipCors/skipCors';
import { useTypedSelector } from './hooks/use-typed-selector';

// import axios from 'axios';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const { fetchWeather, getCityWoeid } = useActions();
  const locationWoeid = useTypedSelector((state) => state.location.woeid);
  const weatherParams = useTypedSelector(
    ({
      weather: {
        temperature,
        situation,
        nextFiveDays,
        windSpeed,
        windDirection,
        windDirectionCompass,
        humidity,
        visibility,
        airPressure,
        abbr,
        loading,
      },
    }) => {
      const params = {
        currentParams: {
          temperature,
          situation,
          abbr,
          
        },
        forecastsParams: {
          nextFiveDays,
          windSpeed,
          windDirection,
          windDirectionCompass,
          humidity,
          visibility,
          airPressure,
        },
        loadingParam: { loading, }
      };
      return params;
    }
  );


  const getCurrentLocation = () => {
    skipCors('http://ip-api.com/json/', 'http://localhost:4152/', '').then(
        (data) => {
          if (data.status === 'success') {
            localStorage.setItem('location', data.city);
            setLocation(data.city);
          } else {
            console.log('ERROR', 'Location could not be fetched');
          }
        }
      );
  }

  const getLocation = () => {
    const myLocation = localStorage.getItem('location');    
    if (myLocation === null) {
      getCurrentLocation();
      
    } else {
      setLocation(myLocation);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (locationWoeid !== 0) fetchWeather(locationWoeid);
  }, [locationWoeid]);

  useEffect(() => {
    if (location !== '') getCityWoeid(location);
  }, [location]);

  const paramsLoading = weatherParams.loadingParam.loading
  return (
    <div className='App'>
      <main>
        <section className='current'>

          { paramsLoading ? <div>Loading...</div> : <Current currentParams={weatherParams.currentParams} />}
        
          
        </section>
        <section className='forecasts-highlights'>
          {/* <ForecatsHighlights  /> */}
          { paramsLoading ? <div>Loading...</div> : <ForecatsHighlights forecastsParams={weatherParams.forecastsParams} />}
          
        </section>
      </main>
    </div>
  );
}

export default App;
