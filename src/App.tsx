import React from 'react';
import Current from './components/current/current';
import ForecatsHighlights from './components/forecasts-highlights/forecasts-highlights';
import './App.css';

function App() {
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
