import React, {Component} from 'react';

class Nav extends Component{
    constructor(props){
        super(props);
        this.setLanguage = this.setLanguage.bind(this);
        this.state = {lang: 'en'};
    }

    isActive(hash) {
        return 'nav-link ' + ((this.props.hash===hash) ?  'active' : 'visited');
    }

    setLanguage(e){
        this.setState({lang: e.currentTarget.lang});
    }

    render(){
        return (
            <nav className="Page-nav" lang={this.state.lang}>
                <a className={this.isActive('#about')} href="#about">About</a>
                <a className={this.isActive('#trainer')} href="#trainer">Trainer</a>
                <div className="white-space"/>
                <img className="lang-selector" src="/images/en.png" onClick={this.setLanguage} lang="en" alt="Change language to English"/>
                <img className="lang-selector" src="/images/ru.png" onClick={this.setLanguage} lang="ru" alt="Сменить язык на Русский"/>
            </nav>
        );
    }
}


export default Nav;
