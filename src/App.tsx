import Current from './components/current/current';
import ForecatsHighlights from './components/forecasts-highlights/forecasts-highlights';
import { useActions } from './hooks/use-actions';
import { useEffect, useState } from 'react';
import { skipCors } from './utilities/skipCors/skipCors';
import { useTypedSelector } from './hooks/use-typed-selector';
import { getPosition } from './utilities/getPosition';

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
        loadingParam: { loading },
      };
      return params;
    }
  );

  //
  const getCurrentLocation = () => {
    const apiURL = getPosition()
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
              setLocation('Frankfurt');
            } else {
              localStorage.setItem('location', data[0].title);
              setLocation(data[0].title);
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
    console.log(location);
    if (location !== '') getCityWoeid(location);
  }, [location]);

  const paramsLoading = weatherParams.loadingParam.loading;
  return (
    <div className='App'>
      <main>
        <section className='current'>
          {paramsLoading ? (
            <div className='loading-placeholder'>
              <span>Loading...</span>
            </div>
          ) : null}

          <Current currentParams={weatherParams.currentParams} />
        </section>
        <section className='forecasts-highlights'>
          {paramsLoading ? (
            <div className='loading-placeholder'>
              <span>Loading...</span>
            </div>
          ) : null}
          <ForecatsHighlights forecastsParams={weatherParams.forecastsParams} />
        </section>
      </main>
    </div>
  );
}

export default App;
