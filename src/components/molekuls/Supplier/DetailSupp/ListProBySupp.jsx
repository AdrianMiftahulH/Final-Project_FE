import React, { useState, useEffect } from 'react'
import { CardProduct } from '../../../atoms';
import { useParams } from 'react-router-dom';
// import { getAllPro } from '../../../../redux/actions/actionPro';
import { api } from '../../../../api/api';

const ListProBySupp = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await api.get(`product/productBySupp/${id}`);
        setProducts(response.data.data);
    };

    return (
        <div className="list-product my-3 ms-4">
            <div className="row gap-3 justify-content-md-start">
                {
                    products.map(product => (
                        <CardProduct className="col-sm" id={product.id} key={product.id} satuan={product.satuan} image={`http://localhost:4000/${product.photo}`} title={product.name_product} supp={product.supplier.name_supp} category={product.category.name_cat} total={product.total} />
                    ))
                }
            </div>
        </div>
    )
}

export default ListProBySupp