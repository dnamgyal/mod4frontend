import React from 'react'
import '../App.css';
import man from './man1.png'


class Mannequin extends React.Component {

state = {
name: ""

}

handleClick = (e) => {
  this.setState({    
    [e.target.name] : e.target.value
  }) 
}

handleButton = (e) => {
e.preventDefault()
console.log(e.target)

}


 render () {

      return (
        <React.Fragment>
        <img src={man} onClick = {this.handleClick} id="male-model" alt="man in underwear"/>
     
        <form onSubmit={this.handleButton}> 
        <input input-type="text" name="name" placeholder="Name this look" onChange={this.handleInput} value={this.state.name}></input><br></br>
        <input type="submit" name="submit" value="save this look!"></input>
        </form>
        </React.Fragment>
      )
    
    }
    
}
    export default Mannequin;