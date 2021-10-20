import React, { useState } from "react";
import Stations from "../ui/stations.json"

const Search = () => {
    const [text, setText] = useState("");
    return (
        <section className="search">
            <form>
                <input type="text"
                    className="form-control"
                    placeholder="Search!"
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    autoFocus
                />    
            </form>
            <aside className="sidebar">
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
            </aside>
        </section>
    )
}

export default Search
