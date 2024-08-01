import React, { Component } from "react";

class Player extends Component {
    cancelBtn = () => {
        this.props.closeModal();
    };

    changeCurrentData = (type, isInc) => {
        this.props.changeCurrentData(type, isInc);
    };
    saveChanges = () => {
        this.props.saveChanges();

    };
    componentWillUnmount() {
        this.props.clearCurrentData();
    }

    render() {
        const { currentData } = this.props;

        return (
            <div className="card">
                <div className="card-header">Add Player Modal</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <h5>Player's age</h5>
                            <div className="btn-group">
                                <div className="btn btn-secondary" onClick={() => this.changeCurrentData("age", false)}></div>
                                <div className="btn">{currentData ? currentData.age : 0}</div>
                                <div className="btn btn-info" onClick={() => this.changeCurrentData("age", true)}></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h5>Player's value</h5>
                            <div className="btn-group">
                                <div className="btn btn-secondary" onClick={() => this.changeCurrentData("value", false)}></div>
                                <div className="btn">{currentData ? currentData.value : 0}</div>
                                <div className="btn btn-info" onClick={() => this.changeCurrentData("value", true)}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger m-1" onClick={this.cancelBtn}>Cancel</button>
                    <button className="btn btn-success m-1" onClick={this.saveChanges}>Save changes</button>
                </div>
            </div>
        );
    }
}

export default Player;
