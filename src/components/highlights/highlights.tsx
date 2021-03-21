import './highlights.css';
import WindCard from './windCard/windCard';

const highlights: React.FC = () => {
  return (
    <div className='highlights'>
      <h1>Today’s Hightlights </h1>
      <div className='highlights-items'>
        <WindCard windSpeed={7} windDirectionCompass="WSW" windDirection={245} speedUnit="mph" />
        <WindCard windSpeed={7} windDirectionCompass="WSW" windDirection={245} speedUnit="mph" />
      </div>
    </div>
  );
};

export default highlights;
