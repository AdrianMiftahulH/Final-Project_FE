import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

class Header extends React.Component {
    render() {
        return (
            <div className="cont-header d-flex flex-row align-items-center px-5 justify-content-between">
                <div className="title-page">
                    Products
                </div>
                <div className="cont-profile d-flex align-items-center">
                    <i className="fa-solid fa-bell icon-btn-header"></i>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-circle-user icon-btn-header"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to="#" className="dropdown-item"><i className="fa-solid fa-user icons-link-profile"></i> Profile</Link></li>
                            <li><Link to="#" className="dropdown-item"><i className="fa-solid fa-gears icons-link-profile"></i> Settings</Link></li>
                            <li><Link to="#" className="dropdown-item mt-3"><i className="fa-solid fa-arrow-right-from-bracket icons-link-profile"></i>Log Out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header