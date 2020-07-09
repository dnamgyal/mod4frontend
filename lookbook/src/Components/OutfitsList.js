import React from 'react'
import Outfit from './Outfit'


let OutfitsList = (props) => {

   


    return (
        <div>
     { props.outfits ? props.outfits.map((outfit) => {
       return (<Outfit outfit={outfit} key={outfit.id} deleteOutfit={props.deleteOutfit}/>)
    }) : null}
     </div>
    )
}


export default OutfitsList