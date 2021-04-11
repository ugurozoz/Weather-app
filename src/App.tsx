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
        loading,
      },
    }) => {
      const params = {
        currentParams: {
          temperature,
          situation,
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
      };
      return params;
    }
  );
  

  const checkStorage = () => {
    const myLocation = localStorage.getItem('location');
    console.log(myLocation);
    if (myLocation === null) {
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
    } else {
      setLocation(myLocation);
    }
  };

  useEffect(() => {
    checkStorage();
  }, []);

 
  
  useEffect(() => {
    fetchWeather(locationWoeid);
  }, [locationWoeid]);

  

  useEffect(() => {
    getCityWoeid(location);
  }, [location]);

  return (
    <div className='App'>
      <main>
        <section className='current'>
          <Current currentParams={weatherParams.currentParams} />
        </section>
        <section className='forecasts-highlights'>
          <ForecatsHighlights />
        </section>
      </main>
    </div>
  );
}

export default App;
