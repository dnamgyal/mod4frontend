import React from 'react'
import '../App.css';
import man from './man1.png'


class Mannequin extends React.Component {

state = {


}

handleClick = (e) => {
        console.log("this is client x", e.clientX)
        console.log("this is client y", e.clientY)
        
        }

    
 render () {

      return (
        <React.Fragment>
        <img src={man} onClick = {this.handleClick} id="male-model" alt="man in underwear"/>
        </React.Fragment>
      )
    
    }
    
}
    export default Mannequin;