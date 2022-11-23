import React, { useEffect } from 'react'
import './list-user.scss'
import { ActionDropdown } from '../../../atoms';
import { noData } from '../../../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, GetAllUser } from '../../../../redux/actions/UserAction';

const ListUser = () => {
    const {
        getAllUserResult,
        getAllUserLoading,
        getAllUserError,
        deleteUserResult
    } = useSelector((state) => state.UserReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        // GET ACTION
        dispatch(GetAllUser())
    }, [dispatch]);

    useEffect(() => {
        if (deleteUserResult) {
            dispatch(GetAllUser())
        }
    }, [deleteUserResult, dispatch]);

    return (
        <div className="container mt-5">
            {getAllUserResult
                ? (
                    <div className="cont-table">
                        <table className="table container">
                            <thead>
                                <tr>
                                    <th scope="col">User</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {getAllUserResult.map(user => (
                                    <tr key={user.id} className="row-table-user">
                                        <td className='d-flex flex-row item'>
                                            <div><img src={`http://localhost:4000/${user.photoProfile}`} alt="" className="img-user-list" /></div>
                                            {user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <ActionDropdown NameLink="Detail" linkItemDetail={`../detail_user/log/${user.id}`} onClickDelete={() => dispatch(deleteUser(user.id))} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
                : getAllUserLoading ? (
                    <p> Loading... </p>
                )
                    : (
                        <>{getAllUserError
                            ? getAllUserError
                            : <div className='position-absolute top-50 start-50 translate-middle'>
                                <img src={noData} alt="" style={{ 'width': '100%', 'height': '70vh' }} />
                            </div>
                        }</>
                    )
            }
        </div >

    )
}

export default (ListUser);