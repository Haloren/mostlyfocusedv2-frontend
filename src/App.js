import React from 'react';
import './App.css';

import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <>
      <div className="background"></div>
      
      <HomeContainer />
    
      <footer><small> &copy;2021 Mostly Focused </small></footer>
    </>
  );
}

export default App;
