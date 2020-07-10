  import React from 'react';
  import Mannequin from './Mannequin'
  import '../App.css';


class Form extends React.Component {
    state = {
        name: "",
        newOutfitID: 0,
        outfitId: 0
        }
        handleInput = (e) => {
            this.setState({
              [e.target.name] : e.target.value
            })
          }
          handleSubmit = (e) => {
            e.preventDefault()
            console.log("submitted")

            this.fetchOutfits()
            //this.asyncCall();

          }

          // postOutfitItem = (outfit) => {
          //   return new Promise(resolve => {
          //     setTimeout(fetch("http://localhost:4000/outfit_items", {method: "POST",
          //             headers: {"content-type" : "application/json"},
          //             body: JSON.stringify({
          //                 outfit_id: this.state.outfitId, item_id: outfit
          //             })
          //   }), 2000);
          // })}

          //  asyncCall = async () => {
          //   console.log('calling');
          //   this.props.myOutfits.forEach(async (outfit)=> {
          //     await this.postOutfitItem(outfit)
          //   console.log(outfit, "outfit posted")})
            
      
          // }


          // fetchOutfits = () => {
          //       fetch("http://localhost:4000/outfits/", {method: "POST",
          //       headers: {"content-type": "application/json"},
          //       body: JSON.stringify({
          //         name: this.state.name, user_id: 1
          //       })
          //     })
          //     .then(resp => resp.json())
              
          //     .then((newOutfit)=> {
          //       this.setState({outfitId: newOutfit.id})
          //       this.props.addOutfit(newOutfit) })}

        fetchOutfits = () => {
            fetch("http://localhost:4000/outfits/", {method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
              name: this.state.name, user_id: 1
            })
          })
          .then(resp => resp.json())
          
          .then((newOutfit)=> {
            this.props.addOutfit(newOutfit)

            this.props.myOutfits.forEach((outfit)=>{
               fetch("http://localhost:4000/outfit_items", {method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify({
                    outfit_id: newOutfit.id, item_id: outfit
                })
            })
          })
          this.props.addOutfitToArr(newOutfit)
          })
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
