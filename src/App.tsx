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
      return { temperature, situation, nextFiveDays };
    }
  );
  const { fetchWeather } = useActions();

  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <div className='App'>
      <main>
        <section className='current'>
          <Current />
        </section>
        <section className='forecasts-highlights'>
          <ForecatsHighlights />
        </section>
      </main>
    </div>
  );
}

export default App;
