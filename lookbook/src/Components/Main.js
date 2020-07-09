import React from 'react';
import '../App.css';
import  Clothing from './Clothing'
import  Outfit from './Outfit'
import  Mannequin from './Mannequin'


class Main extends React.Component { 


state = { 
 clothingList: [],
 outfitList: [],
 myOutfits: [],
}

componentDidMount = () => {
fetch("http://localhost:4000/users/1")
.then(resp => resp.json())
.then((obj) => {
this.setState({clothingList: obj.items})
})

fetch("http://localhost:4000/outfits/1")
.then(resp => resp.json())
.then((obj) => {
this.setState({outfitList: [obj]})
}
)
}

addOutfits = (num) =>{
    this.setState((prevState) => {
     return {myOutfits: [...prevState.myOutfits, num]}
    })
    console.log("this is the myOutfit state", this.state.myOutfits)
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