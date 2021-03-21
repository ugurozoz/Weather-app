import Image from '../../../utilities/Image/Image';
import { forecastValues } from '../../../types/';
import './dayCard.css';

const dayCard: React.FC<forecastValues> = ({
  day,
  image,
  temperatureMax,
  temperatureMin,
}) => {
  const weatherIcon = `/assets/${image}`;
  return (
    <div className='dayCard'>
      <div className='dateText'>
        <span>{day}</span>
      </div>
      <Image src={weatherIcon} height='62' />
      <div className='temperatureMinMax'>
        <span className='temperatureMax'>{temperatureMax}</span>
        <span className='temperatureMin'>{temperatureMin}</span>
      </div>
    </div>
  );
};

export default dayCard;
