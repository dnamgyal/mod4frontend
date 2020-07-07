import React from 'react';
import NavC from './NavC'
import '../App.css';
import  Clothing from './Clothing'
import man from './man1.png'

class Main extends React.Component {
//could change to functional component here. 

// renderClothing = () => {
// this.props.clothingList.map((clothing)=>{
// })
// }

    render() { 
        return (  
            <div className="main">
            <h1>LOOK/BOOK</h1>
            <NavC/>
            <div class="flex-grid">
                <div class="col">
                    <h2>YOUR CLOTHES</h2>
                    {/* {this.renderClothing} */}
                    <Clothing/>
                    <Clothing/>
                    <Clothing/>
                    <Clothing/>

                
                </div>
        <div class="col"><img src={man} alt="man in underwear"/></div>
                <div class="col"><h2>YOUR OUTFITS</h2></div>
            </div>
            </div>
        );
    }
}
 
export default Main;