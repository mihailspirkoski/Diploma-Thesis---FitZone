import React, {Component, useContext} from "react";


const AuthContext = React.createContext();

class AuthProvider extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        const user = localStorage.getItem('user')
        this.setState({user})
    }

    getUser = () => {
        return JSON.parse(localStorage.getItem('user'));
    }

    userIsAuthenticated = () => {
        return localStorage.getItem('user') != null;
    }

    userLogin = user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.state({user});
    }

    userLogout = () => {
        localStorage.removeItem('user');
        this.state({user: null});

    }

    render() {
        const {children} = this.props;
        const {user} = this.state;
        const {getUser, userIsAuthenticated, userLogin, userLogout} = this;

        return (
            <AuthContext.Provider value={{user, getUser, userIsAuthenticated, userLogin, userLogout}}>
                {children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContext

export function useAuth() {
    return useContext(AuthContext)
}

export {AuthProvider}