import React from 'react'
import { Header, NavBar, TransaksiMasuk } from '../../../components/molekuls'

class TransaksiMasukPage extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="home-section">
                    <Header titleHeader="Transaksi Masuk" />
                    <TransaksiMasuk />
                </div >

            </>
        )
    }
}

export default TransaksiMasukPage