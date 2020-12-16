import React from "react";
import { useDispatch } from "react-redux";

import { addBook } from "../../store/phone-book/action";
import "./style.scss";

class AddUser extends React.Component
{
    constructor() {
        super();
        this.state =
        {
            first_name: "",
            last_name: "",
            phone_number: "",
            isFav: "",
        };
    }



    submitUser = e => {
        e.preventDefault();

        let newData = { first_name: this.state.first_name.value, last_name: this.state.last_name.value, phone_number: this.state.phone_number.value, isFav: false }

        this.props.addUserHandler(newData);

        //first_name.value = "";
        //last_name.value = "";
        //phone_number.value = "";
    };

    render()
    {
        return (

            <div className={"container-form"}>
                <form onSubmit={this.submitUser}>
                    <input
                        type="text"
                        ref={node => (this.state.first_name = node)}
                        placeholder={"Имя"}
                    />
                    <input
                        type="text"
                        ref={node => (this.state.last_name = node)}
                        placeholder={"Фамилия"}
                    />
                    <input
                        type="tel"
                        ref={node => (this.state.phone_number = node)}
                        placeholder={"Адрес"}
                    />
                    <button type="submit">Добавить человека</button>
                </form>
            </div>
        );
    }

}

export default AddUser;
