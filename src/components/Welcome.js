import React, { Component } from 'react';

class Welcome extends Component {

    constructor() {
        super();
        this.state = {
            message: "Welcome!"
        }
    }
    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.buttonClicked()}>Subscribe</button>
            </div>
        )
    }

    buttonClicked() {
        this.setState({
            message: "Subscribed succesfully!"
        })
    }
}

export default Welcome;