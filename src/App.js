import './App.css';
import React, { Component } from 'react';
import Header from './app/header/';
import Main from './app/main/';
import Footer from './app/footer/';
import JSONLoader from './app/loader';

const apiURL = "/fapi";
const languagesURL = "/languages.json";
const navURL = "/nav.json";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            languages: null,
            exception: null,
            language: null,
            page: 'about',
        };
    }

    componentDidMount() {
        //let ready = false;
        let path = new URL(window.location.href).pathname.split('/').filter((v) => v);
        let [language, page] = path;
        console.log(language);
        console.log(page);
        JSONLoader(apiURL + languagesURL)
            .then(
                ({ isReady, json, exception }) => {
                    console.log(json.filter(v => v.isDefault)[0].language);
                    if (json.filter(v => v.language === language).length === 0) language = json.filter(v => v.isDefault)[0].language;
                    this.setState({ languages: json, exception: exception, isReady: isReady, language: language, page: page });
                    console.log(this.state);
                }
            );
    }

    componentWillUnmount() {
    }

    render() {
        const { isReady, languages, exception, language, page } = this.state;
        if (!isReady) return <div className="App">loading...</div>
        if (exception) return <div className="App">{exception.message}</div>
        return (
            <div className="App">
                <Header page={page} languages={languages} language={language} />
                <Main page={page} languages={languages} language={language} />
                <Footer />
                <p>{JSON.stringify(languages)}</p>
            </div>
        )
    }
}

export default App;
