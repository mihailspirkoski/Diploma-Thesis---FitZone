import React from "react";
import {useAuth} from "../HelperComponents/AuthContext";
import fzlogo from '../images/fzlogosmall.jpg'


function Navbar() {

    const {getUser, userIsAuthenticated, userLogout} = useAuth();
    const logout = () => {
        userLogout()
    }
    const enterMenuStyle = () => {
        return userIsAuthenticated() ? {"display": "none"} : {"display": "block"}
    }

    const logoutMenuStyle = () => {
        return userIsAuthenticated() ? {"display": "block"} : {"display": "none"}
    }

    const authorizedMenuStyle = () => {
        return userIsAuthenticated() ? {"display": "inline"} : {"display": "none"}
    }

    const getUserName = () => {
        const user = getUser()
        return user ? user.name : ''
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="http://localhost:3000/" className="navbar-brand zoll"><img src={fzlogo} alt=""/></a>
                <a className="navbar-brand zoll" href="http://localhost:3000/">FitZone</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"
                               href="http://localhost:3000/introduction">Introduction</a>
                        </li>
                        <li className="nav-item" style={authorizedMenuStyle()}>
                            <a className="nav-link active" aria-current="page"
                               href="http://localhost:3000/powerlifting">Powerlifting</a>
                        </li>
                        <li className="nav-item" style={authorizedMenuStyle()}>
                            <a className="nav-link active" aria-current="page"
                               href="http://localhost:3000/yoga">Yoga</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"
                               href="http://localhost:3000/tutorials">Tutorials</a>
                        </li>
                        <li className="nav-item" style={authorizedMenuStyle()}>
                            <a className="nav-link active" aria-current="page"
                               href="http://localhost:3000/history">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"
                               href="http://localhost:3000/about">About</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <a className="btn btn-outline-success" href="http://localhost:3000/login"
                           style={enterMenuStyle()}>Login</a> &nbsp; &nbsp;
                        <a className="btn btn-outline-primary" href="http://localhost:3000/register"
                           style={enterMenuStyle()}>Register</a>
                        <a className="btn btn-outline-secondary"
                           style={logoutMenuStyle()}>{`Hi ${getUserName()}`}</a>&nbsp; &nbsp;
                        <a className="btn btn-outline-danger" href="http://localhost:3000/" style={logoutMenuStyle()}
                           onClick={logout}>Logout</a>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;