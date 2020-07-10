import React, {useState} from 'react'
// import {Form, Row, Col} from 'react-bootstrap'



let AddItem = (props) => {

    let [itemObj, setItemObj] = useState({
        name: "",
        category: "top",
        brand: "",
        image: ""
    })

       let handleInputs = (e) => {
        setItemObj(
            {   
                ...itemObj, 
                [e.target.name]: e.target.value
            }
        )
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:4000/items`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json",
            },
            body: JSON.stringify({user_id: props.id, name: itemObj.name, brand: itemObj.brand, image: itemObj.image, category: itemObj.category})
        }).then(j => j.json()).then(props.addItem)

        setItemObj({
            name: "",
            category: "top",
            brand: "",
            image: ""
        })
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="f_name">Name</label>
            <input type="text" name="name" value={itemObj.name} autoComplete="off" onChange={handleInputs} required/><br />
            <label htmlFor="f_brand">Brand</label>
            <input type="text" name="brand" value={itemObj.brand} autoComplete="off" onChange={handleInputs} required/><br />
            <label htmlFor="f_category">Category </label>
            <select value={itemObj.category} name="category" onChange={handleInputs}>
                <option value="headwear">Headwear</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="footwear">Footwear</option>
                </select><br />
            <label htmlFor="f_image">Image</label>
            <input type="url" name="image" value={itemObj.image} autoComplete="off" onChange={handleInputs}/><br />
            <input type="submit" value="Add Item"/>
        </form>

    )
}


export default AddItem