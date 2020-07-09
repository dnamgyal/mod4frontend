import React from 'react'
import '../App.css';
import man from './man1.png'
import Form from './Form'

class Mannequin extends React.Component {






 render () {

      return (
        <React.Fragment>
        <img src={man} onClick = {this.handleClick} id="male-model" alt="man in underwear"/>
     
       <Form/>
        </React.Fragment>
      )
    
    }
    
}
    export default Mannequin;