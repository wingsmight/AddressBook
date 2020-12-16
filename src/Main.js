import React from "react";
import AddUser from "./container/AddUser";
import UserList from "./container/UserList";
import { Component } from "react";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                { first_name: 'Петр', last_name: 'Петров', phone_number: "Пушкина, 23, 3а", isFav: true },
                { first_name: 'Михаил', last_name: 'Лавров', phone_number: "Есенина, 27, 7", isFav: false },
                { first_name: 'Станислав', last_name: 'Черный', phone_number: "Твардовского, 13, 3/5а", isFav: false },
            ]
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

    changeUserName = (last_name, event) => {
        if (event.target.value.length === 0) {
            return;
        }
        const index = this.state.list.findIndex((user) => {
            return (user.last_name === last_name);
        })

        const user = this.state.list[index];
        user.first_name = event.target.value;

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
                />
                <UserList
                    list={this.state.list}
                    deleteUserHandler={this.deleteUser}
                    favUserHandler={this.favUser}
                    changeUserNameHandler={this.changeUserName}
                    onDragEndHandler={this.onDragEnd}
                />
            </>
        );
    }
}

export default Main;