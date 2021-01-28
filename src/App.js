import React from 'react';
import './App.css';
// import Background from './components/Background';

import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <>
      <div className="background"></div>
      {/* <Background /> */}
      <HomeContainer />
      <footer><small> &copy;2021 Mostly Focused </small></footer>
    </>
  );
}

export default App;
