import React from 'react';
import Mannequin from './Mannequin'
import '../App.css';


class Form extends React.Component {

    state = {
        name: "",
        newOutfitID: 0
        }

        handleInput = (e) => {
            this.setState({    
              [e.target.name] : e.target.value
            }) 
          }
          
          handleSubmit = (e) => {
            e.preventDefault()
            this.fetchOutfits()
            // this.fetchOutfitItems()
            // setTimeout(this.handleClear(), 5000)
          }

        fetchOutfits = () => {
            let uniqArr = new Set (this.props.myOutfits)
            const backToArr = [...uniqArr]
            fetch("http://localhost:4000/outfits/", {method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
              name: this.state.name, user_id: 1
            })
          })
          .then(resp => resp.json())
          .then((newOutfit)=> {
        
            backToArr.forEach((outfit)=>{
                fetch("http://localhost:4000/outfit_items", {method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify({
                    outfit_id: newOutfit.id, item_id: outfit
                })
            })
          })
      
          })

        }
          
    
        
        handleClear = () =>{
          return  this.props.clearMyOutfits
        }



    render() { 
        return (  
            <div>
            <form onSubmit={this.handleSubmit}> 
            <input input-type="text" name="name" placeholder="Name this look" onChange={this.handleInput} value={this.state.name}></input><br></br>
            <input type="submit" name="submit" value="save this look!"></input>
            </form>
            </div>

        );
    }
}
 
export default Form;