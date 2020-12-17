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
                { first_name: 'Петр', last_name: 'Петров', address: "Москва, ул. Пушкина, 23, 3а", phone_number: 89234586892, isFav: true },
                { first_name: 'Михаил', last_name: 'Лавров', address: "Иркутск, ул. Есенина, 27, 7", phone_number: 89768799918, isFav: false },
                { first_name: 'Леонид', last_name: 'Чернышев', address: "Новосибирск, ул. Твардовского, 13, 3/5а", phone_number: 87565678931, isFav: false },
                { first_name: 'Никита', last_name: 'Жуков', address: "Барыш, ул. Калитниковская Ср., дом 129, квартира 568", phone_number: 89137982144,isFav: false },
                { first_name: 'Павел', last_name: 'Поляков', address: "Черный Яр, ул. Лечебная, дом 94, квартира 16", phone_number: 89667864532,isFav: false },
                { first_name: 'Александр', last_name: 'Мартынов', address: "Лабытнанги, ул. Южный проезд, дом 131, квартира 218", phone_number: 89756557589, isFav: false },
                { first_name: 'Игорь', last_name: 'Морозов', address: "Идринское, ул. Старофилинская, дом 95, квартира 338", phone_number: 89755004005,isFav: false },
                { first_name: 'Андрей', last_name: 'Козлов', address: "Дубенки, ул. Добрынинский 1-й пер, дом 96, квартира 134", phone_number: 89324567899,isFav: false },
                { first_name: 'Алиса', last_name: 'Жукова', address: "Барыш, ул. Калитниковская Ср., дом 129, квартира 568", phone_number: 89554446879, isFav: false },
                { first_name: 'София', last_name: 'Некрасова', address: "Рузаевка, ул. Самаринская, дом 162, квартира 301", phone_number: 89122463128, isFav: false },
                { first_name: 'Артемий', last_name: 'Малышев', address: "Волхов, ул. Мечникова пр-кт, дом 146, квартира 28", phone_number: 89245899736, isFav: false },
                { first_name: 'Александр', last_name: 'Чеботарев', address: "Гурьевск, ул. Выборная, дом 91, квартира 267", phone_number: 89756485214, isFav: false },
            ],
            acsList: {
                first_name: false,
                last_name: false,
                address: false,
                phone_number: false,
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
            var nameA = a[type].toString().toLowerCase();
            var nameB = b[type].toString().toLowerCase();

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