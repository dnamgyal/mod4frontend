import React, {useState} from 'react'
import EditItem from './EditItem'
import {Button} from 'react-bootstrap'


let Item = (props) => {
    let {name, brand, image, id } = props.item

    let [editClicked, setEditClicked] = useState(false)



    let handleEdit = (evn) => {
        setEditClicked(!editClicked)
    }

    let handleDelete = (evn) => {
        evn.preventDefault()
        console.log(id)
        fetch(`http://localhost:4000/items/${id}`, {
            method: "DELETE"
        }).then(r => r.json()).then((item) => {
            props.deleteItem(item.id)
        })
    }

    return (
        <div>
        <img src={image} width="200" height="200" alt={name}></img>
        <h2>{name} - {brand}</h2>
        
        <Button onClick={handleEdit} variant="outline-secondary">Edit Item</Button>{' '}
        <Button onClick={handleDelete} variant="outline-secondary">Delete Item</Button>{' '}

        {editClicked ? <EditItem item={props.item} handleEdit={handleEdit} updateItem={props.updateItem}/> : null
            
            }
        </div>
    )
}


export default Item