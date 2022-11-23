import React, { useEffect } from 'react'
import { Header, NavBar, ProfileSupp, } from "../../../../components/molekuls";
import { useParams, Outlet } from 'react-router-dom';
import { GetByIdSupp } from '../../../../redux/actions/SupplierAction';
import { useDispatch, useSelector } from 'react-redux';

const DetailSuppPage = () => {
    const { id } = useParams();

    const {
        getByIdSuppResult
    } = useSelector((state) => state.SupplierReducer);
    const disptach = useDispatch();

    useEffect(() => {
        disptach(GetByIdSupp(id))
    }, [disptach])

    return (
        <>
            <NavBar />
            <div className="home-section">
                <Header titleHeader="Detail Supplier" />
                <div className="d-flex justify-content-evenly flex-row m-4">
                    <div className="profile-card">
                        <ProfileSupp id={getByIdSuppResult.id} name_supp={getByIdSuppResult.name_supp} photoProfile={`http://localhost:4000/${getByIdSuppResult.logo_supp}`} address={getByIdSuppResult.address} mobile={getByIdSuppResult.mobile} />
                    </div>
                    <div className="log-acticty-profile">
                        <Outlet />
                    </div>
                </div>
            </div >
        </>
    )
}

export default DetailSuppPage