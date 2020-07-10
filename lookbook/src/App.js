import React, {useState, useEffect} from 'react';
import './App.css';
import Main from './Components/Main'
import NavBar from './Components/NavBar'
import Profile from './Containers/Profile'
import {Switch, Route} from 'react-router-dom'



let App = () => {

  let [data, setData] = useState({
    username: "",
    items: [],
    outfits: []
  })


  useEffect(() => {
    fetch(`http://localhost:4000/users/1`).then(r => r.json()).then(data => setData(data))
  }, [])

  let addItem = (newItem) => {
    setData({...data, items: [...data.items, newItem]})
  }

  let deleteItem = (itemId) => {
      let updatedItemsList = data.items.filter((item) => item.id !== itemId)
      setData({...data, items: updatedItemsList})
  }

  let deleteOutfit = (outfitId) => {
    let updatedOutfitList = data.outfits.filter((outfit) => outfit.id !== outfitId)
    setData({...data, outfits: updatedOutfitList})
  }

  let updateItem = (updatedItem) => {
    let updatedItemsList = data.items.map((item) => {
    if (item.id === updatedItem.id) {
      return updatedItem }
    else {
      return item
    }
    })
    setData({...data, items: updatedItemsList})
  }

  let addOutfit = (newOutfit) => {
    let newList = [...data.outfits, newOutfit]
    setData({...data, outfits: newList})
    console.log("outfit added")
  }


  return ( 

    <div>
<h1 className="center">
  <span>L</span>
  <span>O</span>
  <span>O</span>
  <span>K</span>
  <span>/</span>
  <span>B</span>
  <span>O</span>
  <span>O</span>
  <span>K</span>

</h1>
<br></br>
<br></br>
    <NavBar userName={data.username}/>
    <Switch>
      <Route path="/profile">
        <Profile data={data} addItem={addItem} deleteItem={deleteItem} updateItem={updateItem} deleteOutfit={deleteOutfit}/>
      </Route>
      <Route path="/closet">
        <Main data={data} addOutfit={addOutfit}/>
        </Route>
    </Switch>
        </div>

   );

}


export default App; 
