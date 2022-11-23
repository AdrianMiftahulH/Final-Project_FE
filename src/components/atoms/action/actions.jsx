import React from 'react'
import { Link } from 'react-router-dom'
import { MoreOne } from '@icon-park/react';

const ActionDropdown = ({ NameLink, linkItemDetail, onClickDelete }) => {
    return (
        <div className="btn-group d-flex justify-content-center">
            <button type="button" className="btn btn-user" data-bs-toggle="dropdown" aria-expanded="false">
                <MoreOne theme="outline" size="24" fill="#333" strokeLinecap="butt" />
            </button>
            <ul className="dropdown-menu">
                <li><Link to={linkItemDetail} className="dropdown-item">{NameLink}</Link></li>
                <li><button onClick={onClickDelete} className="dropdown-item" style={{ "cursor": "pointer" }}>Delete</button></li>
            </ul>
        </div>
    )
}

export default ActionDropdown