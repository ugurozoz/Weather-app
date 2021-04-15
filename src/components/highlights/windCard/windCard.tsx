import HighlightCard from '../../../hoc/highlightCard/highlightCard';
import Compass from '../../../utilities/compass/compass';
import './windCard.css';

interface windCardParams {
  windSpeed: number;
  windDirection: number;
  windDirectionCompass: string;
  speedUnit: string;
}

const windCard: React.FC<windCardParams> = ({
  windSpeed,
  windDirection,
  windDirectionCompass,
  speedUnit,
}): JSX.Element => {
  const windSpeedString = windSpeed.toFixed(1)
  return (
    <HighlightCard cardTitle='Wind status' cardName='wind'>
      <div className='windSpeed'>
        <span className="windSpeedNumber">{windSpeedString}</span>
        <span className="windSpeedUnit">{speedUnit}</span>
      </div>
      <div className='windDirection'>
        <Compass angle={windDirection} />
        <span className='wd-text'>{windDirectionCompass}</span>
      </div>
    </HighlightCard>
  );
};

export default windCard;
