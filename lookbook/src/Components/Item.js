import React from 'react'


let Item = (props) => {
    let {name, brand, category, image } = props.item
    return (
        <div>
        <img src={image} width="200" height="200"></img>
        <p>{name} - {brand}</p>
        </div>
    )
}


export default Item