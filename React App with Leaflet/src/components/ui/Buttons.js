import React from "react";
import query_overpass from "query-overpass";

const Buttons = (props) => {
    const { onBikeSharingClick } = props;

    const handleClick = (bikesharing) => {
        console.log("hello " + bikesharing);
        query_overpass(
            "[out:json];node(51.4155255,7.302387,51.6000415,7.638157)[amenity=bicycle_parking];out;",
            (error, data) => {
                console.log(error, data);
                onBikeSharingClick(data.features);
            }
        );   
    }
    return (
        <div className="allbtn">
            <button onClick={handleClick} className="boxmodel"><strong>Bikesharing</strong></button>
            <button onClick={handleClick} className="boxmodel"><strong>Carsharing</strong></button>
            <button onClick={handleClick} className="boxmodel"><strong>Coworking</strong></button>
        </div>
    )
}

export default Buttons