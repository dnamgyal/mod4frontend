import React from 'react'
import '../App.css';

// class Outfit extends React.Component {

// handleClick = (e) => {


// }


//     render() { 
//         return ( 
//             <div onClick = {this.handleClick}>
//             <p>{this.props.name}</p>
//             </div>
//          );
//     }
// }
 
// export default Outfit ;


let Outfit = (props) => {
    return (
        <p>{props.name}</p>
    )
}


export default Outfit
