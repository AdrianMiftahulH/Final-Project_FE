import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { EditSupp, EditUser, ListProBySupp, LogActivityUser, RecentTransaction } from '../../components/molekuls';
import { CreateDistPage, CreateProductPage, CreateSuppPage, CreateUserPage, DashboardPage, DetailProductPage, DetailSuppPage, DetailUserPage, ListDistPage, ListProductsPage, ListSuppPage, ListTransPage, ListUserPage, LoginPage, NoPage, TransaksiKeluarPage, TransaksiMasukPage } from '../../pages';
import LoggerPage from '../../pages/super_admin/App_Log/Logger';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Link Not found page */}
                <Route path="*" element={<NoPage />} />

                {/* Link Login */}
                <Route path="/" element={<LoginPage />} />

                {/* Link dashboard */}
                <Route path='/dashboard' element={<DashboardPage />} />

                {/* Link Log */}
                <Route path='/log' element={<LoggerPage />} />

                {/* Link product */}
                <Route path='/products' element={<ListProductsPage />} />
                <Route path='/Create_Product' element={<CreateProductPage />} />
                <Route path='/Detail_product/:id' element={<DetailProductPage />} />
                <Route path='/Edit_Product/:id' />

                {/* Link Supplier */}
                <Route path='/supplier' element={<ListSuppPage />} />
                <Route path='/Add_Supplier' element={<CreateSuppPage />} />
                <Route path='/detail_supplier' element={<DetailSuppPage />} >
                    <Route path='recent/:id' element={<RecentTransaction />} />
                    <Route path='productBySupp/:id' element={<ListProBySupp />} />
                    <Route path='edit/:id' element={<EditSupp />} />
                </Route>

                {/* Link Reseller */}
                <Route path="/reseller" element={<ListDistPage />} />
                <Route path="/Add_Reseller" element={<CreateDistPage />} />
                <Route path='/Edit_Reseller/:id' />

                {/* Link Transaksi Masuk */}
                <Route path="/List_Transaction" element={<ListTransPage />} />
                <Route path="/Transaksi_Masuk" element={<TransaksiMasukPage />} />
                <Route path="/Transaksi_Keluar" element={<TransaksiKeluarPage />} />

                {/* Link User (Super Admin) */}
                <Route path='/user' element={<ListUserPage />} />
                <Route path='/detail_user' element={<DetailUserPage />} >
                    <Route path='log/:id' element={<LogActivityUser />}></Route>
                    <Route path='edit/:id' element={<EditUser />}></Route>
                </Route>
                <Route path='/create-user' element={<CreateUserPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers