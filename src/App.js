import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Background from './components/Background';

import Help from './components/Help';
// import WeatherUpdate from './components/WeatherUpdate';
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <>
      <div className="background"></div>
      <Background />
      <Switch>
        <Route exact path={'/help'} component= { Help }></Route>
        <Route path={['/', '/users', '/users/1']} component= { HomeContainer }></Route>
        {/* <Route path={'/zip'} component= { WeatherUpdate }></Route> */}
      </Switch>
      <footer><small> &copy;2021 Mostly Focused </small></footer>
    </>
  );
}

export default App;
