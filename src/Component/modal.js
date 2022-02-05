import React from "react";
import {useDispatch} from 'react-redux';
import {deleteUser} from './../Redux/actions'

import "./modal.css";

const Modal = ({show, onClose, id}) => {
    const dispatch = useDispatch();

   const handleDelete = () => {
        dispatch(deleteUser(id))
        onClose()
    }
    
return (
        <>
       {show && <div className="modal">
            <div className="modalContent">
                <div className="modalHeader">
                    <h4 className="modalTitle">Delete</h4>
                </div>
                <div className="modalBody">
                    <p className="deleteComment">Do you want to delete ?</p>
                </div>
                <div className="modalFooter">
                    <button className="cancel" onClick={onClose}>Cancel</button>
                    <button className="delete" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Modal;