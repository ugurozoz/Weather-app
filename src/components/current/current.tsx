import { useState, useEffect } from 'react';
import SearchPlacesButton from '../searchPlacesButton/searchPlacesButton';
import CurrentLocationButton from '../currentLocationButton/currentLocationButton';
import CurrentSituation from '../currentSituation/currentSituation';
import DateAndLocation from '../dateAndLocation/dateAndLocation';
import SearchPlacesForm from '../searchPlacesForm/searchPlacesForm';
import { skipCors } from '../../utilities/skipCors/skipCors';
import './current.css';

interface Values {
  currentParams: {
    temperature: number;
    situation: string;
  };
}

const Current: React.FC<Values> = ({ currentParams }: Values) => {
  //console.log(temperature,situation)

  const [searchPlacevisible, setSearchPlacevisible] = useState(false);
  useEffect(() => {
    console.log('CURRENT RENDERED');
  }, [searchPlacevisible]);

  console.log(searchPlacevisible);

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

  const imagePath = `${currentParams.situation.toString()}.png`;
  console.log(imagePath)
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
          weatherDate='Fri, 5 Jun'
          location='Helsinki'
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
