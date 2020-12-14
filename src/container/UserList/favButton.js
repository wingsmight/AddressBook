import React from 'react';
import { FaStar } from 'react-icons/fa'

const FavButton = (props) => 
{
    if (props.isFav) {
        return (
                <button class="btn" onClick={props.favEvent}>
                <FaStar class="starIcon" color="orange" />
                </button>
            )

    }
    else {
        return (
            <button class="btn" onClick={props.favEvent}>
                <FaStar class="starIcon" color="gray" />
            </button>
        )
    }
}


export default FavButton;
