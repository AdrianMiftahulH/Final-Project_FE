import React, { useState, useEffect } from 'react'
import './editUser.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetByIdUser, updateUser } from '../../../../redux/actions/UserAction';

const EditUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [preview, setPreview] = useState(null);
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const {
        getByIdUserResult,
        updateUserResult
    } = useSelector((state) => state.UserReducer);

    useEffect(() => {
        dispatch(GetByIdUser(id))
    }, [dispatch])

    useEffect(() => {
        if (updateUserResult !== false) {
            navigate('/user');
        }
    }, [updateUserResult]);

    const loadImage = (e) => {
        const image = e.target.files[0]
        setPhoto(image);
        setPreview(URL.createObjectURL(image))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(updateUser({
            username: username,
            email: email,
            password: password,
            confPassword: confPassword,
            photo: photo
        }, id))
    };

    return (
        <>
            <h5>Edit User</h5>
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
                                    <img src={`http://localhost:4000/${getByIdUserResult.photoProfile}`} alt="" width="50pc" />
                                </figure>
                            )
                        }
                        <label htmlFor="image">Choose Photo</label>
                    </div>
                </div>
                <div className="cont-input">
                    <label htmlFor="username">Username</label>
                    <input className="form-control" placeholder={`${getByIdUserResult.username}`} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="email">Email</label>
                    <input className="form-control" placeholder={`${getByIdUserResult.email}`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input className="form-control" autoComplete="on" placeholder="*****" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="confPassword">Confirm Password</label>
                    <input className="form-control" placeholder="*****" autoComplete="on" type="password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                    <div className="mt-5">
                        <button type="submit" className="botton" onClick={onSubmit}>Edit User</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditUser