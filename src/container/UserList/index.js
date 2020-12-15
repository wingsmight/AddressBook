import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import UsersPage from "../../component/List";
import SearchBar from "../../container/UserList/SearchBar";
import "./style.scss";
import "./searchStyle.css";
import { useState } from 'react'
import { usersConst } from '../../Data'

export default function UserList(props) {

    const [searchTerm, setSearchTerm] = useState("");

    const updateInput = async (input) => {
        const filtered = props.list.filter(user => {
            return user.last_name.toLowerCase().includes(input.toLowerCase())
        })
        setSearchTerm(input);
    }

    const filterUser = (type) => {
        return props.list.filter((value) => {
            if (searchTerm == "") {
                return value
            }
            else if (value[type].toLowerCase().includes(searchTerm.toLowerCase())) {
                return value
            }
        });
    };

    let sortedList = filterUser("last_name");

    return (
        <>
            <SearchBar
                input={searchTerm}
                onChange={updateInput}
            />
            <UsersPage list={sortedList} deleteUserHandler={props.deleteUserHandler} />
        </>
    );
}
