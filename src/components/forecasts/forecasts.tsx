import DayCard from './dayCard/dayCard';
import { forecastValues } from '../../types/';
import './forecasts.css';

interface forecastsList {
  forecasts: forecastValues[];
}

const foreCasts: React.FC<forecastsList> = ({ forecasts }) => {
  const fiveDayforecasts = forecasts.map((forecast) => {
    return (
      <DayCard
        day={forecast.day}
        image={forecast.image}
        temperatureMax={forecast.temperatureMax}
        temperatureMin={forecast.temperatureMin}
      />
    );
  });
  return <div className='foreCasts'>{fiveDayforecasts}</div>;
};

export default foreCasts;
