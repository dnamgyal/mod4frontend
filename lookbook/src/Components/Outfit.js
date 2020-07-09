import React from 'react'
import '../App.css';
import OutfitItem from './OutfitItem'
import {Button} from 'react-bootstrap'

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

// let Outfit = (props) => {


//     let outfit = props.outfit["outfit_items"]
//     let outfitItemsToReturn = outfit.map((outfitItem) => {
//             return <OutfitItem item={outfitItem.item} key={outfitItem.id}/>
//         })
//     let handleDelete = (evt) => {
//         console.log(props.outfit.id)
//         fetch(`http://localhost:4000/outfits/${props.outfit.id}`, {
//             method: "DELETE"
//         }).then(r => r.json()).then(props.deleteOutfit(props.outfit.id))
//     }
//     return (
//         <div>
//             <h3>{props.outfit.name} <Button onClick={handleDelete} variant="outline-danger">Delete Outfit</Button>{' '}</h3>
//             {outfitItemsToReturn}
           
//         </div>
//     )}
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




