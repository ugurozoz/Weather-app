import UnitSelect from '../unitSelect/unitSelect';
import ForeCasts from '../forecasts/forecasts';

const dummyForecasts = [
  { day: 'Tomorrow', image: 'Shower.png', temperatureMax: '30°C', temperatureMin: '11°C' },
  { day: 'Sun, 7 Jun', image: 'Shower.png', temperatureMax: '30°C', temperatureMin: '11°C' },
  { day: 'Mon, 8 Jun', image: 'Shower.png', temperatureMax: '30°C', temperatureMin: '11°C' },
  { day: 'Tue, 9 Jun', image: 'Shower.png', temperatureMax: '30°C', temperatureMin: '11°C' },
  { day: 'Wed, 10 Jun', image: 'Shower.png', temperatureMax: '30°C', temperatureMin: '11°C' }

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
