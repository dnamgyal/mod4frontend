import React from 'react'
import '../App.css';
import Clothing from './Clothing'

class Outfit extends React.Component {

    state = {
        clicked: false,
        show: false
    }

handleClick = (e) => {
    e.preventDefault()
    return this.setState((prevState)=>{
        return {clicked: !prevState.clicked}
     })   
}

handleShow = (e) => {
    e.preventDefault()
    return this.setState((prevState)=>{
        return {show: !prevState.clicked}
     })   

}


showOutfit = () => {
   return  this.props.outfitItems.map((item)=>{
    
    return     <Clothing
    key = {item.item.id}
    name = {item.item.name}
    brand = {item.item.brand}
    image = {item.item.image}
    category = {item.item.category}
    id ={item.item.id}
    addOutfits = {this.props.addOutfits}
    />
    })
}

    render() { 
        return ( 
            <div onDoubleClick= {this.handleClick}>
            <p onClick={this.handleShow}>{this.props.name}</p>
    
                {this.state.show ? this.showOutfit() : null}
    
            </div>
         );
    }
}
 
export default Outfit ;




