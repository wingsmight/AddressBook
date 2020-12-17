import React, { Component } from 'react';
import '../UserList/userStyle.css'
import FavButton from '.././UserList/favButton'
import { FaRegTrashAlt } from 'react-icons/fa'
import ContentEditable from "react-contenteditable";
import { MdModeEdit } from 'react-icons/md'


class User extends Component {

    constructor() {
        super()
        this.state = {
            display: "notdisplayed",
            first_name_disable: true,
            last_name_disable: true,
            address_disable: true,
            phone_number_disable: true,
        }
    }
    showButton = e => {
        e.preventDefault();

        this.setState({ display: "displayed" });
    };

    hideButton = e => {
        e.preventDefault();

        this.setState({ display: "notdisplayed" });
    };

    setDisable_first_name = () => {
        this.setState({ first_name_disable: !this.state.first_name_disable })
    }
    setDisable_last_name = () => {
        this.setState({ last_name_disable: !this.state.last_name_disable })
    }
    setDisable_address = () => {
        this.setState({ address_disable: !this.state.address_disable })
    }
    setDisable_phone_number = () => {
        this.setState({ phone_number_disable: !this.state.phone_number_disable })
    }



    render() {
        window.addEventListener('keydown', (event) => {

            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                this.setState({
                    first_name_disable: true,
                    last_name_disable: true,
                    address_disable: true,
                    phone_number_disable: true,
                })
            }

        })

        if (this.props.children) {
            return (
                <ul
                    onMouseEnter={e => this.showButton(e)}
                    onMouseLeave={e => this.hideButton(e)}
                >
                    <li key={this.props.index}>
                        <p>
                            <FavButton
                                isFav={this.props.isFav}
                                favEvent={this.props.favEvent}
                            />
                        </p>
                        <p>
                            {this.props.index + 1}
                        </p>
                        <p>
                            <ContentEditable
                                className="editName"
                                html={this.props.first_name}
                                disabled={this.state.first_name_disable}
                                onChange={this.props.changeEvent.bind(this, this.props.last_name, "first_name")}
                            />
                            <button className={this.state.display} onClick={
                                this.setDisable_first_name.bind(this)
                            }>
                                <MdModeEdit className="editIcon" />
                            </button>
                        </p>
                        <p>
                            <ContentEditable
                                className="editName"
                                html={this.props.last_name}
                                disabled={this.state.last_name_disable}
                                onChange={this.props.changeEvent.bind(this, this.props.last_name, "last_name")}
                            />
                            <button className={this.state.display} onClick={
                                this.setDisable_last_name.bind(this)
                            }>
                                <MdModeEdit className="editIcon" />
                            </button>
                        </p>
                        <p>
                            <ContentEditable
                                className="editAddress"
                                html={this.props.address}
                                disabled={this.state.address_disable}
                                onChange={this.props.changeEvent.bind(this, this.props.last_name, "address")}
                            />
                            <button className={this.state.display} onClick={
                                this.setDisable_address.bind(this)
                            }>
                                <MdModeEdit className="editIcon" />
                            </button>
                        </p>
                        <p>
                            <ContentEditable
                                className="editName"
                                html={"" +this.props.phone_number}
                                disabled={this.state.phone_number_disable}
                                onChange={this.props.changeEvent.bind(this, this.props.last_name, "phone_number")}
                            />
                            <button className={this.state.display} onClick={
                                this.setDisable_phone_number.bind(this)
                            }>
                                <MdModeEdit className="editIcon" />
                            </button>
                        </p>

                        <button class="deleteButton" onClick={this.props.delEvent}>
                            <FaRegTrashAlt className="deleteIcon" />
                        </button>
                    </li>
                </ul>
            )
        } else {
            return (<div></div>)
        }
    }

}

export default User;