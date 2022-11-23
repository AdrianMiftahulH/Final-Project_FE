import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './TransaksiMasuk.scss'
import { noData } from '../../../assets'
import { useDispatch, useSelector } from 'react-redux';
import { ProductAction } from '../../../redux/actions/ProductAction';

const TransaksiMasuk = () => {
    const [selectPro, setSelectPro] = ('');
    const [total, setTotal] = ("");
    const {
        getAllProdResult,
        getAllProdLoading,
        getAllProdError
    } = useSelector((state) => state.ProductReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ProductAction());
    }, [dispatch]);


    const onSubmit = async (e) => {
        console.log(total);
        console.log(selectPro);
    };

    return (
        <div className="cont-main-create position-absolute top-50 start-50 translate-middle d-flex flex-row justify-content-between">
            <div className="cont-main-form d-flex flex-column">
                <div className="header-product d-flex flex-row justify-content-between align-items-center">
                    <h4>List Product</h4>
                    <Link to="/Create_Product" className="btn btn-primary">Create Product</Link>
                </div>
                <div className="list-product row gap-2">
                    {getAllProdResult
                        ? <>
                            {getAllProdResult.map(product => (
                                <div className="col item-pro d-flex flex-row align-items-center" key={product.id}>
                                    <img src={`http://localhost:4000/${product.photo}`} alt="" className="img-pro" />
                                    <div className="cont_title_pro">
                                        <div className="name_pro">{product.name_product}</div>
                                        <div className="name_supp">{product.supplier.name_supp}</div>
                                        <form onSubmit={onSubmit} className="d-flex flex-row align-items-center mt-1">
                                            <input type="hidden" value={product.id} onChange={(e) => setSelectPro(e.target.value)} />
                                            <input type="number" className='ps-1' onChange={(e) => setTotal(e.target.value)} />
                                            <button type="submit">add</button>
                                        </form>
                                    </div>
                                </div>
                            ))
                            }
                        </>
                        : getAllProdLoading ? (
                            <p> Loading... </p>
                        )
                            : (
                                <>{getAllProdError
                                    ? getAllProdError
                                    : <div className='position-absolute top-50 start-50 translate-middle'>
                                        <img src={noData} alt="" style={{ 'width': '100%', 'height': '70vh' }} />
                                    </div>
                                }</>
                            )
                    }
                </div>
            </div>
            <div className="cont-main-list p-4">
                <h5>List Item Selected</h5>
                <div className="cont-item-list mb-2">
                    {/* Data empty */}
                    <div className="cont-item-select d-flex flex-row justify-content-between align-items-center">
                        <div className="cont-name-item d-flex flex-column">
                            <span>Nanas</span>
                            <span>200</span>
                        </div>
                        <div className="action-item">
                            <box-icon name='trash' color='red' style={{ 'cursor': 'pointer' }}></box-icon>
                        </div>
                    </div>
                    <div className="cont-item-select d-flex flex-row justify-content-between align-items-center">
                        <div className="cont-name-item d-flex flex-column">
                            <span>Mangga</span>
                            <span>100</span>
                        </div>
                        <div className="action-item">
                            <box-icon name='trash' color='red' style={{ 'cursor': 'pointer' }}></box-icon>
                        </div>
                    </div>
                </div>
                <div className="mb-1">
                    <label htmlFor="date_add">Date Add</label>
                    <input type='date' className="form-control" name="date_add" id='date_add' value='' onChange='' required />
                </div>
                <div className="mt-2">
                    <button type='submit' className="botton input-select" onClick=''>Transaction</button>
                </div>
            </div>
        </div>
    )
}


export default TransaksiMasuk