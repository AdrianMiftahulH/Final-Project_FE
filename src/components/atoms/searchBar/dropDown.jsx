import React from 'react'
import { Link } from 'react-router-dom'
import './searchbar.scss'

const ContSearchBarDrop = ({ nameBtn, href1, href2, btn1, btn2 }) => {
    return (
        <div className="cont-main-search d-flex flex-row align-items-center justify-content-between px-5">
            <div className="cont-main-filter d-flex flex-row">
                <div className="cont-search">
                    <box-icon name='search'></box-icon>
                </div>
            </div>
            <div className="btn-group" style={{ "width": "10%" }}>
                <button type="button" className="btn btn-primary dropdown-toggle px-2" data-bs-toggle="dropdown" aria-expanded="false">
                    {nameBtn}
                </button>
                <ul className="dropdown-menu">
                    <li><Link to={href1} className="dropdown-item" >{btn1}</Link></li>
                    <li><Link to={href2} className="dropdown-item" >{btn2}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default ContSearchBarDrop

