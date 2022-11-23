import React from "react";
import { ContSearchBar } from "../../../../components/atoms";
import { CardListDist, Header, NavBar } from "../../../../components/molekuls";

class ListDistPage extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="home-section">
                    <Header titleHeader="List Reseller" />
                    <ContSearchBar href="../Add_Distributor" btnCreate="Add Reseller" />
                    <CardListDist />
                </div >
            </>
        )
    }

}

export default ListDistPage;