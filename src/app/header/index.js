import React, { Component } from 'react';
import Nav from './nav';
import Title from './title';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <Title/>
                <Nav hash={this.props.hash}/>
            </header>
        );
    }
}

export default Header;
