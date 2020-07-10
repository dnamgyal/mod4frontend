import React, { useState } from 'react';
import OutfitsList from '../Components/OutfitsList'
import ItemsList from '../Components/ItemsList'
import AddItem from '../Components/AddItem'
import {DropdownButton, Dropdown, Container} from 'react-bootstrap'
import '../App.css';


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

        <div class="box">
        <div class="col" id="addForm">
        <h2>ADD NEW CLOTHING ITEM</h2>

            <AddItem id={props.data.id} addItem={props.addItem}/>
        </div>
        <div class="col" id="itemList" >
        <h2>MY CLOTHES</h2>

        
        <label>Sort</label>
        <select value={filter} id="items-filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="top">Tops</option>
        <option value="bottom">Bottoms</option>
        <option value="headwear">Headwear</option>
        <option value="footwear">Footwear</option>
        </select>

        <ItemsList items={returnArray()} deleteItem={props.deleteItem} updateItem={props.updateItem}/>
        </div>
        <div class="col" id="itemList">
        <h2>MY OUTFITS</h2>
        <OutfitsList outfits={props.data.outfits} deleteOutfit={props.deleteOutfit}/>
        </div>

        </div>
    )
}


export default Profile