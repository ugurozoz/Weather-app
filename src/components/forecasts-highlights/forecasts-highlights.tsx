import UnitSelect from '../unitSelect/unitSelect';
import ForeCasts from '../forecasts/forecasts';
import Highlights from '../highlights/highlights';
import { Weather } from '../../types/';
import { formatDate } from '../../utilities/formatDate';

const dummyForecasts = [
  {
    day: 'Tomorrow',
    image: 'Showers.png',
    temperatureMax: '30°C',
    temperatureMin: '11°C',
  },
  {
    day: 'Sun, 7 Jun',
    image: 'Showers.png',
    temperatureMax: '30°C',
    temperatureMin: '11°C',
  },
  {
    day: 'Mon, 8 Jun',
    image: 'Showers.png',
    temperatureMax: '30°C',
    temperatureMin: '11°C',
  },
  {
    day: 'Tue, 9 Jun',
    image: 'Showers.png',
    temperatureMax: '30°C',
    temperatureMin: '11°C',
  },
  {
    day: 'Wed, 10 Jun',
    image: 'Showers.png',
    temperatureMax: '30°C',
    temperatureMin: '11°C',
  },
];

interface ForeCastAndHighlights {
  forecastsParams: {
    nextFiveDays: Weather[];
    windSpeed: number;
    windDirection: number;
    windDirectionCompass: string;
    humidity: number;
    visibility: number;
    airPressure: number;
  };
}

const forecatsHighlights: React.FC<ForeCastAndHighlights> = ({
  forecastsParams,
}: ForeCastAndHighlights): JSX.Element => {
  // const dummyForecasts =
  const nextFiveDaysValues = forecastsParams.nextFiveDays.map(
    (forecast, index) => {
      const dayName =
        index === 0
          ? 'Tomorrow'
          : formatDate(new Date(forecast.applicable_date));
      return {
        day: dayName,
        image: `${forecast.weather_state_abbr}.png`,
        temperatureMax: `${forecast.max_temp}°C`,
        temperatureMin: `${forecast.min_temp}°C`,
      };
    }
  );

  console.log("NEXT FIVE",nextFiveDaysValues);

  return (
    <>
      <UnitSelect unit='F' />
      <ForeCasts forecasts={dummyForecasts} />
      <Highlights />
    </>
  );
};

export default forecatsHighlights;
