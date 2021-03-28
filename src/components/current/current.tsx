import { useState } from 'react';
import SearchPlacesButton from '../searchPlacesButton/searchPlacesButton';
import CurrentLocationButton from '../currentLocationButton/currentLocationButton';
import CurrentSituation from '../currentSituation/currentSituation';
import DateAndLocation from '../dateAndLocation/dateAndLocation';
import SearchPlacesForm from '../searchPlacesForm/searchPlacesForm';
import './current.css';

const Current: React.FC = () => {
  const [searchPlacevisible, setSearchPlacevisible] = useState(false);

  const showSearch = () => {
    console.log('showSearch Called');
    setSearchPlacevisible(true);
    console.log(searchPlacevisible);
  };

  const hideSearch = () => {
    console.log('hideSearch Called');
    setSearchPlacevisible(false);
    console.log(searchPlacevisible);
  };

  return (
    <>
      <div className='current__top'>
        <SearchPlacesButton onClickHandler={showSearch} />
        <CurrentLocationButton />
      </div>
      <div className='current__mid'>
        <CurrentSituation
          image='Shower.png'
          situationName='Shower'
          temperature='15'
        />
      </div>
      <div className='current__bottom'>
        <DateAndLocation
          weatherDay='Today'
          weatherDate='Fri, 5 Jun'
          location='Helsinki'
        />
      </div>

      <SearchPlacesForm formVisible={searchPlacevisible} hideForm={hideSearch} />
    </>
  );
};

export default Current;
