import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DateTime from '../components/DateTime'
import Help from '../components/Help'

class HomeContainer extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path='/help' component= { Help }></Route>
                <Route exact path='/' component= { DateTime }></Route>
            </Switch>
        )
    }
}

export default (HomeContainer);