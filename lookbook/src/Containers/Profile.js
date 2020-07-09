import React, { useState } from 'react';
import OutfitsList from '../Components/OutfitsList'
import ItemsList from '../Components/ItemsList'
import AddItem from '../Components/AddItem'
import {DropdownButton, Dropdown} from 'react-bootstrap'

let Profile = (props) => {


    let [filter, setfilter] = useState("All")

    let handleFilter = (e) => {
        console.log(e.target.value)
        setfilter(e.target.value)
    }

    let returnArray = () => {
    let itemsArray = props.data.items

    if (filter !== "All"){
        itemsArray = props.data.items.filter((item) => {
            return item.category === filter
        })
    }
    return itemsArray

    }

    return (

        <div>
        <h2>Hi {props.data.username}!</h2>
        <h3>Your Outfits</h3>
        <OutfitsList outfits={props.data.outfits} deleteOutfit={props.deleteOutfit}/>

        <hr/>
        <h3>Your Clothes</h3>
        <AddItem id={props.data.id} addItem={props.addItem}/>


        <DropdownButton value={filter} variant="Secondary" id="dropdown-basic-button" title="Item Filter">
            <Dropdown.Item value="All" onClick={() => {setfilter("All")}}>All</Dropdown.Item>
            <Dropdown.Item value="top" onClick={() => {setfilter("top")}}>Tops</Dropdown.Item>
            <Dropdown.Item value="bottom" onClick={() => {setfilter("bottom")}}></Dropdown.Item>
            <Dropdown.Item value="footwear" onClick={() => {setfilter("footwear")}}>Footwear</Dropdown.Item>
            <Dropdown.Item value="headwear" onClick={() => {setfilter("headwear")}}>Headwear</Dropdown.Item>
        </DropdownButton>
        
        {/* <label>Sort</label>
        <select value={filter} id="items-filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="top">Tops</option>
        <option value="bottom">Bottoms</option>
        <option value="headwear">Headwear</option>
        <option value="footwear">Footwear</option>
        </select> */}
        
        <ItemsList items={returnArray()} deleteItem={props.deleteItem} updateItem={props.updateItem}/>
        </div>
    )
}


export default Profile