import './compass.css';

interface compassAngle {
  angle: number;
}

const compass: React.FC<compassAngle> = ({ angle }) => {
  return <span className='wd-compass'><em style={{transform: `rotate(${angle}deg)`}}></em></span>;
};

export default compass;
