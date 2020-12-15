import React from 'react';

const SearchBar = ({ input, onChange }) => {
    const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
    return (
        <input
            style={BarStyling}
            key="random1"
            value={input}
            placeholder={"Поиск..."}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default SearchBar