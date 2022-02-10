import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import "./addUser.css";
import { addUser, updateUser } from '../Redux/actions';

function AddUser() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [isEdit, setisEdit] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const { location } = history;
    const [username, setUsername] = useState('');

    const handleName = e => setName(e.target.value);
    const handleEmail = e => setEmail(e.target.value)
    const handleCity = e => setCity(e.target.value)
    const handleUsername = e => setUsername(e.target.value)

    const cancel = () => history.push('/');

    useEffect(() => {
        if (location.state) {
            const { name, email, address, username } = location.state;
            setName(name)
            setEmail(email);
            setUsername(username)
            setCity(address.city)
            setisEdit(true)
        }
    }, [location])

    const addNewUser = () => {
        const newData = addUser({
            id: uuid(),
            name,
            email,
            address: { city },
            username

        })
        dispatch(newData);
        history.push('/')
    }

    const updateCurrentUser = () => {
        const updatedData = { id: location.state.id, name, email, username, address: { city } };
        dispatch(updateUser(updatedData))
        history.push('/')
    }
    return (
        <div className="userDetails">
            <div className="cover">
                <div className="navBar">
                    <div className="circle">
                        <div className="firstCircle"></div>
                        <div className="secondCircle"></div>
                        <div className="thirdCircle"></div>
                    </div>
                    <h5>Dashboard</h5>
                </div>
                <h1 className="header">Dashbooard</h1>
                <div className="addUserWrapperCover">
                    <div className="addUserWrapper">
                        <div className="addUserWrapperHeader">
                            <h3 className="innerHeader">Form</h3>
                        </div>
                        <div className="addUserFlex">
                            <div>
                                <label>Name</label>
                                <input value={name} onChange={handleName} type="text" />
                            </div>
                            <div>
                                <label>Email</label>
                                <input value={email} onChange={handleEmail} type="text" />
                            </div>
                            <div>
                                <label>City</label>
                                <input value={city} onChange={handleCity} type="text" />
                            </div>
                            <div>
                                <label>UserName</label>
                                <input value={username} onChange={handleUsername} type="text" />
                            </div>
                            <div className="buttonWrapper">
                                <button className="cancelButton" onClick={cancel}>cancel</button>
                                <button className="submitButton"
                                    onClick={isEdit ? updateCurrentUser : addNewUser}>
                                    {isEdit ? 'Edit' : "submit"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser;