import React, { useEffect } from 'react'
import { noData } from '../../../../assets';
import { ActionDropdown } from '../../../atoms';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSupplier, getAllSupp } from '../../../../redux/actions/SupplierAction';

const CardListSupp = () => {
    const {
        getAllSuppResult,
        getAllSuppLoading,
        getAllSuppError,
        deleteSuppResult
    } = useSelector((state) => state.SupplierReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSupp());
    }, [dispatch]);


    useEffect(() => {
        if (deleteSuppResult) {
            dispatch(getAllSupp())
        }
    }, [deleteSuppResult, dispatch])

    return (
        <div className="container mt-5">
            {getAllSuppResult
                ? <div className="cont-table">
                    <table className="table container">
                        <thead>
                            <tr>
                                <th scope="col">Supplier</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {getAllSuppResult.map(supp => (
                                <tr key={supp.id} className="row-table-user">
                                    <td className='d-flex flex-row item'>
                                        <div><img src={`http://localhost:4000/${supp.logo_supp}`} alt="" className="img-user-list" /></div>
                                        {supp.name_supp}</td>
                                    <td>{supp.address}</td>
                                    <td>{supp.mobile}</td>
                                    <td>
                                        <ActionDropdown NameLink='Detail' linkItemDetail={`../detail_supplier/recent/${supp.id}`} onClickDelete={() => dispatch(deleteSupplier(supp.id))} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                : getAllSuppLoading ? (
                    <p> Loading... </p>
                )
                    : (
                        <>{getAllSuppError
                            ? getAllSuppError
                            : <div className='position-absolute top-50 start-50 translate-middle'>
                                <img src={noData} alt="" style={{ 'width': '100%', 'height': '70vh' }} />
                            </div>
                        }</>
                    )
            }
        </div >
    )
}

export default CardListSupp