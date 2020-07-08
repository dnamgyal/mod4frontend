import React from 'react'
import '../App.css';
import Draggable, {DraggableCore} from 'react-draggable';

class Clothing extends React.Component {

state = {
    clicked: false
}


//everytime you move an item (mouseup), remove item from clothing list, and then add to outfitlist

handleClick = (e) => {
   return this.setState((prevState)=>{
       return {clicked: !prevState.clicked}
    })
}

handleMouser = (e) => {

return this.setState({grid:[e.clientX, e.clientY]})

}

handleStop = () => {
    
    this.props.addOutfits(this.props.id)
}

    render() { 
     
    
    let img = <img onDoubleClick={this.handleClick} className="firstimg" src={this.props.image}/>
    if (this.state.clicked) {
    if (this.props.category === "top"){
        img = <img onDoubleClick={this.handleClick} onMouseUp={this.handleMU} className="tops" height="230" src={this.props.image}/>
    }
    if (this.props.category === "bottom"){
        img = <img onDoubleClick={this.handleClick} onMouseUp={this.handleMU} className="bottom" height="500" src={this.props.image}/>

    }
    if (this.props.category === "footwear"){
        img = <img onDoubleClick={this.handleClick} onMouseUp={this.handleMU} className="bottom" height="450" src={this.props.image}/>

    }
    if (this.props.category === "headwear"){
        img = <img onDoubleClick={this.handleClick} onMouseUp={this.handleMU} className="bottom" height="200" src={this.props.image}/>

    }
}  else {
    img = <img onDoubleClick={this.handleClick} className="firstimg" src={this.props.image} height="80" width="80"/>
}

   

        return ( 
 
        <div className="clothing-items">
            
        <Draggable

        onStop = {this.handleStop}
        >
        <div className="gridtest">
        {img}
        </div>
        </Draggable>
       
        
        </div>
    
 
         );
    }
}
 
export default Clothing;