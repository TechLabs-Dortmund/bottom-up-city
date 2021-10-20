import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Stations from "./stations.json";

const MapExample = () => {      
    return (
        <MapContainer center={[51.511028, 7.463520]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {Stations.filter((val) => 
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
                        },{})}
        </MapContainer>
    )
}


export default MapExample