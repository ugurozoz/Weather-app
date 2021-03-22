import './percentBar.css'


interface barParameters {
  value: number;
  colors: string[];
}

const percentBar: React.FC<barParameters> = ({ value, colors }) => {
  
  return <div className="percentBar">
    <div className="barIndicators"><span>0</span><span>50</span><span>100</span></div>
    <div className="barItself"><span className="valueBar" style={{width: `calc( 100% * (${value} / 100))`}}></span></div>
    <div className="percent-symbol">%</div>
    
  </div>

}

export default percentBar;
