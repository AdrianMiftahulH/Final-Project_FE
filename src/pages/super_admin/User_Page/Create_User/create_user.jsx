import React from 'react'
import { Header, NavBar } from '../../../../components/molekuls'
import CreateUser from '../../../../components/molekuls/User/create_user/create_user'

const CreateUserPage = () => {
    return (
        <>
            <NavBar />
            <div className="home-section">
                <Header titleHeader="Create User" />
                <CreateUser />
            </div >

        </>
    )
}

export default CreateUserPage