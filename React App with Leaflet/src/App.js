import React, { useState } from "react";
import Search from ".//components/ui/Search";  
import "./App.css";
import MapExample from ".//components/ui/MapExample";
//import Sidebar from ".//components/ui/Sidbar";
import Buttons from ".//components/ui/Buttons";

const App = () => {
    const [bikeSharingSpaces, setBikeSharingSpaces] = useState([]);

    return (
      <div className="App">
        <main className="container">
          <Search className="searchbox"/>
          <div>
            <Buttons onBikeSharingClick={setBikeSharingSpaces}/>
          </div>
          <MapExample className="map" markers={bikeSharingSpaces} />
        </main> 
      </div>
    );
  }

export default App;
