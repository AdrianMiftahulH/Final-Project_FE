import React from 'react'
import { Link } from 'react-router-dom'

const LinkNav = ({ href, name, icon }) => {
    return (
        <li>
            <Link to={href}>
                <i className={icon}></i>
                <span className="links_name">{name}</span>
            </Link>
            <span className="tooltip">{name}</span>
        </li >
    )
}

export default LinkNav