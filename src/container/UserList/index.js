import React from "react";
import { useSelector } from "react-redux";
import UsersPage from "../../component/List";
import "./style.scss";
import "./searchStyle.css";
import { useState } from 'react'

export default function UserList() {
    const [searchTerm, setSearchTerm] = useState("");
    const BookList = useSelector(state => state.book.data);

    const filterUser = (data, type) => {
        return data.filter((value) => {
            if (searchTerm == "") {
                return value
            }
            else if (value[type].toLowerCase().includes(searchTerm.toLowerCase())) {
                return value
            }
        });
    };
    let sortedList = filterUser(BookList, "last_name");

    return (
        <>
            <div>
                <input type="text" placeholder="Поиск..." onChange={
                    event => { setSearchTerm(event.target.value) }
                } />
            </div>
            <UsersPage list={sortedList} />
        </>
    );
}
