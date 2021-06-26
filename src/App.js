import './App.css';
import React, { Component } from 'react';
import Header from './app/header/';
import Main from './app/main/';
import Footer from './app/footer/';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleHashChange = this.handleHashChange.bind(this);
        this.state = { hash: (window.location.hash) ? window.location.hash : '#about' };
    }

    handleHashChange(e) {
        const hash = (e) ? new URL(e.newURL).hash : '#about';
        this.setState({ hash: hash });
    }

    componentDidMount() {
        window.addEventListener("hashchange", this.handleHashChange, false);
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.handleHashChange, false);
    }

    render() {
        return (
            <div className="App">
                <Header hash={this.state.hash} />
                <Main hash={this.state.hash} />
                <Footer />
            </div>
        );
    }
}

export default App;
