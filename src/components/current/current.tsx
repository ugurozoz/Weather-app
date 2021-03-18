import SearchPlacesButton from '../searchPlacesButton/searchPlacesButton';
import CurrentLocationButton from '../currentLocationButton/currentLocationButton';
import './current.css'

const current: React.FC = () => {
  return (
    <>
      <div className="current__top">
      <SearchPlacesButton />
      <CurrentLocationButton/>
      </div>
      
    </>
  );
};

export default current;
