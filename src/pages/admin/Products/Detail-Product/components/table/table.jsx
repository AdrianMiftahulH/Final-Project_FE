import React from 'react'

const Table = () => {
    return (
        <>
            <div className="container mt-5">
                <h5><i class="fa-solid fa-calendar-days"></i> Recent Product</h5>
                <table className="table table-striped container mb-4">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Receiver</th>
                            <th scope="col">Date</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>25-03-2003</td>
                            <td>100</td>
                            <td><div className="d-inline px-2 text-bg-primary rounded-pill"> Add </div></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>25-03-2003</td>
                            <td>100</td>
                            <td><div className="d-inline px-2 text-bg-danger rounded-pill"> Drop </div></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ucup</td>
                            <td>25-03-2003</td>
                            <td>100</td>
                            <td><div className="d-inline px-2 text-bg-primary rounded-pill"> Add </div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table