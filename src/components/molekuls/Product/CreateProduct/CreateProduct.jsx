import React, { useState, useEffect } from 'react';
import Submit from '../../../atoms/botton';
import Input from '../../../atoms/input/input';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../../../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProduct = () => {
    const [Supps, setGetSupp] = useState([]);
    const [Cates, setGetCate] = useState([]);
    const [supp, setSupp] = useState("");
    const [cate, setCate] = useState("");
    const [nameProduct, setNameProduct] = useState("");
    const [photo, setPhoto] = useState("");
    const [satuan, setSatuan] = useState("");
    const [preview, setPreview] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const loadImage = (e) => {
        const image = e.target.files[0]
        setPhoto(image);
        setPreview(URL.createObjectURL(image))
    }
    useEffect(() => {
        getSupp();
        getCate();
    }, []);

    const getSupp = async () => {
        const response = await api.get("/supplier/list-supp");
        setGetSupp(response.data.data);
    };
    const getCate = async () => {
        const response = await api.get("/category/list-cate");
        setGetCate(response.data.data);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/product/create-product', {
                id_supp: supp,
                id_cat: cate,
                name_product: nameProduct,
                satuan: satuan,
                photo: photo,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            console.log(res);
            // navigate('../supplier')
        } catch (err) {
            if (err.response) {
                setMsg(err.response.data)
                toast.error(err.response.data.msgErr, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }
    }
    return (
        <form onSubmit={onSubmit} className='d-flex flex-row position-absolute top-50 start-50 translate-middle justify-content-around p-3 cont-form-user'>
            <div className="cont-image">
                <div className="BackSelect">
                    <Link to="/Transaksi_Masuk" className='d-flex flex-row' style={{ 'textDecoration': 'none', 'color': 'black' }}>
                        <div><box-icon name='chevron-left'></box-icon></div>
                        <span>Back</span>
                    </Link>
                </div>
                <div className="cont-select-image">
                    <input
                        id='image'
                        type="file"
                        onChange={loadImage}
                    />
                    {preview
                        ? (
                            <figure>
                                <img src={preview} alt="" width="50pc" />
                            </figure>
                        )
                        : (
                            <figure>
                                <span>no image</span>
                            </figure>
                        )
                    }
                    <label htmlFor="image">Choose Photo</label>
                </div>
            </div>
            <div className="cont-input">
                <label htmlFor="name product">Name Product</label>
                <input className="form-control" name="name product" placeholder="Exp: Product1" type="text" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)}
                />
                <label htmlFor="satuan">Satuan Barang</label>
                <input className="form-control" name="satuan" placeholder="Exp: Product1" type="text" value={satuan} onChange={(e) => setSatuan(e.target.value)}
                />
                <label htmlFor="supplier">Supplier</label>
                <select className="form-select" aria-label="Default select example" onChange={(e) => setSupp(e.target.value)}>
                    {Supps.map(supp => (
                        <option key={supp.id} value={supp.name_supp}>{supp.name_supp}</option>
                    ))}
                </select>
                <label htmlFor="password">Category</label>
                <select className="form-select" aria-label="Default select example" onChange={(e) => setCate(e.target.value)}>
                    {Cates.map(cat => (
                        <option key={cat.id} value={cat.name_cat}>{cat.name_cat}</option>
                    ))}
                </select>
                <div className="mt-2">
                    <Submit value="Save" type="submit" />
                </div>
            </div>
        </form>
    )
}

export default CreateProduct