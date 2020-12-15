import React from "react";
import AddUser from "./container/AddUser";
import UserList from "./container/UserList";
import { Component } from "react";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                { first_name: 'Петр', last_name: 'Петров', phone_number: 89232507898, isFav: true },
                { first_name: 'Михаил', last_name: 'Лавров', phone_number: 89232507898, isFav: false },
                { first_name: 'Станислав', last_name: 'Черный', phone_number: 89232507898, isFav: false },
            ]
        };
    }

    onClearArray = () => {
        this.setState({ list: [] });
    };

    deleteUser = (index) => {
        this.state.list.splice(index, 1);

        this.setState({ list: this.state.list });
    }

    render() {
        return (
            <>
                <AddUser />
                <UserList list={this.state.list} deleteUserHandler={this.deleteUser} />
            </>
        );
    }
}

export default Main;