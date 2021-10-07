import React, { useState } from "react";
import EStellen from "../ui/stations.json"

const Search = () => {
    const [text, setText] = useState("");
    return (
        <section className="search">
            <form>
                <input type="text"
                    className="form-control"
                    placeholder="To the next station!"
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    autoFocus
                /> 
                 
            </form>
            <aside className="sidebar">
                <div className="nav">
                <h4>Ergebnisse</h4>
                    <div className="filter">{EStellen.filter((val)=> {
                        if (text === "") {
                            return val
                        } else if (val.address.toLowerCase().includes(text.toLowerCase())) {
                            return val
                        }
                    }).map((val, key) => {
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
