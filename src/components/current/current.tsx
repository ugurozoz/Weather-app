import { useState, useEffect } from 'react';
import SearchPlacesButton from '../searchPlacesButton/searchPlacesButton';
import CurrentLocationButton from '../currentLocationButton/currentLocationButton';
import CurrentSituation from '../currentSituation/currentSituation';
import DateAndLocation from '../dateAndLocation/dateAndLocation';
import SearchPlacesForm from '../searchPlacesForm/searchPlacesForm';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { formatDate } from '../../utilities/formatDate'
import './current.css';

interface Values {
  currentParams: {
    temperature: number;
    situation: string;
    abbr: string;    
  };
}

const Current: React.FC<Values> = ({ currentParams }: Values) => {
  
  const weatherLocation = useTypedSelector((state) => state.location.title);

  const [searchPlacevisible, setSearchPlacevisible] = useState(false);
  useEffect(() => {
    console.log('CURRENT RENDERED');
  }, [searchPlacevisible]);

  

  const showSearch = () => {
    console.log('showSearch Called');
    setSearchPlacevisible(true);
    
  };

  const hideSearch = () => {
    console.log('hideSearch Called');
    setSearchPlacevisible(false);
    
  };

  const imagePath = `${currentParams.abbr.toString()}.png`;

  const today = new Date(Date.now());
  const formattedDate = formatDate(today)
  
  
  return (
    
    <>
      <div className='current__top'>
        <SearchPlacesButton onClickHandler={showSearch} />
        <CurrentLocationButton />
      </div>
      <div className='current__mid'>
        <CurrentSituation
          image={imagePath}
          situationName={currentParams.situation}
          temperature= {Math.floor(currentParams.temperature)}
        />
      </div>
      <div className='current__bottom'>
        <DateAndLocation
          weatherDay='Today'
          weatherDate={formattedDate}
          location={weatherLocation}
        />
      </div>
      {searchPlacevisible && (
        <SearchPlacesForm
          formVisible={searchPlacevisible}
          hideForm={hideSearch}
        />
      )}
    </>
  );
};

export default Current;
