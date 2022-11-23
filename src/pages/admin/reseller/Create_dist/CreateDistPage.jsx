import React from 'react'
import { CreateDistributor, Header, NavBar } from '../../../../components/molekuls'

const CreateDistPage = () => {
    return (
        <>
            <NavBar />
            <div className="home-section">
                <Header titleHeader="Create Reseller" />
                <CreateDistributor />
            </div >
        </>
    )
}

export default CreateDistPage