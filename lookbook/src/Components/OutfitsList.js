import React from 'react'
import ProfileOutfit from './ProfileOutfit'


let OutfitsList = (props) => {
    console.log(props.outfits)
    return (
        <div>
     { props.outfits ? props.outfits.map((outfit) => {
       return (<ProfileOutfit outfit={outfit} key={outfit.id} deleteOutfit={props.deleteOutfit}/>)
    }) : null}
     </div>
    )
}


export default OutfitsList