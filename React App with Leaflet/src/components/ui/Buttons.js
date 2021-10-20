import React from "react";

const Buttons = () => {

    const handleClick = (bikesharing) => {
        console.log("hello " + bikesharing);   
    }
    return (
        <div className="allbtn">
            <button onClick={handleClick} className="boxmodel"><strong>Bikesharing</strong></button>
            <button onClick={handleClick} className="boxmodel"><strong>e-Tankstellen</strong></button>
            <button onClick={handleClick} className="boxmodel"><strong>Coworking</strong></button>
        </div>
    )
}

export default Buttons