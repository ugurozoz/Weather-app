import HighlightCard from '../../../hoc/highlightCard/highlightCard';
import Compass from '../../../utilities/compass/compass'


interface windCard {
  windSpeed: number;
  windDirection: number;
  windDirectionCompass: string;
  speedUnit: string;
}

const windCard: React.FC<windCard> = ({windSpeed, windDirection,windDirectionCompass, speedUnit}) => {
  return (
    <HighlightCard cardname='Wind status'>
      <div className="windSpeed">{windSpeed}{speedUnit}</div>
      <div className="windDirection"><Compass angle={windDirection} /><span className="wd-text">{windDirectionCompass}</span></div>
    </HighlightCard>
  );
};

export default windCard;
