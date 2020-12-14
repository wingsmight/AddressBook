import React from "react";
import { useSelector } from "react-redux";
import List from "../../component/List";
import "./style.css";
import {useState} from 'react'

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={
                event => { setSearchTerm(event.target.value) }
            } />
        </div>
    );
}
