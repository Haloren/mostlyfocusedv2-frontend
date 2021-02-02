import React from 'react';

class WeatherUpdate extends React.Component {

    state = { zip: '' }

    render() {
        return (
            <div>
                <form onSubmit={}>
                    <input type="text" name="zip" value={} onChange={} placeholder="Zip Code" required ></input>
                    <input type="submit" value="Change"></input>
                </form>
            </div>
        )
    }
}

export default (WeatherUpdate)