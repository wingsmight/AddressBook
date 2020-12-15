import React from "react";
import { useDispatch } from "react-redux";

import { addBook } from "../../store/phone-book/action";
import "./style.scss";

class AddUser extends React.Component
{
    

    submitUser = e => {
        e.preventDefault();

        //let newData = { first_name: first_name.value, last_name: last_name.value, phone_number: phone_number.value, isFav: false }
        let newData = { first_name: "AAAA", last_name: "AAAA", phone_number: "sss", isFav: false }

        this.props.addUserHandler.bind(this, newData);

        //first_name.value = "";
        //last_name.value = "";
        //phone_number.value = "";
    };

    render()
    {
        let first_name, last_name, phone_number;

        return (

            <div className={"container-form"}>
                <form onSubmit={this.submitUser}>
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
                        placeholder={"Адрес"}
                    />
                    <button type="submit">Добавить человека</button>
                </form>
            </div>
        );
    }

}

export default AddUser;
