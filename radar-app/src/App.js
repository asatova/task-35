import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./components/Player";

class App extends Component {
  state = {
    players: [],
    modalVisibility: false,
    currentData: "",
  };

  componentDidMount() {
    const players = [
      {
        firstName: "Mbappe",
        age: 23,
        club: "PSG",
        value: 110,
      },
      {
        firstName: "Sarah",
        age: 23,
        club: "PSG",
        value: 210,
      },
      {
        firstName: "Lukaku",
        age: 23,
        club: "PSG",
        value: 310,
      },
      {
        firstName: "Ronaldo",
        age: 23,
        club: "PSG",
        value: 200,
      },
    ];
    this.setState({ players });
  }

  removePlayer = (index) => {
    const players = [...this.state.players];
    players.splice(index, 1);
    this.setState({ players });
  };

  openModal = () => {
    this.setState({ modalVisibility: true });
  };

  closeModal = () => {
    this.setState({ modalVisibility: false });
  };
  changeCurrentData = (type, isInc) => {
    const newCurrentData = this.state.currentData
        ? this.state.currentData
        : {
          firstName: "none",
          age: 0,
          club: "none",
          value: 0,
        };
    if (type === "age") {
      if (isInc) {
        newCurrentData.age++;
      } else if (newCurrentData.age < 1) {
        newCurrentData.age = 0;
      } else {
        newCurrentData.age--;
      }
    }
    if (type === "value") {
      if (isInc) {
        newCurrentData.value++;
      } else if (newCurrentData.value < 1) {
        newCurrentData.value = 0;
      } else {
        newCurrentData.value--;
      }
    }

    this.setState({
      currentData: newCurrentData,
    });
  };

  saveChanges = () => {
    const {players, currentData} = this.state;
    players.push(currentData);
    currentData.firstName = "Player";
    this.setState(
        {
          players,
          modalVisibility:false,
        }
    )
  }
clearCurrentData = () => {
    this.setState({
      currentData: ""
    })
}


  render() {
    const { players, modalVisibility, currentData } = this.state;
    return (
        <div className="market">
          <div className="container">
            <h1>Transfer Market</h1>
            <div className="row">
              <div className="col">
                <button className="btn btn-primary m-2" onClick={this.openModal}>
                  Add a player
                </button>
                {modalVisibility ? <Player closeModal={this.closeModal} currentData={currentData} changeCurrentData={this.changeCurrentData} saveChanges={this.saveChanges} clearCurrentData={this.clearCurrentData}/> : null}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <table className="table table-hover table-sm">
                  <thead className="thead-light">
                  <tr>
                    <th>N</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Club</th>
                    <th>Market Value</th>
                  </tr>
                  </thead>
                  <tbody>
                  {players.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.age}</td>
                        <td>{item.club}</td>
                        <td>
                          <span className="badge bg-primary">${item.value}m</span>
                        </td>
                        <td>
                          <button className="btn btn-danger btn-sm" onClick={() => this.removePlayer(index)}>
                            Remove
                          </button>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
