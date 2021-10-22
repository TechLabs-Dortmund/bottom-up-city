import React from "react";
import query_overpass from "query-overpass";

const Buttons = (props) => {
    const { boundingBoxCords, setAmenitiesFound } = props;

    const handleClick = (event) => {
        console.log(event.target.innerText);
        let amenity = "bicycle_rental";
        if (event.target.innerText === "e-Tankstellen") {
            amenity = "charging_station";
        } else if (event.target.innerText === "Coworking") {
            amenity = "events_venue";
        }

        console.log(`[out:json];node(${boundingBoxCords.join(",")})[amenity=${amenity}];out 100;`);
        query_overpass(
            `[out:json];node(${boundingBoxCords.join(",")})[amenity=${amenity}];out 100;`,
            (error, data) => {
                console.log(error, data);
                setAmenitiesFound(data.features);
            }
        );   
    }
    return (
        <div className="allbtn">
            <button id="bicycle_rental" onClick={handleClick} className="boxmodel">
                <strong>Bikesharing</strong>
            </button>
            <button id="charging_station" onClick={handleClick} className="boxmodel">
                <strong>e-Tankstellen</strong>
            </button>
            <button id="events_venue" onClick={handleClick} className="boxmodel">
                <strong>Coworking</strong>
            </button>
        </div>
    )
}

export default Buttons