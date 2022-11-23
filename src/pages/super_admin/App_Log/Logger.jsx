import React from 'react'
import { Header, NavBar } from '../../../components/molekuls'
import Logger from '../../../components/molekuls/Logger/Logger'

const LoggerPage = () => {
    return (
        <>
            <NavBar />
            <div className="home-section">
                <Header titleHeader="Log User" />

                <Logger />
            </div >
        </>
    )
}

export default LoggerPage