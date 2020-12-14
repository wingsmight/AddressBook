import React from "react";
import { useDispatch } from "react-redux";

import { addBook } from "../../store/phone-book/action";
import "./style.scss";

export default function AddUser() {
    const dispatch = useDispatch();

    let first_name, last_name, phone_number;

    const submitUser = e => {
        e.preventDefault();

        dispatch(
            addBook({
                first_name: first_name.value,
                last_name: last_name.value,
                phone_number: phone_number.value
            })
        );

        first_name.value = "";
        last_name.value = "";
        phone_number.value = "";
    };

    return (
        <div className={"container-form"}>
            <form onSubmit={submitUser}>
                <input
                    type="text"
                    ref={node => (first_name = node)}
                    placeholder={"Имя"}
                />
                <input
                    type="text"
                    ref={node => (last_name = node)}
                    placeholder={"Фамилия"}
                />
                <input
                    type="tel"
                    ref={node => (phone_number = node)}
                    placeholder={"Телефон"}
                />
                <button type="submit">Добавить человека</button>
            </form>
        </div>
    );
}
