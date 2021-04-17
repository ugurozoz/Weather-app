import Image from '../../utilities/Image/Image';
import './currentSituation.css';

interface situation {
  image: string;
  temperature: { val: number, unit: string };
  situationName: string;
}

const currentSituation: React.FC<situation> = ({
  image,
  temperature,
  situationName,
}): JSX.Element => {
  const weatherIcon = `/assets/${image}`;
  return (
    <>
      <div className='currentSitutation'>
        <div className='currentWeatherImage'>
          <Image src={weatherIcon} height='160' />
        </div>
        <div className="currentCondition">
          <div className='currentTemperature'>
            <span className='temperatureValue'>{temperature.val}</span>
            <span className='temperatureUnit'>{temperature.unit}</span>
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
