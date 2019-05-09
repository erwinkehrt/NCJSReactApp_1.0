import React from 'react';
import { Card } from '../components/Card';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    name: 'Erwin',
                    age: 27
                }
            ]
        };
    }

    componentDidMount() {
        this.name.focus();
    }

    onSubmit = event => {
        event.preventDefault();
        const name = this.name.value;
        const age = this.age.value;
        const info = { name: name, age: age };
        const data = [...this.state.data, info];
        this.setState({
            data: data
        });
        this.name.value = "";
        this.age.value = "";
        this.name.focus();
    };

    render() {
        return (
            <div className="container">
                <h1>Northwest Chicago JavaScript Meetup</h1>

                <hr />

                <div className="row">
                    <form className="form-inline" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            className="form-control mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Name"
                            ref={input => this.name = input} />
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Age"
                                ref={input => this.age = input} />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>

                <hr />

                <div className="row">
                    {
                        this.state.data.map((info, index) => <Card key={index} info={info} />)
                    }
                </div>
            </div>
        );
    }
}

export default App;