import React from 'react'
import '../App.css';
import OutfitItem from './OutfitItem'
import {Button} from 'react-bootstrap'


// class Outfit extends React.Component {

// handleClick = (e) => {


// }


//     render() { 
//         return ( 
//             <div onClick = {this.handleClick}>
//             <p>{this.props.name}</p>
//             </div>
//          );
//     }
// }
 
// export default Outfit ;


let Outfit = (props) => {


    let outfit = props.outfit["outfit_items"]
    let outfitItemsToReturn = outfit.map((outfitItem) => {
            return <OutfitItem item={outfitItem.item} key={outfitItem.id}/>
        })
    let handleDelete = (evt) => {
        console.log(props.outfit.id)
        fetch(`http://localhost:4000/outfits/${props.outfit.id}`, {
            method: "DELETE"
        }).then(r => r.json()).then(props.deleteOutfit(props.outfit.id))
    }
    return (
        <div>
            <h3>{props.outfit.name} <Button onClick={handleDelete} variant="outline-danger">Delete Outfit</Button>{' '}</h3>
            {outfitItemsToReturn}
           
        </div>
    )
}


export default Outfit
