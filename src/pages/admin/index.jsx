import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavBarAdmin } from '../../components/molekuls';

const MainAdmin = () => {
    return (
        <div>
            <NavBarAdmin />
            <div className="home-section">
                <Header />
                <Outlet />
            </div >
        </div >
    )
}

export default MainAdmin