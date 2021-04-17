import { useTypedSelector } from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-actions';
import './unitSelect.css';

const UnitSelect: React.FC = (): JSX.Element => {
  const temperatureUnit = useTypedSelector(
    (state) => state.settings.weatherUnit
  );
  const { toggleTemperatureUnit } = useActions();

  const temperatureSelectButtons = ['F', 'C'].map((buttonText, index) => {
    const button =
      buttonText === temperatureUnit ? (
        <button key={`unitButton${index}`} className={'active-unit'}>
          °{buttonText}
        </button>
      ) : (
        <button key={`unitButton${index}`} onClick={toggleTemperatureUnit}>
          °{buttonText}
        </button>
      );
    return button;
  });

  return <div className='unitSelect'>{temperatureSelectButtons}</div>;
};

export default UnitSelect;
