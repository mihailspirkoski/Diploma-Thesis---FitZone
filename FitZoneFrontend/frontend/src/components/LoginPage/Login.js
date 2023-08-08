import React, {Component} from "react";
import {Navigate} from "react-router-dom";
import AuthContext from "../HelperComponents/AuthContext";
import {fitZoneApi} from "../../repository/FitZoneApi";
import {handleLogError} from "../HelperComponents/Errors";

class Login extends Component {


    static contextType = AuthContext

    brojac = null;


    state = {
        username: '',
        password: '',
        isLoggedIn: false,
        isError: false
    }


    componentDidMount() {
        const Auth = this.context
        const isLoggedIn = Auth.userIsAuthenticated()
        this.setState({isLoggedIn})
        // this.brojac= setTimeout(() => this.refresh(), 2000 )
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {username, password} = this.state
        if (!(username && password)) {
            this.setState({isError: true})
            return
        }

        fitZoneApi.authenticate(username, password)
            .then(response => {
                const {name} = response.data
                const authdata = window.btoa(username + ':' + password)
                const user = {name, authdata}

                const Auth = this.context
                Auth.userLogin(user)

                this.setState({
                    username: '',
                    password: '',
                    isLoggedIn: true,
                    isError: false
                })
            })
            .catch(error => {
                handleLogError(error)
                this.setState({isError: true})
                // this.delay(5000)
                // this.refresh()
                this.brojac = setTimeout(() => this.refresh(), 2000)
            })
    }

    refresh = () => window.location.reload(true)


    render() {
        const {isLoggedIn, isError} = this.state
        if (isLoggedIn) {
            return <Navigate to={'/'}/>
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <section className="vh-50 gradient-custom">
                        <div className="container py-5 h-50">
                            <div className="row d-flex justify-content-center align-items-center h-50">
                                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                    <div className="card bg-dark text-white">
                                        <div className="card-body p-5 text-center">

                                            <div className="mb-md-5 mt-md-4 pb-5">

                                                <h2 className="fw-bold mb-2 text-uppercase text-success">Login</h2>
                                                <p className="text-white-50 mb-5">Please enter your username and
                                                    password!</p>

                                                <div className="form-outline form-blue mb-2">
                                                    <input type="text" name="username" onChange={this.handleInputChange}
                                                           placeholder="Username"
                                                           className="form-control form-control-lg" autoFocus/>
                                                    <label className="form-label">Username</label>
                                                </div>

                                                <div className="form-outline form-white mb-2">
                                                    <input type="password" name="password"
                                                           onChange={this.handleInputChange} placeholder="Password"
                                                           className="form-control form-control-lg"/>
                                                    <label className="form-label">Password</label>
                                                </div>

                                                <button className="btn btn-outline-success btn-lg px-5"
                                                        type="submit">Login
                                                </button>
                                            </div>
                                            <div>
                                                <p className="mb-0">Don't have an account? <a
                                                    href="http://localhost:3000/register"
                                                    className="text-blue-50 fw-bold">Sign
                                                    Up</a>
                                                </p>
                                                {isError &&
                                                    <p className="text-danger">The username or password provided are
                                                        incorrect!</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            )
        }
    }
}

export default Login;