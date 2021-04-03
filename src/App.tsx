import Current from './components/current/current';
import ForecatsHighlights from './components/forecasts-highlights/forecasts-highlights';
import { Provider } from "react-redux";
import { store } from "./state/";
// import axios from 'axios';
import './App.css';

function App() {

  // https://www.metaweather.com/api/location/search/?query=san


  return (
    <Provider store={store}>
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
    </Provider>
    
  );
}

export default App;
