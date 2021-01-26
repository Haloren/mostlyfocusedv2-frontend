import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <>
      <div className="background"></div>
      
      <HomeContainer />
    
      <footer className="help"><Link to={'/help'}>Help?</Link></footer>  
      <footer><small> &copy;2021 Mostly Focused </small></footer>
    </>
  );
}

export default App;
