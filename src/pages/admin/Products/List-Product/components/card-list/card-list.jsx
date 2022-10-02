import React from 'react'
import { Product } from '../../../../../../config/dataProduct'
import CardProduct from '../card/card'
import './card-list.scss';

const CardList = () => {
    return (
        <div className="list-product mt-5">
            <div className="row gap-3 justify-content-md-center">
                {Product.map(product => (
                    <CardProduct className="col-sm" key={product.id} image={product.image} title={product.title} supp={product.supp} total={product.total} />
                ))}
            </div>
        </div>
    )
}

export default CardList