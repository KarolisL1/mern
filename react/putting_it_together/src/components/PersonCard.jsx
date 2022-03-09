import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        };
    }
    render() {
        return (
            <div className="card">
                <h2>{this.props.lname}, {this.props.fname}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.color}</p>
                <button onClick={() => this.setState({ age: parseInt(this.state.age) + 1 })}>Birthday Button for {this.props.fname} {this.props.lname}</button>
            </div>
        );
    }
}

export default PersonCard;