import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import "./table.css";
import Modal from "./modal";


const Table = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState('')
    const history = useHistory()
    const state = useSelector(store => store.userReducer)
    const { userData } = state;
    const [show, setShow] = useState(false)

    useEffect(() => {
        setData(userData)
    }, [userData])


    const handleClick = (id) => {
        setId(id)
        setShow(true)
    }

    console.log(userData);
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

                            <button className="addButton" onClick={() => history.push("/adduser")}>Add new</button>
                        </div>
                        <div className="tableFlex">
                            <table>
                                <thead>
                                    <tr className='top-tr'>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>City</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.map((d, i) => {
                                        return (

                                            <tr key={d.id}>
                                                <td>{i + 1}</td>
                                                <td>{d.name}</td>
                                                <td>{d.username}</td>
                                                <td>{d.email}</td>
                                                <td>{d?.address?.city}</td>
                                                <td><button className="editButton" >edit</button></td>
                                                <td><button className="deleteButton" onClick={() => handleClick(d.id)}>delete</button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                            <Modal id={id} show={show} onClose={() => setShow(false)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;
