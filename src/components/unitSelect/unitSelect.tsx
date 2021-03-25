import './unitSelect.css';

interface temperatureUnit {
  unit: 'F' | 'C';
}

const unitSelect: React.FC<temperatureUnit> = ({ unit }) => {
  const temperatureSelectButtons = ['F', 'C'].map(buttonText => {
    const button = <button className={unit===buttonText ? 'active-unit':'' }>°{buttonText}</button>
    return button

  })


  return (
    <div className='unitSelect'>
      {temperatureSelectButtons}
    </div>
  );
};

export default unitSelect;
