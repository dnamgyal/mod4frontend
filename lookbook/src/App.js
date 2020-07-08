import React, {useState, useEffect} from 'react';
import './App.css';
import Main from './Components/Main'
import NavBar from './Components/NavBar'

import Profile from './Containers/Profile'
import Closet from './Containers/Closet'

import {Switch, Route} from 'react-router-dom'


// class App extends React.Component {
//   render() { 
  
//     <Main />
//   }
// }

  render() { 
    return ( 

  useEffect(() => {
    fetch(`http://localhost:4000/users/1`).then(r => r.json()).then(data => setData(data))
  }, [])


  return ( 

    <div className="App">
    <NavBar userName={data.username}/>
    <Switch>
      <Route path="/profile">
        <Profile data={data}/>
      </Route>
      {/* <Route path="/closet" component={Closet} /> */}
      <Route path="/closet" component={Main} />

    </Switch>
    </div>

   );

}


export default App; 
