import React from 'react';
import OutfitsList from '../Components/OutfitsList'
import ItemsList from '../Components/ItemsList'


let Profile = (props) => {
    let {username, items, outfits} = props.data
    return (

        <div>
        <h2>Hi {username}!</h2>
        <h3>Your Outfits</h3>

        <OutfitsList outfits={outfits}/>
        <hr></hr>
        <h3>Your Clothes</h3>

        <ItemsList items={items}/>
        </div>



    )


}


export default Profile