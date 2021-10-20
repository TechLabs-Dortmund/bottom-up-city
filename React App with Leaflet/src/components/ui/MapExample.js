import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapExample = (props) => {
    const { markers } = props;

    return (
        <MapContainer center={[51.511028, 7.463520]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map(m => {
                // console.log(m.geometry.coordinates);
                return (
                    <Marker key={m.id} position={[m.geometry.coordinates[1], m.geometry.coordinates[0]]}>
                        <Popup>
                            Capacity: {m.properties.tags.capacity} Covered: {m.properties.tags.covered}
                        </Popup>
                    </Marker>
                );
            })}
            
        </MapContainer>
    )
}


export default MapExample