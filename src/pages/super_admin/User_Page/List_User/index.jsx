import React from "react";
import { ContSearchBar } from "../../../../components/atoms";
import { Header, ListUser, NavBar } from "../../../../components/molekuls";

class ListUserPage extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="home-section">
                    <Header titleHeader="List User" />
                    <ContSearchBar href="../create-user" btnCreate="Add User" />
                    <ListUser />
                </div >
            </>
        )
    }

}

export default ListUserPage;