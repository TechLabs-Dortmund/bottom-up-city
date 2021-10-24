import React, { useState } from "react";
import Search from ".//components/ui/Search";  
import "./App.css";
import MapExample from ".//components/ui/MapExample";
import Buttons from ".//components/ui/Buttons";

const App = () => {
    const [boundingBoxCords, setBoundingBoxCords] = useState([51.4155255,7.302387,51.6000415,7.638157]);
    const [searchedPlaceLatLon, setSearchedPlaceLatLon] = useState([51.5142273, 7.4652789]);
    const [amenitiesFound, setAmenitiesFound] = useState([]);

    return (
      <div className="App">
        <main className="container">
          <Search
            className="searchbox"
            setSearchedPlaceLatLon={setSearchedPlaceLatLon}
            setBoundingBoxCords={setBoundingBoxCords}
          />
          <div>
            <Buttons
              boundingBoxCords={boundingBoxCords}
              setAmenitiesFound={setAmenitiesFound}
            />
          </div>
          <div style={{ display: "flex" }}>
            <MapExample
              className="map"
              key={searchedPlaceLatLon.join(",")}
              searchedPlaceLatLon={searchedPlaceLatLon}
              amenitiesFound={amenitiesFound}
            />
            <aside className="sidebar">
              <div className="nav">
                  <h4>Results</h4>
                  <div className="filter">
                    {amenitiesFound.map(m => {
                      return (
                        <div className="stelle" key={m.id}>
                            <p>
                              Amenity: {m.properties.tags.amenity} Name: {m.properties.tags.name} Operator: {m.properties.tags.operator}
                            </p>
                        </div>
                      );
                    })}
                  </div>
              </div>
            </aside>
          </div>
        </main> 
      </div>
    );
  }

export default App;
