import React from 'react';
import { SearchBar } from './components';
import CardList from './components/card-list/card-list';

const ListProducts = () => {
    return (
        <div>
            <SearchBar />
            <CardList />
        </div >
    )
}

export default ListProducts