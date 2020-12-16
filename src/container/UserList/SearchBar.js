import React from 'react';
import { FaSearch } from 'react-icons/fa'
import "./SearchBar.css";

const SearchBar = ({ input, onChange }) => {
    const BarStyling = {
        width: "30rem",
        background: "#e2e1eb",
        border: "none",
        padding: "0.5rem"
    };
    return (
        <div>
            <FaSearch color="gray" className="searchIcon" />
            <input
                style={BarStyling}
                key="random1"
                value={input}
                placeholder={"Поиск..."}
                onChange={(e) => onChange(e.target.value)}
            />
            </div>

    );
}

export default SearchBar