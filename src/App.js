import React, {Component} from 'react';
import './App.css';
import Counter from './Counter';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
    state = {
        mount: false
    }

    mount = () => {this.setState({mount: true})}
    unMount = () => {this.setState({mount: false})}
    render(){
        return(
            <div className="App container mt-5 text-center">
                <button className="btn btn-primary" 
                    onClick={this.mount}>mount Counter component</button>
                <button className="btn btn-primary ml-5" 
                    onClick={this.unMount}>unMount Counter component</button>
                {
                    this.state.mount ? <Counter /> : null
                }
            </div>
        )
    }
}

export default App;