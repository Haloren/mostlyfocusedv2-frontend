import React from 'react';
import { connect } from 'react-redux';
import { updateZip } from '../redux/actionCreators';

class WeatherUpdate extends React.Component {

    state = { zip: '' }

    handleOnChange = (event) => {
        this.setState({
            zip: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        debugger
        this.props.updateZip(this.state)
        this.setState({ zip: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="zip" value={this.state.zip} onChange={this.handleOnChange} placeholder="Zip Code" required ></input>
                    <input type="submit" value="Change"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, { updateZip })(WeatherUpdate)