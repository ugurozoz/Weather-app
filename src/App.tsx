import Current from './components/current/current';
import ForecatsHighlights from './components/forecasts-highlights/forecasts-highlights';
// import axios from 'axios';
import './App.css';

function App() {

  // https://www.metaweather.com/api/location/search/?query=san


  return (
    <div className='App'>
      <main>
        <section className='current'>
          <Current />
        </section>
        <section className='forecasts-highlights'>
          <ForecatsHighlights />
        </section>
      </main>
    </div>
  );
}

export default App;
