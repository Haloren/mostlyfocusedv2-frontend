import React from 'react';

class TodoForm extends React.Component {

    state = { }

    render() {
        return (
            <div>
                <form onSubmit={}>
                    <input type="text" name="title" value={} onChange={} placeholder="Add an Todo" required ></input>
                    <input type="date" name="date" value={} onChange={} required ></input>
                    <input type="submit" value="+"></input>
                </form>
            </div>
        )
    }
}

export default (TodoForm)