import React from 'react';
import { ContSearchBarDrop } from '../../../../components/atoms';
import { Header, ListTrans, NavBar } from '../../../../components/molekuls/index';

const ListTransPage = () => {
    return (
        <>
            <NavBar />
            <div className="home-section">
                <Header titleHeader="List Transaction" />
                {/* Mengambil component Searchbar */}
                <ContSearchBarDrop nameBtn="Transaction" href1="../Transaksi_Masuk" btn1="Transaction Add" href2="../Transaksi_Keluar" btn2="Transaction drop" />
                {/* Mengambil component list card */}
                <ListTrans />
            </div >

        </>
    )
}

export default ListTransPage