import React, { useEffect } from 'react'
import { Header, NavBar, ProfileCard } from "../../../../components/molekuls";
import './detail_user.scss'
import { useParams, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetByIdUser } from '../../../../redux/actions/UserAction';

const DetailUserPage = () => {
    const { id } = useParams();
    const {
        getByIdUserResult
    } = useSelector((state) => state.UserReducer);
    const disptach = useDispatch();

    useEffect(() => {
        disptach(GetByIdUser(id))
    }, [disptach])

    return (
        <>
            <NavBar />
            <div className="home-section">
                <Header titleHeader="Detail User" />
                <div className="d-flex justify-content-evenly flex-row m-4">
                    <div className="profile-card">
                        <ProfileCard id={getByIdUserResult.id} username={getByIdUserResult.username} photoProfile={`http://localhost:4000/${getByIdUserResult.photoProfile}`} email={getByIdUserResult.email} role={getByIdUserResult.role} />
                    </div>
                    <div className="log-acticty-profile">
                        <Outlet />
                    </div>
                </div>
            </div >
        </>
    )
}

export default DetailUserPage