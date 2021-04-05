import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            chirp: '',
            chirps: []
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            chirps: [{ id: uuidv4(), userName: this.state.userName, chirp: this.state.chirp },  ...this.state.chirps],
            userName: '',
            chirp: ''
        });
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                chirps: [
                    ...this.state.chirps,
                    {
                        id: uuidv4(),
                        userName: 'Luke',
                        chirp: 'Colon Poop, lols'
                    },
                    {
                        id: uuidv4(),
                        userName: 'Andrew',
                        chirp: 'lmao'
                    },
                    {
                        id: uuidv4(),
                        userName: 'Sam',
                        chirp: 'SMH'
                    }
                ]
            });
        }, 2000)
    }
    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-7">
                        <form className="form-group bg-light p-5 rounded shadow">
                            <input
                                onChange={e => this.setState({ userName: e.target.value })}
                                value={this.state.userName}
                                placeholder='User Name'
                                className='form-control mt-2' />
                            <input
                                onChange={e => this.setState({ chirp: e.target.value })}
                                value={this.state.chirp}
                                placeholder='Tell the Interwebs'
                                className='form-control mt-2' />
                            <button
                                onClick={e => this.handleSubmit(e)} className='btn btn-primary mt-2'>
                                ChirpChirp
                            </button>
                        </form>
                    </div>
                </section>
                <section className="row justify-content-center">
                    <div className="col-md-6 bg-light shadow">
                        <ul className="list-group">
                            {this.state.chirps.map(chirp => (
                                <div key={`chirps-${chirp.id}`} className='m-2'>
                                    <h5
                                        className="mt-3">
                                        {chirp.userName}
                                    </h5>
                                    <li key={`chirps-${chirp.id}`}
                                        className='list-group-item'>{chirp.chirp}
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        )
    }
}

export default App;