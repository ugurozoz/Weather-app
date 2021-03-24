import HighlightCard from '../../../hoc/highlightCard/highlightCard';
import './pressureCard.css';

interface pressureCardParams {
  pressureAmountNumber: number;
  pressureUnit: string;
}

const pressureCard: React.FC<pressureCardParams> = ({
  pressureAmountNumber,
  pressureUnit
}) => {
  return (
    <HighlightCard cardTitle='Air Pressure' cardName='pressure'>
      <div className='pressureAmount'>
        <span className='pressureAmountNumber'>{pressureAmountNumber}</span>
        <span className='pressureUnit'>{pressureUnit}</span>
      </div>
    </HighlightCard>
  );
};

export default pressureCard;
