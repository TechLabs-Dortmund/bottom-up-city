import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapExample = () => {
    return (
        <MapContainer center={[51.511028, 7.463520]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.510834261404796, 7.4378347840495405]}>
                <Popup>
                BOTTOMUP CITY, <br /> Home at Friends.
                </Popup>
            </Marker>
        </MapContainer>
    )
}


export default MapExample