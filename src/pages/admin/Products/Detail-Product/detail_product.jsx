import React from 'react'
import { DescProduct, Table } from './components'

class DetailProduct extends React.Component {
    render() {
        return (
            <>
                <DescProduct />
                <Table />
            </>
        )
    }
}

export default DetailProduct