import './App.css';
import { Component } from 'react';
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
            language: null,
            languages: [],
            page: null,
            pages: [],
            exception: null,
        };
    }

    componentDidMount() {
        let path = new URL(window.location.href).pathname.split('/').filter((v) => v);
        let [language, page] = path;
        JSONLoader(apiURL + languagesURL)
            .then(
                ({ isReady, json, exception }) => {
                    if (json.filter(v => v.language === language).length === 0)
                        language = json.filter(v => v.isDefault)[0].language;
                    this.setState({
                        languages: json,
                        exception: exception,
                        isReady: isReady,
                        language: language
                    });
                }
            ).then(
                () => {
                    JSONLoader(apiURL + '/' + language + navURL)
                        .then(
                            ({ isReady, json, exception }) => {
                                if (json.filter(v => v.page === page).length === 0)
                                    page = json.filter(v => v.isDefault)[0].page;
                                this.setState({
                                    isReady: isReady,
                                    pages: json,
                                    page: page,
                                    exception: exception
                                });
                            }
                        );
                }
            );
    }

    componentWillUnmount() {
    }

    render() {
        const { isReady, languages, language, page, pages, exception } = this.state;
        if (!isReady) return <div className="App">loading...</div>
        if (exception) return <div className="App">{exception.message}</div>
        return (
            <div className="App">
                <Header page={page} languages={languages} language={language} pages={pages} />
                <Main page={page} languages={languages} language={language} pages={pages} />
                <Footer />
                <p>{JSON.stringify(languages)}</p>
            </div>
        )
    }
}

export default App;
