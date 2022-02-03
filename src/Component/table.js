import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../Redux/actions';
import {Link} from "react-router-dom";
import "./table.css";

function Table() {
	const [data, setData] = useState([]);

const dispatch = useDispatch();
const state = useSelector(store => store.userReducer)
const {userData} = state;

useEffect(() => {
    dispatch(getUsers())
}, [])

useEffect(() => {
    setData(userData)
}, [userData])

return (
        <div className="home">
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
                <div className="tableWrapperCover">
                    <div className="tableWrapper">
                        <div className="tableWrapperHeader">
                            <h3 className="innerHeader">User list</h3>

                            <Link to="/adduser" className="addUser">
                            <button className="addButton">Add new</button>
                            </Link>
                        </div>
                        <div className="tableFlex">
                            <table>
                                <tr class='top-tr'>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
																{data.map(d => {
																	return(
																	<tr>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.username}</td>
                                    <td>{d.email}</td>
                                    <td>{d.address.city}</td>
                                    <td><button className="orange" >edit</button></td>
                                    <td><button className="red">delete</button></td>
                                </tr>
																)
																})}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;
