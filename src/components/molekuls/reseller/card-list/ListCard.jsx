import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../../../api/api';
import { noData } from '../../../../assets';
import { ResellerAction } from '../../../../redux/actions/ResellerAction';
import { ActionDropdown } from '../../../atoms';

const CardListDist = () => {
    const {
        getAllRessResult,
        getAllRessLoading,
        getAllRessError
    } = useSelector((state) => state.ResellerReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ResellerAction());
    }, [dispatch]);

    const deleteDist = async (id) => {
        await api.delete(`/reseller/delete//${id}`);

    }

    return (
        <div className="container mt-5">
            {getAllRessResult
                ?
                <div className="cont-table">
                    <table className="table container">
                        <thead>
                            <tr>
                                <th scope="col">Reseller</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {getAllRessResult.map(dist => (
                                <tr key={dist.id} className="row-table-user">
                                    <td>{dist.name_dist}</td>
                                    <td>{dist.address}</td>
                                    <td>{dist.mobile}</td>
                                    <td>
                                        <ActionDropdown NameLink='Edit' linkItemDetail={`../Edit/${dist.id}`} onClickDelete={() => deleteDist(dist.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                : getAllRessLoading ? (
                    <p> Loading... </p>
                )
                    : (
                        <>{getAllRessError
                            ? getAllRessError
                            : <div className='position-absolute top-50 start-50 translate-middle'>
                                <img src={noData} alt="" style={{ 'width': '100%', 'height': '70vh' }} />
                            </div>
                        }</>
                    )
            }
        </div >
    )
}

export default CardListDist