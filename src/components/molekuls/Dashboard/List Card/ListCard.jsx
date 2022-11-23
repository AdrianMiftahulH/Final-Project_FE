import React from 'react'
import './ListCard.scss'

const ListCardDashboard = () => {
    return (
        <div className="featured mt-3">
            <div className="featuredItem">
                <span className="featuredTitle">Product Item</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">9</span>
                    <span className="featuredMoneyRate">
                        Item
                    </span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Supplier</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">4</span>
                    <span className="featuredMoneyRate">
                        Supplier
                    </span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Reseller</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">2</span>
                    <span className="featuredMoneyRate">
                        Reseller
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ListCardDashboard