import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './header.scss'
import { api } from '../../../api/api';

const Header = ({ titleHeader }) => {
    const navigate = useNavigate();

    const LogOuts = async () => {
        await api.delete('/auth/logout')
        navigate('/');
    }
    return (
        <div className="cont-header d-flex flex-row align-items-center px-5 justify-content-between">
            <div className="title-page d-flex flex-row">
                {titleHeader}
            </div>
            <div className="cont-profile d-flex align-items-center">
                {/* // <box-icon name='bell' animation='tada-hover'></box-icon> */}
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <box-icon name='user-circle'></box-icon>
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link to="#" className="dropdown-item"><i className="fa-solid fa-user icons-link-profile"></i> Profile</Link></li>
                        <li><button onClick={LogOuts} className="dropdown-item"><i className="fa-solid fa-gears icons-link-profile"></i> Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header