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
          <Image src={weatherIcon} />
         
        </div>
        <div className='currentTemperature'>
          <strong>{temperature}</strong>
          <span>C</span>
        </div>
        <div className='currentSituationName'>
          <strong>{situationName}</strong>
        </div>
      </div>
    </>
  );
};

export default currentSituation;
