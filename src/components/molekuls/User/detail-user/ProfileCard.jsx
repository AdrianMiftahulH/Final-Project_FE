import './ProfileCard.scss'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, GetAllUser } from '../../../../redux/actions/UserAction'
import { useEffect } from 'react'

const ProfileCard = ({ id, username, email, photoProfile }) => {
    const {
        deleteUserResult
    } = useSelector((state) => state.UserReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (deleteUserResult) {
            dispatch(GetAllUser())
            navigate('/user');
        }
    }, [deleteUserResult, dispatch]);
    return (
        <>
            <div className="" key={id}>
                <div className="d-flex flex-row align-items-center">
                    <img src={photoProfile} alt={username} className="img-profile" />
                    <div className="item-name ms-2 ">
                        <h5>{username}</h5>
                        <span>{email}</span>
                    </div>
                </div>
                <div className="Link_Profile mt-3">
                    <Link to={`./log/${id}`} className='link_item_profile d-flex flex-row align-items-center'>
                        <div className="imageLink"><box-icon name="list-ul" color='#000000' style={{ lineHeight: "50px" }}></box-icon></div>
                        <span className="links_name_profile ms-2">Log Activity</span>
                    </Link>
                    <Link to={`./edit/${id}`} className='link_item_profile d-flex flex-row align-items-center'>
                        <div className="imageLink"><box-icon name="cog" color='#000000' style={{ lineHeight: "50px" }}></box-icon></div>
                        <span className="links_name_profile ms-2">Account</span>
                    </Link>
                    <hr />
                    <div className='link_item_profile d-flex flex-row align-items-center' style={{ 'cursor': 'pointer' }} onClick={() => dispatch(deleteUser(id))}>
                        <div className="imageLink"><box-icon name='trash' color={'red'} style={{ lineHeight: "50px" }}></box-icon></div>
                        <span className="links_name_profile ms-2" style={{ 'color': 'red' }}>Delete User</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard