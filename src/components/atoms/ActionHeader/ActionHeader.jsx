import React from 'react'
import { Link } from 'react-router-dom'

const ActionHeader = () => {
    return (
        <div className="btn-group d-flex justify-content-center">
            <button type="button" className="btn" data-bs-toggle="dropdown" aria-expanded="false">
                <box-icon name='plus'></box-icon>
            </button>
            <ul className="dropdown-menu">
                <li><Link to="" className="dropdown-item">Add Supplier</Link></li>
                <li><Link to="" className="dropdown-item">Add Reseller</Link></li>
                <li><Link to="" className="dropdown-item">Add Product</Link></li>
                <li><Link to="" className="dropdown-item">Transaksi Masuk</Link></li>
                <li><Link to="" className="dropdown-item">Transaksi Keluar</Link></li>
            </ul>
        </div>
    )
}

export default ActionHeader