import React, { Component } from 'react';
import './Counter.css'

export default class Counter extends Component {

    constructor(){
        super();
        this.state = {
            counter: 0
        }
        console.log('constructor');
    }

    increment = () => {
        this.setState({counter: this.state.counter + 1})
    }
    decrement = () => {
        this.setState({counter: this.state.counter - 1})
    }
    render() {
        console.log('render');
        return (
            <div style={{textAlign: 'center'}} className="mt-5 counterDiv py-5">
                <h1>state of component: {this.state.counter}</h1>
                <button className="btn btn-danger"
                    onClick={this.increment}>increment</button>
                <button className="btn btn-danger ml-5"
                    onClick={this.decrement}>decrement</button>
            </div>
        )
    }

    componentDidMount(){
        console.log('did mount')
    }

    componentWillUnmount(){
        console.log('will unmount');
    }

    componentDidUpdate(){
        console.log('did update')
    }
}
