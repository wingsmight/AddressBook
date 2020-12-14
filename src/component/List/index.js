import React from "react";
import PropTypes from "prop-types";

const List = ({ list }) => {
    return (
        <ul>
            <li>
                <p>#</p>
                <p>Имя</p>
                <p>Фамилия</p>
                <p>Телефон</p>
            </li>
            {list &&
                list.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <p>{idx + 1}</p>
                            <p>{item.first_name}</p>
                            <p>{item.last_name}</p>
                            <p>{item.phone_number}</p>
                        </li>
                    );
                })}
        </ul>
    );
};

List.propTypes = {
    list: PropTypes.array
};

export default List;
