import React from 'react';
import Mannequin from './Mannequin'
import '../App.css';


class Form extends Component {

    state = {
        name: ""
        
        }

        handleClick = (e) => {
            this.setState({    
              [evt.target.name] : evt.target.value
            }) 
          }
          
          handleButton = (e) => {
          e.preventDefault()
          console.log(e.target)
          
          }

    render() { 
        return (  
            <div>
            <form onSubmit={this.handleButton}> 
            <input input-type="text" name="name" placeholder="Name this look" onChange={this.handleInput} value={this.state.name}></input><br></br>
            <input type="submit" name="submit" value="save this look!"></input>
            </form>
            </div>

        );
    }
}
 
export default Form;