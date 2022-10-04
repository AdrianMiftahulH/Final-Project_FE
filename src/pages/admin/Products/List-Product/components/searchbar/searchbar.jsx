import React from 'react'
import { Link } from 'react-router-dom'
import './searchbar.scss'

class SearchBar extends React.Component {
    render() {
        return (
            <div className="cont-main-search d-flex flex-row align-items-center justify-content-between px-5">
                <div className="cont-main-filter d-flex flex-row">
                    <div className="dropdown cont-filter">
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-filter"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to="#" className="dropdown-item">Profile</Link></li>
                            <li><Link to="#" className="dropdown-item">Settings</Link></li>
                            <li><Link to="#" className="dropdown-item">Log Out</Link></li>
                        </ul>
                    </div>
                    {/* <div className="dropdown cont-filter">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className=ame=ame="fa-solid fa-table-cells"></i>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div> */}
                    <div className="cont-search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="cont-create-product">
                    <Link to="../Create_Product" className='btn py-1 px-5 btn-primary'>Create</Link>
                </div>
            </div>
        )
    }
}

export default SearchBar