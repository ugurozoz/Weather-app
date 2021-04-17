import DayCard from './dayCard/dayCard';
import { forecastValues } from '../../types/';

import './forecasts.css';

interface forecastsList {
  forecasts: forecastValues[];
}

const ForeCasts: React.FC<forecastsList> = ({ forecasts }): JSX.Element => {
  
  const fiveDayforecasts = forecasts.map((forecast, index) => {

    
    return (
      <DayCard
        day={forecast.day}
        image={forecast.image}
        temperatureMax={forecast.temperatureMax}
        temperatureMin={forecast.temperatureMin}
        key={`day${index}`}
      />
      // <DayCard
      //   day={forecast.day}
      //   image={forecast.image}
      //   temperatureMax={printDegree(forecast.temperatureMax,temperatureUnit)}
      //   temperatureMin={printDegree(forecast.temperatureMin,temperatureUnit)}
      //   key={`day${index}`}
      // />
    );
  });
  return <div className='foreCasts'>{fiveDayforecasts}</div>;
};

export default ForeCasts;
