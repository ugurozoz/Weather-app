import SearchPlacesButton from '../searchPlacesButton/searchPlacesButton';
import CurrentLocationButton from '../currentLocationButton/currentLocationButton';
import CurrentSituation from '../currentSituation/currentSituation';
import DateAndLocation from '../dateAndLocation/dateAndLocation';
import SearchPlacesForm from '../searchPlacesForm/searchPlacesForm';
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
      <div className='current__bottom'>
        <DateAndLocation weatherDay='Today' weatherDate='Fri, 5 Jun'  location='Helsinki'/>

      </div>
      
      <SearchPlacesForm/>
      
    </>
  );
};

export default current;
