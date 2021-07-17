import './App.css';
import React, { Component } from 'react';
import Header from './app/header/';
import Main from './app/main/';
import Footer from './app/footer/';
import Loader from './app/loader';




class App extends Component {
    constructor(props) {
        super(props);
        this.handleHashChange = this.handleHashChange.bind(this);
        this.state = {
            hash: (window.location.hash) ? window.location.hash : '#about',
            isReady: true,
            languages: null,
            exception: null
        };
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
            <Loader location="./fapi/languages.json">
                {({ json, isReady, exception }) => {
                    if(!isReady) return <div className="App">loading...</div>
                    if(exception) return <div className="App">{exception.message}</div>
                    return (
                        <div className="App">
                            <Header hash={this.state.hash} languages={json} />
                            <Main hash={this.state.hash} languages={json} />
                            <Footer />
                            <p>{JSON.stringify(json)}</p>
                        </div>
                    )
                }}
            </Loader>
        );
    }
}

export default App;
