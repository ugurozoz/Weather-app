import HighlightCard from '../../../hoc/highlightCard/highlightCard';
import './visibilityCard.css';

interface visibilityCardParams {
  visibilityDistance: number;
  distanceUnit: string;
}

const visibilityCard: React.FC<visibilityCardParams> = ({
  visibilityDistance,
  distanceUnit,
}) => {
  return (
    <HighlightCard cardname='Visibility'>
      <div className='visibilityDistance'>
        <span className='visibilityDistanceNumber'>{visibilityDistance}</span>
        <span className='visibilityDistanceUnit'>{distanceUnit}</span>
      </div>
    </HighlightCard>
  );
};

export default visibilityCard;
