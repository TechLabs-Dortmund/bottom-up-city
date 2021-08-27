import React from "react";
import Search from ".//components/ui/Search";  
import "./App.css";
import Map from ".//components/ui/Map";

const App = () => {
    return (
      <div className="App">
        <h1>Bottom-Up City</h1>
        <Search />
        <Map />
      </div>
    );
  }

export default App;
