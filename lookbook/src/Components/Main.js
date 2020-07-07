import React from 'react';
import NavC from './NavC'
import '../App.css';
import  Clothing from './Clothing'
import man from './man1.png'
import Draggable, {DraggableCore} from 'react-draggable';

class Main extends React.Component {
//could change to functional component here. 


state = { 
 clothingList: []
}

componentDidMount = () => {
fetch("http://localhost:3000/users/1")
.then(resp => resp.json())
.then((obj) => 
this.setState({clothingList: obj.items})

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
            <img src={man} id="male-model" alt="man in underwear"/>
        </div>
        
            {/* ----- THIRD COLUMN BELOW ------*/}
        <div className="col">
            <h2>YOUR OUTFITS</h2>
        </div>
    </div>
</div>
        );
    }
}
 
export default Main;