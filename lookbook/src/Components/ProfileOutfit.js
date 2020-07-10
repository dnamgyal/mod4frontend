import React from 'react'
import '../App.css';
import OutfitItem from './OutfitItem'
import {Button} from 'react-bootstrap'


let ProfileOutfit = (props) => {

    let outfit = props.outfit["outfit_items"]

    const seen = new Set();
    const filteredArr = outfit.filter(el => {
        const duplicate = seen.has(el.item.id);
        seen.add(el.item.id);
        return !duplicate;
      });




    let outfitItemsToReturn = filteredArr.map((outfitItem) => {
            return <OutfitItem item={outfitItem.item} key={outfitItem.id}/>
        })
    let handleDelete = (evt) => {
        fetch(`http://localhost:4000/outfits/${props.outfit.id}`, {
            method: "DELETE"
        }).then(r => r.json()).then(props.deleteOutfit(props.outfit.id))
    }
    return (
        <div>
            <h3>{props.outfit.name} <Button onClick={handleDelete} variant="outline-danger">Delete Outfit</Button>{' '}</h3>
            {outfitItemsToReturn}
           
        </div>
    )}


export default ProfileOutfit