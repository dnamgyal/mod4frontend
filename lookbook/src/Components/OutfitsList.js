import React from 'react'
import ProfileOutfit from './ProfileOutfit'


let OutfitsList = (props) => {
    return (
        <div>
     { props.outfits ? props.outfits.map((outfit) => {
       return (<ProfileOutfit outfit={outfit} key={outfit.id} deleteOutfit={props.deleteOutfit}/>)
    }) : null}
     </div>
    )
}


export default OutfitsList