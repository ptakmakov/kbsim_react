import React, { Component } from 'react';
//import {Switch, Route, Link} from 'react-router-dom';

class Main extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        return <main className="App-content">{this.props.hash}</main>;
    }
}

export default Main;
