import React from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/phone-book/action";
import "./style.scss";
import Main from '../../Main';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class AddUser extends React.Component
{
    constructor() {
        super();
        this.state =
        {
            first_name: "",
            last_name: "",
            address: "",
            phone_number: null
        };
    }

    checkExist = (user) => {
        return user.first_name == this.state.first_name.value &&
            user.last_name == this.state.last_name.value &&
            user.address == this.state.address.value &&
            user.phone_number == this.state.phone_number.value;
    }

    checkNumberExist = (user) => {
        return user.phone_number == this.state.phone_number.value;
    }

    submitUser = e => {
        e.preventDefault();

        if (this.state.first_name.value == "") {
            NotificationManager.warning('Поле Имя - пустое');
        }
        else if (this.state.last_name.value == "") {
            NotificationManager.warning('Поле Фамилия - пустое');
        }
        else if (this.state.address.value == "") {
            NotificationManager.warning('Поле Адрес - пустое');
        }
        else if (!this.state.phone_number.value) {
            NotificationManager.warning('Поле Телефон - пустое');
        }
        else if (this.props.list.some(this.checkNumberExist)) {
            NotificationManager.warning('Пользователь с таким телефоном уже существует');
        }
        else if (this.props.list.some(this.checkExist))
        {
            NotificationManager.warning('Данный пользователь уже существует');
        }
        else {
            let newData = {
                first_name: this.state.first_name.value,
                last_name: this.state.last_name.value,
                address: this.state.address.value,
                phone_number: this.state.phone_number.value,
                isFav: false
            }

            this.props.addUserHandler(newData);

            this.state.first_name.value = "";
            this.state.last_name.value = "";
            this.state.address.value = "";
            this.state.phone_number.value = "";
        }
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
                        type="text"
                        ref={node => (this.state.address = node)}
                        placeholder={"Адрес"}
                    />
                    <input
                        type="number"
                        ref={node => (this.state.phone_number = node)}
                        placeholder={"Телефон"}
                    />
                    <button type="submit">Добавить человека</button>
                </form>
            </div>
        );
    }

}

export default AddUser;
