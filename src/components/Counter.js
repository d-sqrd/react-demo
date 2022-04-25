import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    
    incrementCnt() {
        this.setState((prevState) => {
            this.state.count = prevState.count + 1;
            console.log(prevState.count);
        }, () => console.log(this.state.count));
    }

    incrementFiveTimes() {
        this.incrementCnt();
        this.incrementCnt();
        this.incrementCnt();
        this.incrementCnt();
        this.incrementCnt();
    }
    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.incrementFiveTimes()}>Increment count</button>
            </div>
        )
    }

}

export default Counter;