import React, {Component} from 'react';


class Personcard extends Component{
    render (){
        return (
            <div>
                <h1>{this.props.firstName}</h1>
                <h1>{this.props.lastName}</h1>
                <p>{this.props.age}</p>
                <p>{this.props.hairColor}</p>
            </div>
            
            )
        }
    }

export default Personcard;