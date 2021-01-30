import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchWeather, fetchUsers } from '../redux/actionCreators';

import Help from '../components/Help';
import UsersData from '../components/UsersData';

class HomeContainer extends React.Component {

    componentDidMount() {
        // console.log("Home", this.props)
        this.props.fetchWeather()
        this.props.fetchUsers()
    }

    render() {
        return (
            <Switch>
                <Route exact path='/help' component= { Help }></Route>
                <Route 
                    path={['/', '/users', '/users/1']} 
                    render={(routerProps) => 
                    <UsersData {...routerProps} users={this.props.users} />}>
                </Route>
            </Switch>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchWeather, fetchUsers })(HomeContainer);