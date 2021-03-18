import './currentSituation.css';

interface situation {
  image: string;
  temperature: string;
  situationName: string;
}

const currentSituation: React.FC<situation> = ({ image, temperature, situationName }) => {
  const weatherIcon = require('../../assets/'+image);
  return (
    <>
      <div className='currentSitutation'>
        <div className='currentWeatherImage'><img src={String(weatherIcon)} /></div>
        <div className='currentTemperature'>
          <strong>{temperature}</strong>
          <span>C</span>          
        </div>
        <div className="currentSituationName">
          <strong>{situationName}</strong>

        </div>
        
        
        
      </div>
    </>
  );
};

export default currentSituation;
