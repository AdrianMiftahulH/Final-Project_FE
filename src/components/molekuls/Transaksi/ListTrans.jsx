import React, { useState, useEffect } from 'react'
import { api } from '../../../api/api'
import { noData } from '../../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { ActionDropdown } from '../../atoms';
import { TransAction } from '../../../redux/actions/Transaction';

const ListTrans = () => {
    const {
        getAllTransResult,
        getAllTransLoading,
        getAllTransError
    } = useSelector((state) => state.TransactionReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TransAction());
    }, [dispatch]);

    const deleteSupp = async (id) => {
        await api.delete(`/supplier/list-supp/delete/${id}`);
    }

    return (
        <div className="container mt-5">
            {getAllTransResult
                ? <div className="cont-table">
                    <table className="table container">
                        <thead>
                            <tr>
                                <th scope="col">Supplier / Reseller</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {getAllTransResult.map(supp => (
                                <tr key={supp.id} className="row-table-user">
                                    <td className='d-flex flex-row item'>
                                        <div><img src={`http://localhost:4000/${supp.logo_supp}`} alt="" className="img-user-list" /></div>
                                        {supp.name_supp}</td>
                                    <td>{supp.address}</td>
                                    <td>{supp.mobile}</td>
                                    <td>
                                        <ActionDropdown NameLink='Detail' linkItemDetail={`../detail supplier/recent/${supp.id}`} onClickDelete={() => deleteSupp(supp.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                : getAllTransLoading ? (
                    <p> Loading... </p>
                )
                    : (
                        <>{getAllTransError
                            ? getAllTransError
                            : <div className='position-absolute top-50 start-50 translate-middle'>
                                <img src={noData} alt="" style={{ 'width': '100%', 'height': '70vh' }} />
                            </div>
                        }</>
                    )
            }
        </div >
    )
}

export default ListTrans