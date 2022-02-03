import React, {useState} from "react";
import "./table.css";

function Table() {
	const [data, setData] = useState([
		{
			id: '1',
			name:'Ade ayo', 
	    userName: 'footbal',
     email: 'hhhhh@gmqil.com',
		 city: 'lagos'
	}

]);
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
                            <button className="addButton">Add new</button>
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
                                    <td>{d.userName}</td>
                                    <td>{d.email}</td>
                                    <td>{d.city}</td>
                                    <td><button className="orange">edit</button></td>
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
