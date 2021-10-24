import React, { useState } from "react";

const Search = (props) => {
    const { setSearchedPlaceLatLon, setBoundingBoxCords } = props;
    const [text, setText] = useState("Dortmund");

    const handleSearchClick = () => {
        console.log("jknfdsl");
        fetch(`https://nominatim.openstreetmap.org/search?q=${text}&format=json`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.length !== 0) {
                    const [lat0, lat1, long0, long1] = data[0].boundingbox;
                    setBoundingBoxCords([
                        lat0,
                        long0,
                        lat1,
                        long1
                    ]);
                    setSearchedPlaceLatLon([
                        data[0].lat,
                        data[0].lon
                    ]);
                }
            })
            .catch(err => {
                console.log(err);
                alert(`Error while searching for ${text} : ${err.message}`);
            });
    };

    return (
        <section className="search">
                <input type="text"
                    className="form-control"
                    placeholder="Search!"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    autoFocus
                />
                <button style={{ padding: 10 }} onClick={handleSearchClick}>Search</button>
            {/* <aside className="sidebar">
                <div className="nav">
                    <h4>Results</h4>
                    <div className="filter">{Stations.filter((val) =>
                        (text === "") ||
                        (val.address.toLowerCase().includes(text.toLowerCase()))
                        ).map((val, key) => {
                        return (
                            <div className="stelle" key={key}>
                                <p> {val.address} </p>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </aside> */}
        </section>
    )
}

export default Search