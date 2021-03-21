import './compass';

interface compassAngle {
  angle: number;
}

const compass: React.FC<compassAngle> = ({ angle }) => {
  return <span className='wd-compass'></span>;
};

export default compass;
