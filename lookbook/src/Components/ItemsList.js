import React from 'react'
import Item from './Item'

let ItemsList = (props) => {




    return (
        <div>
        { props.items ? props.items.map((item) => {
           return (<Item item={item} key={item.id} />)
       }) : null}
        
        
        
        </div>
        )
}


export default ItemsList