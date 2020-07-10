import React from 'react';
import '../App.css';
import  Clothing from './Clothing'
import  Outfit from './Outfit'
import  Mannequin from './Mannequin'


class Main extends React.Component { 


state = { 
 clothingList: this.props.data.items,
 outfitList: this.props.data.outfits,
 myOutfits: [],
}

commponentDidUpdate() {
    this.setState({outfitList: this.props.data.outfits})
}

addOutfits = (num) =>{
    this.setState((prevState) => {
     return {myOutfits: [...prevState.myOutfits, num]}
    })
}

clearMyOutfits = () => {
    this.setState({myOutfits: []})
}
  
renderClothing = () => {
return this.state.clothingList.map((clothing)=>{
        return <Clothing
        key = {clothing.id}
        name = {clothing.name}
        brand = {clothing.brand}
        image = {clothing.image}
        category = {clothing.category}
        id ={clothing.id}
        addOutfits = {this.addOutfits}
        />
    })
}

renderOutfits = ()  => {

    return this.state.outfitList.map((outfit)=>{
        return <Outfit
        key = {outfit.id}
        name = {outfit.name}
        id = {outfit.id}
        outfitItems = {outfit.outfit_items}
        addOutfits = {this.addOutfits} 
        />
    })
}

addOutfitToArr = (newOutfit) => {
    this.setState({outfitList: [...this.state.outfitList, newOutfit] })
} 
 
    render() { 

        return (  
            <div className="main">
            <div className="flex-grid">

                {/* ----- FIRST COLUMN BELOW ------*/}
                <div className="col" id="clotheslist"> 
                    <h2>YOUR CLOTHES</h2>

                    {this.renderClothing()}
        
          
                </div>

                {/* ----- SECOND COLUMN BELOW ------*/}
        <div className="col" id="middle">
            <Mannequin
            myOutfits={this.state.myOutfits}
            clearMyOutfits={this.clearMyOutfits}
            addOutfit={this.props.addOutfit}
            addOutfitToArr={this.addOutfitToArr}
            />
        </div>
        
            {/* ----- THIRD COLUMN BELOW ------*/}
        <div className="col" id="closetlist">
            <h2>Your Outfits</h2>
            {this.renderOutfits()}
        </div>
    </div>
</div>
        );
    }
}
 
export default Main;