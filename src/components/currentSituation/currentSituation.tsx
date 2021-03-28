import Image from '../../utilities/Image/Image';
import './currentSituation.css';

interface situation {
  image: string;
  temperature: string;
  situationName: string;
}

const currentSituation: React.FC<situation> = ({
  image,
  temperature,
  situationName,
}) => {
  const weatherIcon = `/assets/${image}`;
  return (
    <>
      <div className='currentSitutation'>
        <div className='currentWeatherImage'>
          <Image src={weatherIcon} height='160' />
        </div>
        <div className="currentCondition">
          <div className='currentTemperature'>
            <span className='temperatureValue'>{temperature}</span>
            <span className='temperatureUnit'>°C</span>
          </div>
          <div className='currentSituationName'>
            <span>{situationName}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default currentSituation;
