import React, {useState} from 'react'


let EditItem = (props) => {

    let [itemObj, setItemObj] = useState(props.item)

    let handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:4000/items/${itemObj.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
              },
            body: JSON.stringify({name: itemObj.name, brand: itemObj.brand, category: itemObj.category, image: itemObj.image })
        }).then(r => r.json()).then(props.updateItem)
        props.handleEdit(e)
    }

    let handleInputs = (e) => {
        setItemObj(
                    {   
                        ...itemObj, 
                        [e.target.name]: e.target.value
                    }
                )
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="f_name">Name</label>
            <input type="text" name="name" value={itemObj.name} autoComplete="off" onChange={handleInputs} required/>
            <label htmlFor="f_brand">Brand</label>
            <input type="text" name="brand" value={itemObj.brand} autoComplete="off" onChange={handleInputs} required/>
            <label htmlFor="f_category">Category</label>
            <select value={itemObj.category} name="category" onChange={handleInputs}>
                <option value="headwear">Headwear</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="footwear">Footwear</option>
                </select>
            <label htmlFor="f_image">Image</label>
            <input type="url" name="image" value={itemObj.image} autoComplete="off" onChange={handleInputs}/>
            <input type="submit" value="Update Item"/>
        </form>
    )
}

export default EditItem