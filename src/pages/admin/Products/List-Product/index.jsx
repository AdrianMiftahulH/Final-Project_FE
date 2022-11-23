import React from 'react';
import { ContSearchBar, ContSearchBarDrop } from '../../../../components/atoms';
import { CardListProduct, Header, NavBar } from '../../../../components/molekuls/index';
import './filter.scss';

const ListProducts = () => {
    return (
        <>
            <NavBar />
            <div className="home-section">
                <Header titleHeader="List Product" />
                {/* Mengambil component Searchbar */}
                <ContSearchBarDrop nameBtn="Transaction" href1="../Transaksi_Masuk" btn1="Transaction Add" href2="../Transaksi_Keluar" btn2="Transaction drop" />
                {/* Menambil component List Product dengan bentuk card */}
                <CardListProduct />
            </div >
        </>
    )
}

export default ListProducts