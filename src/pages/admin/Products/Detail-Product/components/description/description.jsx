import React from 'react'
import { Link } from 'react-router-dom'
import './desc.scss';

const DescProduct = () => {
    return (
        <>
            <div className="d-flex flex-row container mt-4">
                <div className="img-detail">
                    <div className="img">p</div>
                </div>
                <div className="descProduct d-flex flex-column">
                    <h1>Example product 1</h1>
                    <span><strong>Supplier: </strong>PT. Example</span>
                    <span><strong>Total Product: </strong>100 pcs</span>
                    <p className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut unde quis cupiditate eius! Natus nulla repellendus quasi mollitia, possimus placeat accusantium officiis qui illum ex ipsa dolorem iste tempora autem recusandae laborum nemo commodi atque molestiae, debitis aut modi reprehenderit?</p>
                    <div className="btn-add d-flex flex-row mt-3">
                        <Link to="" className='btn-action-detail btn btn-primary'>Add Product</Link>
                        <Link to="" className='btn-action-detail btn btn-success'>Edit Product</Link>
                        <Link to="" className='btn-action-detail btn btn-danger'>Delete</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DescProduct