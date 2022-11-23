import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './create_user.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../redux/actions/UserAction';

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [preview, setPreview] = useState(null);
    const [msg, setMsg] = useState("");
    const { addUserResult } = useSelector((state) => state.UserReducer)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const loadImage = (e) => {
        const image = e.target.files[0]
        setPhoto(image);
        setPreview(URL.createObjectURL(image))
    }

    useEffect(() => {
        if (addUserResult !== false) {
            setUsername = '';
            setEmail = '';
            setPassword = '';
            setConfPassword = '';
            setPhoto = '';
            setPreview = null;
            setMsg = "";
            navigate('/user');
        }
    }, [addUserResult]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (password.length > 6) {
            dispatch(addUser({
                username: username,
                email: email,
                password: password,
                confPassword: confPassword,
                photo: photo
            }))

        } else {
            toast.error('Password min 8 character', {
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

    };
    return (
        <>

            <form onSubmit={onSubmit}>
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
                        <label htmlFor="username">Username</label>
                        {msg === 'Username Already Taken'
                            ? (
                                <input className="form-control" placeholder="Exp: User123" type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ 'border': '1px solid red' }} />
                            )
                            : (
                                <input className="form-control" placeholder="Exp: User123" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                            )
                        }
                        <label htmlFor="email">Email</label>
                        {msg === 'Email Already Taken'
                            ? (
                                <input className="form-control" placeholder="Exp: User@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ 'border': '1px solid red' }} />
                            )
                            : (
                                <input className="form-control" placeholder="Exp: User@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            )
                        }
                        {msg === 'Password dan Confirm password invalid'
                            ? (
                                <>
                                    <label htmlFor="password">Password</label>
                                    <input className="form-control" autoComplete="on" placeholder="*****" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ 'border': '1px solid red' }} />
                                    <label htmlFor="confPassword">Confirm Password</label>
                                    <input className="form-control" placeholder="*****" autoComplete="on" type="password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} style={{ 'border': '1px solid red' }} />

                                </>
                            )
                            : (
                                <>
                                    <label htmlFor="password">Password</label>
                                    <input className="form-control" autoComplete="on" placeholder="*****" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="confPassword">Confirm Password</label>
                                    <input className="form-control" placeholder="*****" autoComplete="on" type="password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                </>
                            )
                        }
                        <div className="mt-2">
                            <button type="submit" className="botton">Create User</button>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}

export default CreateUser