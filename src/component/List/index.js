import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import '../../container/UserList/userPageStyle.css'
import User from '../../container/UserList/User'

class UsersPage extends Component {

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
                            delEvent={this.props.deleteUserHandler.bind(this, item.last_name)}
                            favEvent={this.props.favUserHandler.bind(this, item.last_name)}
                            index={index}
                            first_name={item.first_name}
                            last_name={item.last_name}
                            phone_number={item.phone_number}
                            isFav={item.isFav}
                            changeEvent={this.props.changeUserNameHandler.bind(this, item.last_name)}
                            key={index}>{item.first_name}
                        </User>
                    </div>

                </div>
            )}
        </Draggable>
    }

    render() {
        return (<DragDropContext onDragEnd={this.props.onDragEndHandler}>
            <div className='container'>
                <div className='users'>
                    <ul>
                        <li>
                            <p>№</p>
                            <p></p>
                            <p>Имя</p>
                            <p>Фамилия</p>
                            <p>Адрес</p>
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
