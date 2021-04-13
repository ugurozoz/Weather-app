import './dateAndLocation.css';

interface dateAndLocation {
  weatherDay: string;
  weatherDate: string;
  location: string;
}

const DateAndLocation: React.FC<dateAndLocation> = ({
  weatherDay,
  weatherDate,
  location,
}): JSX.Element => {
  return (
    <>
      <div className='DateAndLocation'>
        <div className='dateContainer'>
          <span className='daySpan'>{weatherDay}</span>
          <span className='dotSpan'>•</span>
          <span className='dateSpan'>{weatherDate}</span>
        </div>
        <div className='locationContainer'>
          <span>{location}</span>
        </div>
      </div>
    </>
  );
};

export default DateAndLocation;
