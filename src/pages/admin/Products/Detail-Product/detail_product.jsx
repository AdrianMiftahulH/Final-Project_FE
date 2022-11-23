import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../../api/api';
import { ContSearchBarDrop } from '../../../../components/atoms';
import { DetailProduct, Header, NavBar } from '../../../../components/molekuls'

const DetailProductPage = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});
    const [supplier, setSupplier] = useState({});
    const [category, setCategory] = useState({});

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await api.get(`product/detail/${id}`);
        setProducts(response.data.data);
        setSupplier(response.data.data.supplier)
        setCategory(response.data.data.category)
    };

    return (
        <>
            <NavBar />
            <div className="home-section">
                <Header titleHeader="Detail Product" />
                <ContSearchBarDrop nameBtn="Transaction" href1="../Transaksi_Masuk" btn1="Transaction Add" href2="../Transaksi_Keluar" btn2="Transaction drop" />
                <DetailProduct id={products.id} name_product={products.name_product} imageProduct={`http://localhost:4000/${products.photo}`} total={products.total} satuan={products.satuan} category={category.name_cat} supplier={supplier.name_supp} />
            </div >
        </>
    )
}

export default DetailProductPage