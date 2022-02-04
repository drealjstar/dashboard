import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import { v4 as uuid } from 'uuid';


import "./addUser.css";
import {addUser} from '../Redux/actions';



function AddUser(){
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [username, setUsername] = useState('')

    const handleName = e => setName(e.target.value);
    const handleEmail = e => setEmail(e.target.value)
    const handleCity = e => setCity(e.target.value)
    const handleUsername = e => setUsername(e.target.value)


    const dispatch = useDispatch();
    const history = useHistory()

    const addNewUser = () => {
        const newData = addUser({
            id: uuid(),
            name,
            email,
            address: {city},
            username

        })
        dispatch(newData);
        history.push('/')
    }
    return(
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
                        <input onChange={handleName} type= "text" />
                        </div>
                        <div>
                        <label>Email</label>  
                        <input onChange={handleEmail} type= "text" />
                        </div>
                        <div>
                        <label>City</label>  
                        <input onChange={handleCity} type= "text" />
                        </div>
                        <div>
                        <label>UserName</label>  
                        <input onChange={handleUsername} type= "text" />
                        </div>
                         <div className="buttonWrapper">
                         <button className="cancelButton">cancel</button>
                         <button className="submitButton" onClick={addNewUser}>submit</button>

                         </div>
                         


                        </div>
                    </div>
                </div>
            </div>

    


        </div>
    )
}

export default AddUser;