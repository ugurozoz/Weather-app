import './unitSelect.css';

interface temperatureUnit {
  unit: 'F' | 'C';
}

const unitSelect: React.FC<temperatureUnit> = ({ unit }) => {
  const temperatureSelectButtons = ['F', 'C'].map((buttonText,index) => {
    const button = <button key={`unitButton${index}`} className={unit===buttonText ? 'active-unit':'' }>°{buttonText}</button>
    return button

  })


  return (
    <div className='unitSelect'>
      {temperatureSelectButtons}
    </div>
  );
};

export default unitSelect;
