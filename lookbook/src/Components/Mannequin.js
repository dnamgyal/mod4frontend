import React from 'react'
import '../App.css';
import man from './man1.png'
import Form from './Form'

class Mannequin extends React.Component {


 render () {

      return (
        <React.Fragment>
        <img src={man} onClick = {this.handleClick} id="male-model" alt="man in underwear"/>
        <br></br>
        <br></br>
       <Form
       myOutfits={this.props.myOutfits}
       clearMyOutfits={this.props.clearMyOutfits}
       addOutfit={this.props.addOutfit}
       />
      
        </React.Fragment>
      )
    
    }
    
}
    export default Mannequin;