import UnitSelect from '../unitSelect/unitSelect';
import ForeCasts from '../forecasts/forecasts';
import Highlights from '../highlights/highlights';
import { Weather } from '../../types/';
import { formatDate } from '../../utilities/formatDate';

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
        temperatureMax: `${Math.floor(forecast.max_temp)}°C`,
        temperatureMin: `${Math.floor(forecast.min_temp)}°C`,
      };
    }
  );

  const { nextFiveDays, ...highlightsValues } = forecastsParams;
  //console.log("HIGHLIGHTS",highlightsValues)

  return (
    <>
      <UnitSelect unit='F' />
      <ForeCasts forecasts={nextFiveDaysValues} />
      {/* <Highlights highlights={highlightsValues} /> */}
      <Highlights {...highlightsValues}  />
    </>
  );
};

export default forecatsHighlights;
