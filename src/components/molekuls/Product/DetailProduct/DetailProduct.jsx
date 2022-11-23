import React from 'react'
import './DetailPro.scss';
import { Link } from 'react-router-dom';
import TableTrans from './table';

const DetailProduct = ({ id, name_product, imageProduct, category, supplier, total, satuan }) => {
    return (
        <>
            <div className="" key={id}>
                <div className="d-flex flex-row container mt-4">
                    <div className="img-detail">
                        <img src={imageProduct} alt="" className="img" />
                    </div>
                    <div className="descProduct d-flex flex-column">
                        <h1>{name_product}</h1>
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td style={{ "width": "100px" }}>Supplier : </td>
                                    <td>{supplier}</td>
                                </tr>
                                <tr>
                                    <td>Category : </td>
                                    <td><div className="rounded-pill bg-light">{category}</div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="">
                            <span>Total Product:</span>
                            <h4> 100 {satuan}</h4>
                        </div>
                        <div className="btn-add d-flex flex-row mt-3">
                            <Link to="" className='btn-action-detail btn btn-success'>Edit Product</Link>
                            <Link to="" className='btn-action-detail btn btn-danger'>Delete</Link>
                        </div>
                    </div>
                </div>
                <TableTrans />
            </div>
        </>
    )
}

export default DetailProduct