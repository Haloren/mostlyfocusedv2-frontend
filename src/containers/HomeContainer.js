import React from 'react';

import { connect } from 'react-redux';
import { fetchWeather, fetchUsers } from '../redux/actionCreators';

import DateTime from '../components/DateTime';
import Weather from '../components/Weather';
import UsersData from '../components/UsersData';

class HomeContainer extends React.Component {

    componentDidMount() {
        // console.log("Home", this.props)
        this.props.fetchWeather()
        this.props.fetchUsers()
    }

    render() {
        return (
            <>
                <DateTime />
                <UsersData users={this.props.users.users}/>
                <Weather weather={this.props.weather && this.props.weather.weather} />
            </>
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