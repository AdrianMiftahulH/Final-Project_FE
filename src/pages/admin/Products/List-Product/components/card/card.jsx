import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'

const CardProduct = ({ id, image, title, supp, total }) => {
    return (
        <div className="cont-card d-flex flex-column" key={id}>
            <div className="img-item">
                <img src={image} alt="Image Product" className='img-product' />
            </div>
            <div className="p-3">
                <div className="title-item">
                    <span>{title}</span>
                </div>
                <div className="supplier-item">
                    <span>{supp}</span>
                </div>
                <div className="total-item">
                    <span>{total}</span>
                </div>
                <div className="cont-detail mt-2">
                    <Link to={id} className='btn-detail btn py-1 px-5'>Detail</Link>
                </div>
            </div>
        </div>
    )
}

export default CardProduct