import React, {Component} from 'react';


class Personcard extends Component{
    constructor (props){
        super(props);
        this.state = {
            ageperson:this.props.age,
        };
    }

    addYear = () => {
        let agemoreone=this.state.ageperson+1;
        this.setState({ ageperson: agemoreone });
    };
    render (){
        const {firstName,lastName,age,hairColor}=this.props;
        return (
            <div>
                <h3>{firstName}, {lastName}</h3>
                <h3>Age: {this.state.ageperson}</h3>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.addYear}>Sumar un año a: {firstName} {lastName} </button>
            </div>
            
            )
        }
    }

export default Personcard;