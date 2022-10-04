import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { CreateProduct, Dashboard, DetailProduct, ListProducts, Login, MainAdmin, NoPage, Products, Regis } from '../../pages';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NoPage />} />
                <Route path="/" element={<Login />} />
                <Route path="/SignUp" element={<Regis />} />
                <Route path="/admin" element={<MainAdmin />}>
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='products' element={<Products />} >
                        <Route path='List_Product' element={<ListProducts />} />
                        <Route path='Create_Product' element={<CreateProduct />} />
                        <Route path='Detail_product' element={<DetailProduct />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers