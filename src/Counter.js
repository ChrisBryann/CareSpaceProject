import React, {Component} from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentClicks: 0,
            isEven: true
        }
        this.handleClicks = this.handleClicks.bind(this);
        this.restartClicks = this.restartClicks.bind(this);
    }
    handleClicks() { //functions don't need to be determined with "function" in a class
        this.setState({currentClicks: this.state.currentClicks + 1, isEven: !this.state.isEven}, function(){ //function is used to instantly do work synchronously
            if(this.state.currentClicks === 7){
                alert("Congratulations!")
            }
        })

    }
    restartClicks() {
        this.setState({currentClicks: 0})
    }
    render(){
        const {count, name} = this.props;
        return(
            <div>
                <h1>This is from the Counter component and it is made by {name}</h1>
                <p>The count is: {count}</p>
                <h4>You clicked {this.state.currentClicks} times</h4>
                <button onClick = {this.handleClicks}>Click me</button>
                <br></br>
                <button onClick = {this.restartClicks}>Restart count</button>
                <h4>The number of clicks is {this.state.isEven ? "even" : "odd"}</h4>
            </div>
        );
    }
}

export default Counter;