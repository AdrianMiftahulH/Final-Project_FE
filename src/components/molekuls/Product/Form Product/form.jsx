import React from 'react'
import { Jihan1 } from '../../../../assets'
import { Botton, Input } from '../../../atoms'
import './form.scss'

class FormProduct extends React.Component {
    render() {
        return (
            <div className="Body-Create-Product">
                <div className="Cont-Create-Product d-flex flex-row position-absolute top-50 start-50 translate-middle">
                    <div className="cont-img"><img src={Jihan1} alt="" className='Img-item' /> </div>
                    <div className="Body-form-product">
                        <div className="content-login container d-flex flex-column align-items-center justify-content-center">
                            <h2 className='mt-3'>Create Product</h2>
                            <div className="step-multi">
                                1 2
                            </div>
                            <form className="container">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label for="inputAddress" className="form-label">Product Name</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Example: Cofee" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputSupp" className="form-label">Supplier</label>
                                        <select id="inputSupp" className="form-select">
                                            <option>PT. Example 1</option>
                                            <option>PT. Example 2</option>
                                            <option>Add Other ...</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputKat" className="form-label">Category</label>
                                        <select id="inputKat" className="form-select">
                                            <option>Coffe</option>
                                            <option>Cup</option>
                                            <option>Add Other ...</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="inputDate" className="form-label">Date</label>
                                        <input type="date" className="form-control" id="inputDate" />
                                    </div>
                                    <div className="col-md-4">
                                        <label for="inputTotal" className="form-label">Total</label>
                                        <input type="number" className="form-control" id="inputTotal" />
                                    </div>
                                </div>
                                <div className="cont-btn-product">
                                    <button type="submit" className="btn btn-success">Back</button>
                                    <button type="submit" className="btn btn-primary">Next</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormProduct