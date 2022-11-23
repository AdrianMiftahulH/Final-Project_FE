import React, { useState, useEffect } from 'react'
import { api } from '../../../api/api'
import { Link } from 'react-router-dom'
import { Input } from '../../atoms'
import Submit from '../../atoms/botton'
import './TransaksiMasuk.scss'

const TransaksiKeluar = () => {
    const [products, setProducts] = useState([]);
    const [selectPro, setSelectPro] = useState({})

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await api.get("product/list-product");
        setProducts(response.data.data);
    };

    return (
        <div className="cont-main-create position-absolute top-50 start-50 translate-middle d-flex flex-row justify-content-between">
            <div className="cont-main-form d-flex flex-column">
                <div className="header-product d-flex flex-row justify-content-between align-items-center">
                    <h4>List Product</h4>
                </div>
                <div className="list-product row gap-2">
                    {
                        products.map(product => (
                            <div className="col item-pro d-flex flex-row align-items-center" key={product.id}>
                                <img src={`http://localhost:4000/${product.photo}`} alt="" className="img-pro" />
                                <div className="cont_title_pro">
                                    <div className="name_pro">{product.name_product}</div>
                                    <div className="name_supp">{product.supplier.name_supp}</div>
                                    <form action="" className="d-flex flex-row align-items-center mt-1">
                                        <input type="hidden" value={product.id} />
                                        <input type="number" className='ps-1' />
                                        <button type="submit">drop</button>
                                    </form>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="cont-main-list p-4">
                <h5>List Item Selected</h5>
                <div className="cont-item-list mb-2">
                    <div className="cont-item-select d-flex flex-row justify-content-between align-items-center">
                        <div className="cont-name-item d-flex flex-column">
                            <span>Example 1</span>
                            <span>10 pcs</span>
                        </div>
                        <div className="action-item">
                            <box-icon name='trash' color='red' style={{ 'cursor': 'pointer' }}></box-icon>
                        </div>
                    </div>
                    <div className="cont-item-select d-flex flex-row justify-content-between align-items-center">
                        <div className="cont-name-item d-flex flex-column">
                            <span>Example 1</span>
                            <span>10 pcs</span>
                        </div>
                        <div className="action-item">
                            <box-icon name='trash' color='red' style={{ 'cursor': 'pointer' }}></box-icon>
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <label htmlFor="date_add">Date Drop</label>
                    <input type='date' className="form-control" name="date_add" id='date_add' value='' onChange='' required />
                </div>
                <div className="mt-2">
                    <button type='submit' className="botton input-select" onClick=''>Transaction</button>
                </div>
            </div>
        </div>
    )
}


export default TransaksiKeluar