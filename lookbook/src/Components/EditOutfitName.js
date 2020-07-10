import React, {useState} from 'react'


let EditOutfitName = (props) => {

    let [outfitName, setOutfitName] = useState(props.outfit.name)
    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(outfitName)
        fetch(`http://localhost:4000/outfits/${props.outfit.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({name: outfitName})
        }).then(r => r.json()).then(props.editOutfitName)
        props.handleClick()

    }

    let handleInputs = (e) => {
        setOutfitName(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={outfitName} autoComplete="off" onChange={handleInputs} required/><br/>
            <input type="submit" value="Update Name"/>

        </form>
    )
}



export default EditOutfitName