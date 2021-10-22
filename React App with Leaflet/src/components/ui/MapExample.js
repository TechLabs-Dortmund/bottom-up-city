import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import Stations from "../ui/stations.json"

const MapExample = (props) => {
    const { searchedPlaceLatLon, amenitiesFound } = props;

    return (
        <div>
            {amenitiesFound.length === 0 && <div>Nothing found!!</div>}
            <MapContainer center={searchedPlaceLatLon} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* {Stations.filter((val) => 
                            val.hasOwnProperty("lat") 
                            ).map((val, key) => {
                            console.log(val);
                                return (
                                    <Marker position={[val.lat, val.lng]}>
                                        <Popup>
                                            {val.name} <br /> {val.address}
                                        </Popup>
                                    </Marker>
                                );
                            },{})} */}
                {amenitiesFound.map(m => {
                    // console.log(m.geometry.coordinates);
                    return (
                        <Marker key={m.id} position={[m.geometry.coordinates[1], m.geometry.coordinates[0]]}>
                            <Popup>
                                Amenity: {m.properties.tags.amenity} Name: {m.properties.tags.name} Operator: {m.properties.tags.operator}
                            </Popup>
                        </Marker>
                    );
                })}
                
            </MapContainer>
        </div>
    );
}

export default MapExample