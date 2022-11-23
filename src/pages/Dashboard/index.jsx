import React, { useState, useEffect } from 'react'
import { api, apiWithToken, apiWithTokenDashBoard } from '../../api/api';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { Header, ListCardDashboard, NavBar } from '../../components/molekuls'

const DashboardPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [token, setToken] = useState("");
    const [exp, setExp] = useState('');

    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
            const res = await apiWithTokenDashBoard.get('/auth/token');
            setToken(res.data.accessToken);
            console.log('dashboard acess', res);
            const decoded = jwt_decode(res.data.accessToken)
            setUsername(decoded.username)
            setExp(decoded.exp);
        } catch (error) {
            if (error.res) {
                navigate('/');
            }
        }
    }

    return (
        <>
            <NavBar />
            <div className="home-section">
                <Header titleHeader="Dashboard" />
                <ListCardDashboard />
            </div >
        </>
    )
}

export default DashboardPage