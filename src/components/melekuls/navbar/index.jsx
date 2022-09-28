import React from 'react'
import { LinkNav } from '../../atoms'
import './navbar.scss'


class NavBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="logo-details">
                    {/* <i className="fa-thin fa-barcode" className='logo'></i> */}
                    <div className="logo_name">Example</div>
                    <box-icon type='solid' name='chevron-right' color='white' id="btn"></box-icon>
                </div>
                <ul className="nav-list">
                    <LinkNav href="./dashboard" icon="D" name="DashBoard" />
                    <LinkNav href="./barang" icon="B" name="Barang" />
                    <li className="profile">
                        <div className="profile-details">
                            <img src="profile.jpg" alt="profileImg" />
                            <div className="name_job">
                                <div className="name">Prem Shahi</div>
                                <div className="job">Web designer</div>
                            </div>
                        </div>
                        <div className="cont-logout">
                            <box-icon name='log-out' id="log_out" color='white' ></box-icon>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar