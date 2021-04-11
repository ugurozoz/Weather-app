import Current from './components/current/current';
import ForecatsHighlights from './components/forecasts-highlights/forecasts-highlights';
import { useActions } from './hooks/use-actions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { WeatherState } from './types/index';
import { useTypedSelector } from './hooks/use-typed-selector';

// import axios from 'axios';
import './App.css';

function App() {
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
  const { fetchWeather } = useActions();

  useEffect(() => {    
    fetchWeather();
    console.log(weatherParams.currentParams)
  }, []);


  return (
    <div className='App'>
      <main>
        <section className='current'>
          <Current currentParams = {weatherParams.currentParams} />
        </section>
        <section className='forecasts-highlights'>
          <ForecatsHighlights />
        </section>
      </main>
    </div>
  );
}

export default App;
