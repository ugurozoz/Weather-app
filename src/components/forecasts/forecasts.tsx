import DayCard from './dayCard/dayCard';
import { forecastValues } from '../../types/';
import './forecasts.css';

interface forecastsList {
  forecasts: forecastValues[];
}

const foreCasts: React.FC<forecastsList> = ({ forecasts }): JSX.Element => {
  const fiveDayforecasts = forecasts.map((forecast, index) => {
    return (
      <DayCard
        day={forecast.day}
        image={forecast.image}
        temperatureMax={forecast.temperatureMax}
        temperatureMin={forecast.temperatureMin}
        key={`day${index}`}
      />
    );
  });
  return <div className='foreCasts'>{fiveDayforecasts}</div>;
};

export default foreCasts;
