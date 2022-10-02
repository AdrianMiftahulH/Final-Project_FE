import React from 'react';
import { SearchBar } from './List-Product/components/index';
import CardList from './List-Product/components/card-list/card-list';

const Products = () => {
    return (
        <div>
            <SearchBar />
            <CardList />
        </div >
    )
}

export default Products