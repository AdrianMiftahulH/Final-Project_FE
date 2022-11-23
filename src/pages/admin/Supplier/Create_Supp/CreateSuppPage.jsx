import React from 'react'
import { CreateSupplier, Header, NavBar } from '../../../../components/molekuls'

const CreateSuppPage = () => {
    return (
        <>
            <NavBar />
            <div className="home-section">
                <Header titleHeader="Create Supplier" />
                <CreateSupplier />
            </div >
        </>
    )
}

export default CreateSuppPage