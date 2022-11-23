import React from 'react'
import { Header, NavBar, TransaksiKeluar, } from '../../../components/molekuls'

class TransaksiKeluarPage extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="home-section">
                    <Header titleHeader="Transaksi Keluar" />
                    <TransaksiKeluar />
                </div >

            </>
        )
    }
}

export default TransaksiKeluarPage