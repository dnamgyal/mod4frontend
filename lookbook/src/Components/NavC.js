import React from 'react';
import '../App.css';

class NavC extends React.Component {

    render() { 
        return (  
            <div className="nav-bar">
                <span>Main</span>
                <span>Profile</span>
                <span>Clothing</span>
                <span>Outfits</span>
            </div>

        );
    }
}
 
export default NavC;

//should this be functional perhaps? doesnt do much. but will need to use react-router so maybe keep it