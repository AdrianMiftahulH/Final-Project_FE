import React from 'react'


class ContBarang extends React.Component {
    render() {
        return (
            <div class="container text-center">
                <div class="row row-cols-3">
                    <div class="col">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">Column</div>
                    <div class="col">Column</div>
                    <div class="col">Column</div>
                </div>
            </div>
        )
    }
}

export default ContBarang