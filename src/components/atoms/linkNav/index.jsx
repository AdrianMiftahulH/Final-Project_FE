import React from 'react'

const LinkNav = ({ href, name, icon }) => {
    return (
        <li>
            <a href={href}>
                <div className="i">{icon}</div>
                <span className="links_name">{name}</span>
            </a>
            <span className="tooltip">{name}</span>
        </li>
    )
}

export default LinkNav