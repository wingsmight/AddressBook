import React from "react";
import AddUser from "./container/AddUser";
import UserList from "./container/UserList";
import { Component } from "react";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                { first_name: 'Петр', last_name: 'Петров', phone_number: "Москва, ул. Пушкина, 23, 3а", isFav: true },
                { first_name: 'Михаил', last_name: 'Лавров', phone_number: "Иркутск, ул. Есенина, 27, 7", isFav: false },
                { first_name: 'Леонид', last_name: 'Чернышев', phone_number: "Новосибирск, ул. Твардовского, 13, 3/5а", isFav: false },
                { first_name: 'Никита', last_name: 'Жуков', phone_number: "Барыш, ул. Калитниковская Ср., дом 129, квартира 568", isFav: false },
                { first_name: 'Павел', last_name: 'Поляков', phone_number: "Черный Яр, ул. Лечебная, дом 94, квартира 16", isFav: false },
                { first_name: 'Александр', last_name: 'Мартынов', phone_number: "Лабытнанги, ул. Южный проезд, дом 131, квартира 218", isFav: false },
                { first_name: 'Игорь', last_name: 'Морозов', phone_number: "Идринское, ул. Старофилинская, дом 95, квартира 338", isFav: false },
                { first_name: 'Андрей', last_name: 'Козлов', phone_number: "Дубенки, ул. Добрынинский 1-й пер, дом 96, квартира 134", isFav: false },
                { first_name: 'Алиса', last_name: 'Жукова', phone_number: "Барыш, ул. Калитниковская Ср., дом 129, квартира 568", isFav: false },
                { first_name: 'София', last_name: 'Некрасова', phone_number: "Рузаевка, ул. Самаринская, дом 162, квартира 301", isFav: false },
                { first_name: 'Артемий', last_name: 'Малышев', phone_number: "Волхов, ул. Мечникова пр-кт, дом 146, квартира 28", isFav: false },
                { first_name: 'Александр', last_name: 'Чеботарев', phone_number: "Гурьевск, ул. Выборная, дом 91, квартира 267", isFav: false },
            ],
            acsList: {
                first_name: false,
                last_name: false,
                phone_number: false
            }
        };
    }

    onClearArray = () => {
        this.setState({ list: [] });
    };

    deleteUser = (last_name) => {
        const index = this.state.list.findIndex((user) => {
            return (user.last_name === last_name);
        })

        this.state.list.splice(index, 1);

        this.setState({ list: this.state.list });
    }

    favUser = (last_name) => {
        const index = this.state.list.findIndex((user) => {
            return (user.last_name === last_name);
        })

        this.state.list[index].isFav = !this.state.list[index].isFav;

        this.setState({ list: this.state.list });
    }

    changeUserName = (last_name, type, event) => {
        if (event.target.value.length === 0) {
            return;
        }
        const index = this.state.list.findIndex((user) => {
            return (user.last_name === last_name);
        })

        const user = this.state.list[index];
        user[type] = event.target.value;

        this.state.list[index] = user;

        this.setState({ list: this.state.list });
    }

    onDragEnd = result => {
        const { destination, source, reason } = result;

        if (!destination || reason === 'CANCEL') {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const droppedUser = this.state.list[source.index];

        this.state.list.splice(source.index, 1);
        this.state.list.splice(destination.index, 0, droppedUser);
        this.setState({ list: this.state.list });
    }

    sort = (type) => {
        this.state.acsList[type] = !this.state.acsList[type];

        const sorted = this.state.list.sort((a, b) => {
            var nameA = a[type].toLowerCase();
            var nameB = b[type].toLowerCase();

            if (this.state.acsList[type]) {
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }
            else {
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
            }

            return 0;
        });

        this.state.list = sorted;
        this.setState({ list: this.state.list });
    };

    addUser = (data) => {

        this.setState(state => {
            const list = state.list.concat(data);

            return {
                list,
                value: '',
            };
        });
    };

    render() {
        return (
            <>
                <AddUser
                    addUserHandler={this.addUser}
                    clearUsersHandler={this.onClearArray}
                    list={this.state.list}
                />

                <h1>Список контактов:</h1>

                <UserList
                    list={this.state.list}
                    deleteUserHandler={this.deleteUser}
                    favUserHandler={this.favUser}
                    changeUserNameHandler={this.changeUserName}
                    onDragEndHandler={this.onDragEnd}
                    sortHandler={this.sort}
                />

                <NotificationContainer/>
            </>
        );
    }
}

export default Main;