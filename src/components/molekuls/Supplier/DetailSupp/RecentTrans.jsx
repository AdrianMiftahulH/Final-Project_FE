import React from 'react'

const RecentTransaction = () => {
    return (
        <>
            <div className="container">
                <h5><i className="fa-solid fa-calendar-days"></i> Recent Transaction</h5>
                <hr />
                <table className="table table-striped container mb-4">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Url</th>
                            <th scope="col">Code Status</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>25-03-2003</td>
                            <td>/Edit/1</td>
                            <td><div className="d-inline px-2 text-bg-primary rounded-pill"> 201 </div></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>25-03-2003</td>
                            <td>/Edit/</td>
                            <td><div className="d-inline px-2 text-bg-danger rounded-pill"> 400 </div></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>25-03-2003</td>
                            <td>/Edit/</td>
                            <td><div className="d-inline px-2 text-bg-primary rounded-pill"> 201 </div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default RecentTransaction