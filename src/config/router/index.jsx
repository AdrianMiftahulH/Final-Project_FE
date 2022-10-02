import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { Dashboard, ListProducts, Login, MainAdmin, NoPage, Products, Regis } from '../../pages';

const Routers = () => {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="*" element={<NoPage />} />
                <Route path="/"  element={<Login />} />
                <Route path="/regis"  element={<Regis />} />
                <Route path="/admin" element={<MainAdmin />}>
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='products' element={<Products />} >
                        {/* <Route path='List Product' element={<ListProducts />} /> */}
                        {/* <Route path='add' element={<Add />} /> */}
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers