import UnitSelect from '../unitSelect/unitSelect';
import ForeCasts from '../forecasts/forecasts';

const dummyForecasts = [
  { day: 'Tomorrow', image: 'Shower.png', temperatureMax: '30', temperatureMin: '15' },
  { day: 'Sun, 7 Jun', image: 'Shower.png', temperatureMax: '30', temperatureMin: '15' },
  { day: 'Mon, 8 Jun', image: 'Shower.png', temperatureMax: '30', temperatureMin: '15' },
  { day: 'Tue, 9 Jun', image: 'Shower.png', temperatureMax: '30', temperatureMin: '15' },
  { day: 'Wed, 10 Jun', image: 'Shower.png', temperatureMax: '30', temperatureMin: '15' }

]



const forecatsHighlights: React.FC = () => {
  return (
    <>
      <UnitSelect />
      <ForeCasts forecasts={dummyForecasts}/>
    </>
  );
};

export default forecatsHighlights;
