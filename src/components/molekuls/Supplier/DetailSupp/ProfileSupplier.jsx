import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { deleteSupplier, getAllSupp } from '../../../../redux/actions/SupplierAction'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const ProfileSupp = ({ id, name_supp, address, mobile, photoProfile }) => {
    const {
        deleteSuppResult
    } = useSelector((state) => state.SupplierReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (deleteSuppResult !== false) {
            dispatch(getAllSupp())
            navigate('/supplier');
        }
    }, [deleteSuppResult, dispatch]);

    return (
        <>
            <div className="" key={id}>
                <div className="d-flex flex-row align-items-center">
                    <img src={photoProfile} alt={name_supp} className="img-profile" />
                    <div className="item-name ms-2">
                        <h5>{name_supp}</h5>
                    </div>
                </div>
                <div className="d-flex flex-column mt-2">
                    <div className='link_item_profile d-flex flex-row align-items-center'>
                        <div className="imageLink"><box-icon name='map-alt' color='#000000' style={{ lineHeight: "50px" }}></box-icon></div>
                        <span className="links_name_profile ms-2">{address}</span>
                    </div>
                    <div className='link_item_profile d-flex flex-row align-items-center'>
                        <div className="imageLink"><box-icon type='solid' name='contact' color='#000000' style={{ lineHeight: "50px" }}></box-icon></div>
                        <span className="links_name_profile ms-2">{mobile}</span>
                    </div>
                    <hr />
                </div>
                <div className="Link_Profile mt-3">
                    <Link to={`./recent/${id}`} className='link_item_profile d-flex flex-row align-items-center'>
                        <div className="imageLink"><box-icon name="list-ul" color='#000000' style={{ lineHeight: "50px" }}></box-icon></div>
                        <span className="links_name_profile ms-2">Recent Transaction</span>
                    </Link>
                    <Link to={`./productBySupp/${id}`} className='link_item_profile d-flex flex-row align-items-center'>
                        <div className="imageLink"><box-icon name="grid-alt" color='#000000' style={{ lineHeight: "50px" }}></box-icon></div>
                        <span className="links_name_profile ms-2">List Product</span>
                    </Link>
                    <hr />
                    <Link to={`./edit/${id}`} className='link_item_profile d-flex flex-row align-items-center'>
                        <div className="imageLink"><box-icon name="edit-alt" color={'green'} style={{ lineHeight: "50px" }}></box-icon></div>
                        <span className="links_name_profile ms-2" style={{ 'color': 'green' }}>Edit Supplier</span>
                    </Link>
                    <div className='link_item_profile d-flex flex-row align-items-center' style={{ 'cursor': 'pointer' }} onClick={() => dispatch(deleteSupplier(id))}>
                        <div className="imageLink"><box-icon name='trash' color={'red'} style={{ lineHeight: "50px" }}></box-icon></div>
                        <span className="links_name_profile ms-2" style={{ 'color': 'red' }}>Delete Supplier</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSupp