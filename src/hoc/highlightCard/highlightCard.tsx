import './highlightCard.css';

interface hCard {
  children?: React.ReactChild | React.ReactChild[];
  cardName: string;
  cardTitle: string;
}

const highlightCard: React.FC<hCard> = ({ children, cardName, cardTitle }) => {
  const cardClass=`hightlight-item hightlight-${cardName}-item`
  return (
    <div className={cardClass}>
      <div className='hightlight-item-heading'>{cardTitle}</div>
      {children}
    </div>
  );
};

export default highlightCard;
