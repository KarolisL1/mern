import React, { Component } from "react";

class PersonCard extends Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.lname}, {this.props.fname}</h2>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.color}</p>
            </div>
    );
    }
}

export default PersonCard;