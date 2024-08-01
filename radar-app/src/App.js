import {Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import items from "ajv/lib/vocabularies/applicator/items";

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
        const {players} = this.state
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
                            <tbody>
                            {players.map((item,index) =>
                                <tr>
                                    <td>{index+1}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>;
    }
}

export default App;
