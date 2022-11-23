import React from 'react'
import { Link } from 'react-router-dom'

const CardSupp = ({ id, image, title, mobile, address }) => {
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
                    <span>{address}</span>
                </div>
                <div className="supplier-item">
                    <span>{mobile}</span>
                </div>
                <div className="cont-detail mt-2">
                    <Link to={`/supplier/list-supp/detail/${id}`} className='btn-detail btn py-1 px-5'>Detail</Link>
                </div>
            </div>
        </div>
    )
}

export default CardSupp