import React from 'react';
import '../UserList/userStyle.css'
import FavButton from '.././UserList/favButton'
import { FaRegTrashAlt } from 'react-icons/fa'


const User = (props) => {
    let index = props.index;

    if (props.children) {
        return (
            <ul>
                <li key={index}>
                    <FavButton
                        isFav={props.isFav}
                        favEvent={props.favEvent}
                    />
                    <p>{index + 1}</p>
                    <p>{props.first_name}</p>
                    <p>{props.last_name}</p>
                    <p>{props.phone_number}</p>

                    <button class="deleteButton" onClick={props.delEvent}>
                        <FaRegTrashAlt class="deleteIcon" />
                    </button>
                </li>
            </ul>
        )
    } else {
        return (<li>Invalid Entry</li>)
    }
}

export default User;