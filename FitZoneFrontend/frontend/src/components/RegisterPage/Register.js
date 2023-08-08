import React, {Component} from "react";
import {Navigate} from "react-router-dom";
import AuthContext from "../HelperComponents/AuthContext";
import {fitZoneApi} from "../../repository/FitZoneApi";
import {handleLogError} from "../HelperComponents/Errors";


class Register extends Component {

    static contextType = AuthContext;

    brojac = null;

    state = {
        username: '',
        password: '',
        repeatpassword: '',
        isLoggedIn: false,
        isError: false,
        errorMessage: ''
    }

    componentDidMount() {
        const Auth = this.context
        const isLoggedIn = Auth.userIsAuthenticated()
        this.setState({isLoggedIn})
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

        const {username, password, repeatpassword} = this.state;
        if (!(username && password && repeatpassword)) {
            this.setState({
                isError: true,
                errorMessage: 'Please fill in all the fields!'
            })
            return
        }

        const user = {username, password, repeatpassword}
        fitZoneApi.register(user)
            .then(response => {
                const {name} = response.data;
                const authdata = window.btoa(username + ':' + password);
                const user = {name, authdata};

                const Auth = this.context
                Auth.userLogin(user)

                this.setState({
                    username: '',
                    password: '',
                    isLoggedIn: true,
                    isError: false,
                    errorMessage: ''
                })
            })
            .catch(error => {
                handleLogError(error)
                if (error.response && error.response.data) {
                    const errorData = error.response.data
                    let errorMessage = 'Invalid fields - passwords have to match'
                    if (errorData.status === 409) {
                        errorMessage = errorData.message
                    } else if (errorData.status === 400) {
                        errorMessage = errorData.errors[0].defaultMessage
                    }
                    this.setState({
                        isError: true,
                        errorMessage
                    })
                }
                this.brojac = setTimeout(() => this.refresh(), 2000)
            })
    }

    refresh = () => window.location.reload(true)

    render() {
        const {isLoggedIn, isError, errorMessage} = this.state
        if (isLoggedIn) {
            return <Navigate to='/'/>
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <section className="vh-50 gradient-custom">
                        <div className="container py-5 h-50">
                            <div className="row d-flex justify-content-center align-items-center h-50">
                                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                    <div className="card bg-dark text-white">
                                        <div className="card-body p-5 text-center">

                                            <div className="mb-md-2 mt-md-2 pb-5">

                                                <h2 className="fw-bold mb-2 text-uppercase text-primary">Sign Up</h2>
                                                <p className="text-white-50 mb-5">Please enter your desired username and
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

                                                <div className="form-outline form-white mb-2">
                                                    <input type="password" name="repeatpassword"
                                                           onChange={this.handleInputChange}
                                                           placeholder="Repeat Password"
                                                           className="form-control form-control-lg"/>
                                                    <label className="form-label">Repeat Password</label>
                                                </div>

                                                <button className="btn btn-outline-primary btn-lg px-5"
                                                        type="submit">Register
                                                </button>
                                            </div>
                                            <div>
                                                <p className="mb-0">Already have an account? <a
                                                    href="http://localhost:3000/login"
                                                    className="text-success fw-bold">Login</a>
                                                </p>
                                                {isError &&
                                                    <p className="text-danger">Username already exists, or passwords do
                                                        not match!</p>}
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


export default Register;