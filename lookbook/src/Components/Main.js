import React from 'react';
import NavC from './NavC'
import '../App.css';
import  Clothing from './Clothing'
import  Outfit from './Outfit'
import  Mannequin from './Mannequin'


class Main extends React.Component { 


state = { 
 clothingList: [],
 outfitList: [],
 headCoord:[{x:551, y:247}],
 topCoord: [{x:535, y:348}],
 bottomCoord: [{x:538, y:507}],
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

  
renderClothing = () => {
  
return this.state.clothingList.map((clothing)=>{
        return <Clothing
        key = {clothing.id}
        name = {clothing.name}
        brand = {clothing.brand}
        image = {clothing.image}
        category = {clothing.category}
        />
    })
}

renderOutfits = ()  => {
    console.log(this.state.outfitList)
    return this.state.outfitList.map((outfit)=>{
        return <Outfit
        key = {outfit.id}
        name = {outfit.name}
        head= {this.state.headCoord}
        top={this.state.topCoord}
        bottom={this.state.bottomCoord}
  
        />
    })
}
 
    render() { 
        return (  
            <div className="main">
            <h1>LOOK/BOOK</h1>
            <NavC/>
            <div className="flex-grid">

                {/* ----- FIRST COLUMN BELOW ------*/}
                <div className="col">
                    <h2>YOUR CLOTHES</h2>
                    {this.renderClothing()}
        

                </div>

                {/* ----- SECOND COLUMN BELOW ------*/}
        <div className="col">
            <Mannequin
            />
        </div>
        
            {/* ----- THIRD COLUMN BELOW ------*/}
        <div className="col">
            <h2>Your Outfits</h2>
            {this.renderOutfits()}
        </div>
    </div>
</div>
        );
    }
}
 
export default Main;