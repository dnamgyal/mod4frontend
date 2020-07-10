import React from 'react'
import '../App.css';
import man from './man1.png'
import woman from './girl-model-1.png'
import Form from './Form'

class Mannequin extends React.Component {

  state = {
    choice: true
  }

  handleClick = () => {
    this.setState((prevState) =>{
    return {choice: !prevState.choice}
    })
  }

 render () {

      return (
        <React.Fragment>
          <button onClick={this.handleClick}>change model</button>
        {this.state.choice ? <img src={woman} onClick = {this.handleClick} id="male-model" alt="woman in underwear"/> :
          <img src={man} onClick = {this.handleClick} id="male-model" alt="man in underwear"/>
        }
      
        
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