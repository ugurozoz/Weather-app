import HighlightCard from '../../../hoc/highlightCard/highlightCard';
import './visibilityCard.css';

interface visibilityCardParams {
  visibilityDistance: number;
  distanceUnit: string;
}

const visibilityCard: React.FC<visibilityCardParams> = ({
  visibilityDistance,
  distanceUnit,
}): JSX.Element => {
  const visibilityDistanceString = visibilityDistance.toFixed(1)
  return (
    <HighlightCard cardTitle='Visibility' cardName='visibility'>
      <div className='visibilityDistance'>
        <span className='visibilityDistanceNumber'>{visibilityDistanceString}</span>
        <span className='visibilityDistanceUnit'>{distanceUnit}</span>
      </div>
    </HighlightCard>
  );
};

export default visibilityCard;
