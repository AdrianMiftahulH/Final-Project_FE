import React from 'react'
import {
    BrowserRouter,
    Link,
    Route,
    Routes
} from "react-router-dom";
import { Login, MainApp, Regis } from '../../pages';

const Routers = () => {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/login"  element={<Login />} />
                <Route path="/regis"  element={<Regis />} />
                <Route path='/admin' element={<MainApp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers