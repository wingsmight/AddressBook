import React from "react";
import UsersPage from "../../component/List";
import SearchBar from "../../container/UserList/SearchBar";
import "./style.scss";
import "./searchStyle.css";
import { useState } from 'react'

export default function UserList(props) {

    const [searchTerm, setSearchTerm] = useState("");

    const updateInput = async (input) => {
        const filtered = props.list.filter(user => {
            return user.last_name.toLowerCase().includes(input.toLowerCase())
        })
        setSearchTerm(input);
    }

    const filterUser = () => {
        const filtered = props.list.filter((value) => {
            if (searchTerm == "") {
                return value
            }
            else if (value.first_name.toLowerCase().includes(searchTerm.toLowerCase())
                || value.last_name.toLowerCase().includes(searchTerm.toLowerCase())
                || value.phone_number.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return value
            }
        });

        return filtered
    };

    let sortedList = filterUser();


    return (
        <>
            <SearchBar
                input={searchTerm}
                onChange={updateInput}
            />
            <UsersPage
                list={sortedList}
                deleteUserHandler={props.deleteUserHandler}
                favUserHandler={props.favUserHandler}
                changeUserNameHandler={props.changeUserNameHandler}
                onDragEndHandler={props.onDragEndHandler}
                sortHandler={props.sortHandler}
            />
        </>
    );
}
