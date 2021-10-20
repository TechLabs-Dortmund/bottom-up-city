import React from "react";
import Search from ".//components/ui/Search";  
import "./App.css";
import MapExample from ".//components/ui/MapExample";
//import Sidebar from ".//components/ui/Sidbar";
import Buttons from ".//components/ui/Buttons";

const App = () => {
    return (
      <div className="App">
        <main className="container">
          <Search className="searchbox"/>
          <div>
            <Buttons />
          </div>
            <MapExample className="map"/>
        </main> 
      </div>
    );
  }

export default App;
