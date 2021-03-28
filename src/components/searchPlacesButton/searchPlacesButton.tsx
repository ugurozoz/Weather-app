import './searchPlacesButton.css';

interface searchPlaces {
  onClickHandler: () => void;
}


const searchPlacesButton:React.FC<searchPlaces> = ({onClickHandler}) => {
  return (
    <button className='searchPlacesButton' onClick={onClickHandler}>
      <span>Seach for places</span>
    </button>
  );
};

export default searchPlacesButton;
