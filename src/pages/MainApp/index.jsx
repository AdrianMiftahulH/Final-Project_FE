import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../../components/melekuls/header'
import ContBarang from "../admin/Barang/list_Barang"

const MainApp = () => {
    return (
        <div>
            <Header />
            {/* <BrowserRouter>
                <Routes>
                    <Route path='/admin/barang' element={<ContBarang />} />
                </Routes>
            </BrowserRouter> */}
        </div>
    )
}

export default MainApp