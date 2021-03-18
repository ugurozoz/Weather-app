import SearchPlacesButton from '../searchPlacesButton/searchPlacesButton';
import CurrentLocationButton from '../currentLocationButton/currentLocationButton';
import CurrentSituation from '../currentSituation/currentSituation';
import './current.css';

const current: React.FC = () => {
  return (
    <>
      <div className='current__top'>
        <SearchPlacesButton />
        <CurrentLocationButton />
      </div>
      <div className='current__mid'>
        <CurrentSituation image="Shower.png" situationName="Shower" temperature="15" />
      </div>
    </>
  );
};

export default current;
