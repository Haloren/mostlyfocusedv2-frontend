import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../redux/actionCreators';

class WeatherUpdate extends React.Component {

    state = { zip: '' }

    handleOnChange = (event) => {
        this.setState({
            zip: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        // debugger;
        this.props.updateUser(this.state, this.props.user.id);
        this.setState({ zip: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input className="zip-input" type="number" name="zip" value={this.state.zip} onChange={this.handleOnChange} placeholder="Zip Code" minLength="5" maxLength="5" required ></input>
                    <input type="submit" value="Change"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, { updateUser })(WeatherUpdate)