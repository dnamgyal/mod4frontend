import React from 'react'
import '../App.css';

class Outfit extends React.Component {

handleClick = (e) => {
console.log(e.target)

}

    render() { 
   
        return ( 
            <div onClick = {this.handleClick}>
            <p>{this.props.name}</p>
            </div>
         );
    }
}
 
export default Outfit ;




