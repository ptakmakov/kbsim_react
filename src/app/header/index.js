import './header.css';
import React, { Component } from 'react';
import Nav from './nav';
import Title from './title';

class Header extends Component {
    render() {
        const { page, pages, language, languages, isReady } = this.props;
        if (pages.length === 0) return <p>Loading...</p>
        return (
            <header className="App-header">
                <Title title={pages.filter(v => v.page === page)[0].title} />
                <Nav page={page} pages={pages} language={language} languages={languages} isReady={isReady} />
            </header>
        );
    }
}

export default Header;
