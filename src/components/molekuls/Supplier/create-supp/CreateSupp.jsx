import React, { useState, useEffect } from 'react';
import Submit from '../../../atoms/botton';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addSupp } from '../../../../redux/actions/SupplierAction';

const CreateSupplier = () => {
    const [name_supp, setNameSupp] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [photo, setPhoto] = useState('');
    const [preview, setPreview] = useState(null);
    const [msg, setMsg] = useState("");
    const { addSuppResult } = useSelector((state) => state.SupplierReducer)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loadImage = (e) => {
        const image = e.target.files[0]
        setPhoto(image);
        setPreview(URL.createObjectURL(image))
    }

    useEffect(() => {
        if (addSuppResult !== false) {
            navigate('/supplier');
        }
    }, [addSuppResult]);

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(addSupp({
            name_supp: name_supp,
            address: address,
            mobile: mobile,
            photo: photo
        }))
    };
    return (
        <div className='d-flex flex-row position-absolute top-50 start-50 translate-middle justify-content-around p-3 cont-form-user'>
            <ToastContainer />
            <div className="cont-image">
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
                <label htmlFor="name">Name Supplier</label>
                {msg === 'Name Supplier Already Taken'
                    ? (
                        <input className="form-control" name="name" placeholder="Exp: Supp123" type="text" value={name_supp} onChange={(e) => setNameSupp(e.target.value)} style={{ 'border': '1px solid red' }} />
                    )
                    : (
                        <input className="form-control" name="name" placeholder="Exp: Supp123" type="text" value={name_supp} onChange={(e) => setNameSupp(e.target.value)} />
                    )
                }
                <label htmlFor="address">Address</label>
                <input className="form-control" name="address" placeholder="Exp: Jln.Example" id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                <label htmlFor="mobile">Mobile</label>
                <input className="form-control" name="mobile" placeholder="891234556789" id="mobile" type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <div className="mt-2">
                    <Submit value="Save" type="submit" onClick={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default CreateSupplier