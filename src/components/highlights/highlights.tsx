import './highlights.css';
import WindCard from './windCard/windCard';
import HumidityCard from './humidityCard/humidityCard';
import VisibilityCard from './visibilityCard/visibilityCard';
import PressureCard from './pressureCard/pressureCard';

interface Highlights {
  windSpeed: number;
  windDirection: number;
  windDirectionCompass: string;
  humidity: number;
  visibility: number;
  airPressure: number;
}

const highlights: React.FC<Highlights> = (props): JSX.Element => {
  //console.log("PROPS",props)
  return (
    <div className='highlights'>
      <h1>Today’s Hightlights </h1>
      <div className='highlights-items'>
        <WindCard
          windSpeed={props.windSpeed}
          windDirectionCompass={props.windDirectionCompass}
          windDirection={props.windDirection}
          speedUnit='mph'
        />
        <HumidityCard humidityPercent={props.humidity} />
        <VisibilityCard visibilityDistance={props.visibility} distanceUnit='miles' />
        <PressureCard pressureAmountNumber={Math.floor(props.airPressure)} pressureUnit='mb' />
      </div>
    </div>
  );
};

export default highlights;
