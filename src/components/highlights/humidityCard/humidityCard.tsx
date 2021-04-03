import HighlightCard from '../../../hoc/highlightCard/highlightCard';
import PercentBar from '../../../utilities/percentBar/percentBar';
import './humidityCard.css';

interface humidityCardParams {
  humidityPercent: number;
}

const humidityCard: React.FC<humidityCardParams> = ({
  humidityPercent
}):JSX.Element => {
  return (
    <HighlightCard cardTitle='Humidity' cardName='humidity'>
      <div className='humidityPercent'>
        <span className="humidityPercentNumber">{humidityPercent}</span>
        <span className="humidityPercentSymbol">%</span>
      </div>
      <div className='humidityBar'>
        <PercentBar value={humidityPercent} colors={['#E7E7EB','#FFEC65']} />

        
      </div>
    </HighlightCard>
  );
};

export default humidityCard;
