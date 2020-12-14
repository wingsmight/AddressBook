import React, { Component } from "react";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'
import { usersConst } from '../../Data'
import User from '../../container/UserList/User'

class UsersPage extends Component {

    constructor() {
        super();

        this.state = { users: usersConst };

        console.log(this.state)
    }

    state = { users: usersConst }

    deleteUser = (index, e) => {

        const users = Object.assign([], this.state.users);
        users.splice(index, 1);
        this.setState({ users: users });
    }

    favUser = (last_name, event) => {
        const index = this.state.users.findIndex((user) => {
            return (user.last_name === last_name);
        })

        this.state.users[index].isFav = !this.state.users[index].isFav;

        this.setState({ users: this.state.users });
    }

    changeUserName = (last_name, event) => {
        if (event.target.value.length === 0) {
            return;
        }
        const index = this.state.users.findIndex((user) => {
            return (user.last_name === last_name);
        })

        const user = Object.assign({}, this.state.users[index]);
        user.first_name = event.target.value;

        const users = Object.assign([], this.state.users);
        users[index] = user;

        this.setState({ users: users });
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

        const users = Object.assign([], this.state.users);
        const droppedUser = this.state.users[source.index];


        users.splice(source.index, 1);
        users.splice(destination.index, 0, droppedUser);
        this.setState({
            users
        });
    }

    renderUsers = (item, index) => {
        return <Draggable
            key={index}
            draggableId={index + ' '}
            index={index}>

            {(provided) => (
                <div ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}> 

                    <div>
                        <User
                            delEvent={this.deleteUser.bind(this, index)}
                            favEvent={this.favUser.bind(this, item.last_name)}
                            index={index}
                            first_name={item.first_name}
                            last_name={item.last_name}
                            phone_number={item.phone_number}
                            isFav={item.isFav}
                            changeEvent={this.changeUserName.bind(this, item.last_name)}
                            key={index}>{item.first_name}
                        </User>
                    </div>

                </div>
            )}
        </Draggable>
    }

    render() {
        return (<DragDropContext onDragEnd={this.onDragEnd}>
            <div className='container'>
                <div className='users'>
                    <h1>Список контактов:</h1>

                    <ul>
                        <li>
                            <p>#</p>
                            <p>Имя</p>
                            <p>Фамилия</p>
                            <p>Телефон</p>
                        </li>
                    </ul>

                    <Droppable droppableId="dp1">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {this.props.list.map(this.renderUsers)}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </div>
        </DragDropContext>);
    }
}

export default UsersPage;
