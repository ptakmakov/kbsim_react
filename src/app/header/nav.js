import React, { Component } from 'react';

class Nav extends Component {
    render() {
        const { page, pages, language, languages, isReady } = this.props;
        if (!isReady) return <p>Loading...</p>
        return (
            <nav className="Page-nav">
                {
                    pages.map(
                        v => {
                            return <a className={(v.page === page) ? 'nav-link active' : 'nav-link visited'} href={'/' + language + '/' + v.page}>{v.link}</a>
                        }
                    )
                }
                <div className="white-space" />
                {
                    languages.map(
                        v => {
                            return <a href={'/' + v.language + '/' + page}><img className={(v.language === language)?'lang-selector active': 'lang-selector'} src={v.icon} alt={v.alt} /></a>
                        }
                    )
                }
            </nav>
        );
    }
}


export default Nav;
