import './highlightCard.css';

interface hCard {
  children?: React.ReactChild | React.ReactChild[];
  cardname: string;
}

const highlightCard: React.FC<hCard> = ({ children, cardname }) => {
  return (
    <div className='hightlight-item'>
      <div className='hightlight-item-heading'>{cardname}</div>
      {children}
    </div>
  );
};

export default highlightCard;
