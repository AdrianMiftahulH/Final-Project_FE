import React from 'react'
import { Link } from 'react-router-dom'
import './searchbar.scss'

const ContSearchBar = ({ href, btnCreate }) => {
    return (
        <div className="cont-main-search d-flex flex-row align-items-center justify-content-between px-5">
            <div className="cont-main-filter d-flex flex-row">
                <div className="cont-search">
                    <box-icon name='search'></box-icon>
                </div>
            </div>
            <div className="cont-create-product">
                <Link to={href} className='btn py-1 px-5 btn-primary'>{btnCreate}</Link>
            </div>
        </div>
    )
}

export default ContSearchBar

