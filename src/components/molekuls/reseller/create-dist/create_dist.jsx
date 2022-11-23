import React, { useState } from 'react';
import Submit from '../../../atoms/botton';
import Input from '../../../atoms/input/input';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../../api/api';

const CreateDistributor = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [photo, setPhoto] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();

    const loadImage = (e) => {
        const image = e.target.files[0]
        setPhoto(image);
        setPreview(URL.createObjectURL(image))
    }

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            navigate('../user')
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form onSubmit={saveUser} className='d-flex flex-row position-absolute top-50 start-50 translate-middle justify-content-around p-3 cont-form-user'>
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
                <label htmlFor="username">Name Reseller</label>
                <input
                    className="form-control"
                    name="username"
                    placeholder="Exp: User123"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="email">Address</label>
                <input className="form-control" name="email" placeholder="Exp: Jln.Example" id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input className="form-control" name="password" placeholder="891234332423432" id="password" type="number" value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <div className="mt-2">
                    <Submit value="Save d" type="submit" />
                </div>
            </div>
        </form>
    )
}

export default CreateDistributor