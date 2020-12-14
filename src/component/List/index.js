import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { users } from './Data';

class UsersPage extends Component {

    state = { users: users }

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
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <ul>
                        <li key={index}>
                            <p>{index + 1}</p>
                            <p>{item.first_name}</p>
                            <p>{item.last_name}</p>
                            <p>{item.phone_number}</p>
                        </li>
                    </ul>

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
                                {this.state.users.map(this.renderUsers)}
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
