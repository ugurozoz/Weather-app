import Image from '../../../utilities/Image/Image';
import { forecastValues } from '../../../types/';
import { useTypedSelector } from '../../../hooks/use-typed-selector';
import { printDegree } from '../../../utilities/printDegree';
import './dayCard.css';

const DayCard: React.FC<forecastValues> = ({
  day,
  image,
  temperatureMax,
  temperatureMin,
}) => {
  const temperatureUnit = useTypedSelector((state) => state.settings.weatherUnit);
  
  const maxTemperature = printDegree(temperatureMax, temperatureUnit)
  const minTemperature = printDegree(temperatureMin,temperatureUnit)
  const weatherIcon = `/assets/${image}`;
  return (
    <div className='dayCard'>
      <div className='dateText'>
        <span>{day}</span>
      </div>
      <Image src={weatherIcon} height='62' />
      <div className='temperatureMinMax'>
        <span className='temperatureMax'>{maxTemperature.val}{maxTemperature.unit}</span>
        <span className='temperatureMin'>{minTemperature.val}{minTemperature.unit}</span>
      </div>
    </div>
  );
};

export default DayCard;
