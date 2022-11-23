import React, { useEffect } from 'react'
import { CardProduct } from '../../../atoms';
import './card-list.scss';
import { noData } from '../../../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { ProductAction } from '../../../../redux/actions/ProductAction';

const CardListProduct = () => {
    const {
        getAllProdResult,
        getAllProdLoading,
        getAllProdError
    } = useSelector((state) => state.ProductReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ProductAction());
    }, [dispatch]);

    return (
        <div className="list-product my-3 ms-4">
            {getAllProdResult
                ? <div className="row gap-3 justify-content-md-start">
                    {
                        getAllProdResult.map(product => (
                            <CardProduct className="col-sm" id={product.id} key={product.id} image={`http://localhost:4000/${product.photo}`} title={product.name_product} category={product.category.name_cat} />
                        ))
                    }
                </div>
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
    )
}

export default CardListProduct