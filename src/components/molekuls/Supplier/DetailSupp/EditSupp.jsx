import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetByIdSupp, updateSupp } from '../../../../redux/actions/SupplierAction';

const EditSupp = () => {
    const [name_supp, setNameSupp] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [photo, setPhoto] = useState('');
    const [preview, setPreview] = useState(null);
    const [msg, setMsg] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        getByIdSuppResult,
        updateSuppResult
    } = useSelector((state) => state.SupplierReducer);

    useEffect(() => {
        dispatch(GetByIdSupp(id))
    }, [dispatch])

    useEffect(() => {
        if (updateSuppResult !== false) {
            navigate(`/supplier`);
        }
    }, [updateSuppResult]);

    const loadImage = (e) => {
        const image = e.target.files[0]
        setPhoto(image);
        setPreview(URL.createObjectURL(image))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(updateSupp({
            name_supp: name_supp,
            address: address,
            mobile: mobile,
            photo: photo
        }, id))
    };
    return (
        <>
            <h5>Edit Supplier</h5>
            <hr />
            <div className='d-flex flex-row justify-content-around p-3 cont-form-edit-user'>
                <div className="cont-image">
                    <div className="cont-select-image">
                        <ToastContainer />
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
                                    <img src={`http://localhost:4000/${getByIdSuppResult.logo_supp}`} alt="" width="50pc" />
                                </figure>
                            )
                        }
                        <label htmlFor="image">Choose Photo</label>
                    </div>
                </div>
                <div className="cont-input mt-4">
                    <label htmlFor="name">Name Supplier</label>
                    <input className="form-control" name="name" value={name_supp} type="text" placeholder={`${getByIdSuppResult.name_supp}`} onChange={(e) => setNameSupp(e.target.value)} />
                    <label htmlFor="address">Address</label>
                    <input className="form-control" name="address" value={address} id="address" type="text" placeholder={`${getByIdSuppResult.address}`} onChange={(e) => setAddress(e.target.value)} />
                    <label htmlFor="mobile">Mobile</label>
                    <input className="form-control" name="mobile" value={mobile} id="mobile" type="text" placeholder={`${getByIdSuppResult.mobile}`} onChange={(e) => setMobile(e.target.value)} />
                    <div className="mt-2">
                        <button type="submit" className="botton" onClick={onSubmit}>Edit Supplier</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditSupp