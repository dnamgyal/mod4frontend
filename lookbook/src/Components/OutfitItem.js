import React from 'react'

let OutfitItem = (props) => {
    let {image, name} = props.item
    
    return (
        <img src={image} alt={name} height="100" width="100"/>
    )
}


export default OutfitItem