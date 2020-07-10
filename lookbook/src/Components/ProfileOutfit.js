import React, {useState} from 'react'
import '../App.css';
import OutfitItem from './OutfitItem'
import {Button} from 'react-bootstrap'
import EditOutfitName from './EditOutfitName'


let ProfileOutfit = (props) => {

    let [clicked, setClicked] = useState(false)

    let outfit = props.outfit["outfit_items"]

    const seen = new Set();
    const filteredArr = outfit.filter(el => {
        const duplicate = seen.has(el.item.id);
        seen.add(el.item.id);
        return !duplicate;
      })

    let outfitItemsToReturn = filteredArr.map((outfitItem) => {
            return <OutfitItem item={outfitItem.item} key={outfitItem.id}/>
        })
    let handleDelete = (evt) => {
        fetch(`http://localhost:4000/outfits/${props.outfit.id}`, {
            method: "DELETE"
        }).then(r => r.json()).then(props.deleteOutfit(props.outfit.id))
    }


    let handleClick = (evt => {
        setClicked(!clicked)

    })

    return (
        <div>
            <h3>{props.outfit.name} <Button onClick={handleClick} variant="outline-danger">Edit Outfit</Button>{' '}
            <Button onClick={handleDelete} variant="outline-danger">Delete Outfit</Button>{' '}</h3>
            {clicked ? <EditOutfitName outfit={props.outfit} editOutfitName={props.editOutfitName} handleClick={handleClick} /> : null}
            {outfitItemsToReturn}
           
        </div>
    )}


export default ProfileOutfit