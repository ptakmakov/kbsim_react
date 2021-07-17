import {Component} from "react";

class JSONLoader extends Component{
    constructor(props){
        super(props);
        this.state = {
            json: null,
            isReady: true,
            exception: null,
        };
    }

    componentDidMount(){
        this.setState({isReady: false});

        fetch(this.props.location)
            .then(result => result.json())
            .then(
                (result) => {
                    this.setState({
                        isReady: true,
                        json: result
                    });
                },
                (error) => {
                    this.setState({
                        isReady: true,
                        exception: error
                    })
                }
            );
    }

    render(){
        console.log(this.state.json);
        return this.props.children(this.state);
    }
}

export default JSONLoader;
