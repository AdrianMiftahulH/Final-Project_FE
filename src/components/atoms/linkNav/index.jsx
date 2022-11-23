import React from 'react'
import { Link } from 'react-router-dom'
import 'boxicons';

const LinkNav = ({ href, name, icon }) => {
    return (
        <li>
            <Link to={href}>
                <div className="imageLink"><box-icon name={icon} color='#000000' style={{ lineHeight: "50px", height: "50px" }}></box-icon></div>
                <span className="links_name">{name}</span>
            </Link>
            <span className="tooltip">{name}</span>
        </li >
    )
}

export default LinkNav