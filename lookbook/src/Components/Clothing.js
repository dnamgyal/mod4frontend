import React from 'react'
import '../App.css';
import Draggable, {DraggableCore} from 'react-draggable';

class Clothing extends React.Component {

state = {
    clicked: false
}

handleClick = (e) => {
   return this.setState((prevState)=>{
       return {clicked: !prevState.clicked}
    })
}

    render() { 
     
    let img = <img onDoubleClick={this.handleClick} className="firstimg" src={this.props.image}/>
 
    if (this.props.category === "top"){
        img = <img onDoubleClick={this.handleClick} className="tops" src={this.props.image}/>
    }
    if (this.props.category === "bottom"){
        img = <img onDoubleClick={this.handleClick} className="bottom" src={this.props.image}/>

    }
        return ( 
 
        <div>
        {this.state.clicked ? 
        <Draggable>
        {img}
        </Draggable>
        : 
        <p onClick={this.handleClick}>{this.props.name}</p>
        }
        </div>
    
 
         );
    }
}
 
export default Clothing;