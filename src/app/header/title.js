import React, {Component} from 'react';

class Title extends Component{
    render(){
        return(
            <h3 className="Page-header">{this.props.title}</h3>
        );
    }
}

export default Title;
