import React, {Component} from 'react';

class Nav extends Component{
    isActive(hash) {
        return (this.props.hash===hash) ? 'nav-link active' : 'nav-link';
    }

    render(){
        return (
            <nav className="Page-nav">
                <a className={this.isActive('#about')} href="#about">About</a>
                <a className={this.isActive('#trainer')} href="#trainer">Trainer</a>
            </nav>
        );
    }
}


export default Nav;
