import React from 'react'
import { CreateProduct, Header, NavBar } from '../../../../components/molekuls'

class CreateProductPage extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="home-section">
                    <Header titleHeader="Create Product" />
                    <CreateProduct />
                </div >
            </>
        )
    }
}

export default CreateProductPage