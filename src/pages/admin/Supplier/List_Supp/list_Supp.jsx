import React from 'react';
import { ContSearchBar } from '../../../../components/atoms';
import { CardListSupp, Header, NavBar } from '../../../../components/molekuls/index';

const ListSupp = () => {
    return (
        <>
            <NavBar />
            <div className="home-section">
                <Header titleHeader="Supplier" />
                {/* Mengambil component Searchbar */}
                <ContSearchBar href="../Add_Supplier" btnCreate="Add Supplier" />
                {/* Mengambil component list card */}
                <CardListSupp />
            </div >

        </>
    )
}

export default ListSupp