import {Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    state = {
        players: [],

    };

    componentDidMount() {
        const players = [
            {
                firstName: "mbappe",
                age:23,
                club:"psj",
                value:110,
            },
            {
                firstName: "Sarah",
                age:23,
                club:"psj",
                value:210,
            },
            {
                firstName: "Lukaku",
                age:23,
                club:"psj",
                value:310,
            },
            {
                firstName: "Ronaldo",
                age:23,
                club:"psj",
                value:200,
            },
        ];
        this.setState(
            { players,}
        );
    }

    render() {
        return <div className="market">
            <div className="container">
                <h1>Transfer market</h1>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead className="thead-light">
                            <tr>
                                <th> N </th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Club</th>
                                <th>Market value</th>

                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
            <button className="btn-danger">asdasdasd</button>

        </div>;
    }
}

export default App;
