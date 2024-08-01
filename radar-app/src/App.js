import {Component } from "react";

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
                <h1>Transefer market</h1>
            </div>
        </div>;
    }
}

export default App;
