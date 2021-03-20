import dayCard from './dayCard/dayCard';
import { forecastValues } from '../../types/'

interface forecastsList {
  forecasts: forecastValues[]
}



const foreCasts: React.FC<forecastsList> = ({ forecasts }) => {
  
  return <div className='foreCasts'>ds</div>;
};

export default foreCasts;
