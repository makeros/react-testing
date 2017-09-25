import React, { Component } from 'react';

class TestComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clickCount: 0
        }
    }
    
    buttonClick() {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }

    render() {
        return (
            <div>
                <div><button onClick={this.buttonClick.bind(this)}>Click me!</button></div>
                Test component clicked {this.state.clickCount} times!
            </div>
        )
    }
} 


export default TestComponent;