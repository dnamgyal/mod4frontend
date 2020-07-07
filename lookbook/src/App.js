import React from 'react';
import './App.css';
import Main from './Components/Main'

class App extends React.Component {
  state = { 
    clothingList: [],
    outfitList: []
   }

  render() { 
    return ( 

     <Main/>
  
     );
  }


}


export default App; 
