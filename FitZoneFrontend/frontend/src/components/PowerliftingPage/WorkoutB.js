import React, {Component} from "react";
import AuthContext from "../HelperComponents/AuthContext";
import {fitZoneApi} from "../../repository/FitZoneApi";
import {handleLogError} from "../HelperComponents/Errors";


class WorkoutB extends Component {

    static contextType = AuthContext


    state = {

        s1repsSQ: 0, s2repsSQ: 0, s3repsSQ: 0, s4repsSQ: 0, s5repsSQ: 0, weightSQ: 0,
        s1repsOP: 0, s2repsOP: 0, s3repsOP: 0, s4repsOP: 0, s5repsOP: 0, weightOP: 0,
        s1repsDL: 0, weightDL: 0,
        s1repsPU: 0, s2repsPU: 0,
        s1repsCU: 0, s2repsCU: 0,

    }

    componentDidMount() {
        const Auth = this.context
        const user = Auth.getUser()
        const isLoggedIn = Auth.userIsAuthenticated()
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const Auth = this.context
        const user = Auth.getUser()
        var name = user.name.toString()
        name = name.toString();

        const {
            s1repsSQ, s2repsSQ, s3repsSQ, s4repsSQ, s5repsSQ, weightSQ,
            s1repsOP, s2repsOP, s3repsOP, s4repsOP, s5repsOP, weightOP,
            s1repsDL, weightDL,
            s1repsPU, s2repsPU,
            s1repsCU, s2repsCU
        } = this.state

        const dto =
            {
                name,
                s1repsSQ, s2repsSQ, s3repsSQ, s4repsSQ, s5repsSQ, weightSQ,
                s1repsOP, s2repsOP, s3repsOP, s4repsOP, s5repsOP, weightOP,
                s1repsDL, weightDL,
                s1repsPU, s2repsPU,
                s1repsCU, s2repsCU
            }

        fitZoneApi.addworkoutB(dto)
            .then(response => {
                this.setState({
                    s1repsSQ: 0, s2repsSQ: 0, s3repsSQ: 0, s4repsSQ: 0, s5repsSQ: 0, weightSQ: 0,
                    s1repsOP: 0, s2repsOP: 0, s3repsOP: 0, s4repsOP: 0, s5repsOP: 0, weightOP: 0,
                    s1repsDL: 0, weightDL: 0,
                    s1repsPU: 0, s2repsPU: 0,
                    s1repsCU: 0, s2repsCU: 0,
                })
                this.zomba()
            })
            .catch(error => {
                handleLogError(error)
            })

    }

    refresh = () => window.location.reload(true)

    zomba = () => {
        setTimeout(() => this.refresh(), 2100)
    }


    handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <p></p>
                </div>
                <div className="row align-items-center">
                    <h6>Workout B</h6>
                    <div className="col">
                        <label className="col-form-label">Squat Reps</label>
                    </div>
                    <div className="col">
                        <input type="number" id="s1repsSQ" name="s1repsSQ" required min="0" max="5"
                               className="form-control"
                               placeholder="Set1" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s2repsSQ" name="s2repsSQ" required min="0" max="5"
                               className="form-control"
                               placeholder="Set2" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s3repsSQ" name="s3repsSQ" required min="0" max="5"
                               className="form-control"
                               placeholder="Set3" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s4repsSQ" name="s4repsSQ" required min="0" max="5"
                               className="form-control"
                               placeholder="Set4" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s5repsSQ" name="s5repsSQ" required min="0" max="5"
                               className="form-control"
                               placeholder="Set5" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="weightSQ" name="weightSQ" required min="20" max="600" step="0.5"
                               className="form-control"
                               placeholder="0kg" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <label className="col-form-label">Overhead Press Reps</label>
                    </div>
                    <div className="col">
                        <input type="number" id="s1repsOP" name="s1repsOP" required min="0" max="5"
                               className="form-control"
                               placeholder="Set1" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s2repsOP" name="s2repsOP" required min="0" max="5"
                               className="form-control"
                               placeholder="Set2" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s3repsOP" name="s3repsOP" required min="0" max="5"
                               className="form-control"
                               placeholder="Set3" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s4repsOP" name="s4repsOP" required min="0" max="5"
                               className="form-control"
                               placeholder="Set4" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s5repsOP" name="s5repsOP" required min="0" max="5"
                               className="form-control"
                               placeholder="Set5" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="weightOP" name="weightOP" required min="0" max="600" step="0.5"
                               className="form-control"
                               placeholder="0kg" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <label className="col-form-label">Deadlift Reps</label>
                    </div>
                    <div className="col">
                        <input type="number" id="s1repsDL" name="s1repsDL" required min="0" max="5"
                               className="form-control"
                               placeholder="Set1" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                    <div className="col">
                        <input type="number" id="weightDL" name="weightDL" required min="0" max="600" step="0.5"
                               className="form-control"
                               placeholder="0kg" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <label className="col-form-label">Pull Ups Reps</label>
                    </div>
                    <div className="col">
                        <input type="number" id="s1repsPU" name="s1repsPU" required min="0" max="200"
                               className="form-control"
                               placeholder="Set1" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s2repsPU" name="s2repsPU" required min="0" max="200"
                               className="form-control"
                               placeholder="Set2" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <label className="col-form-label">Chin Ups Reps</label>
                    </div>
                    <div className="col">
                        <input type="number" id="s1repsCU" name="s1repsCU" required min="0" max="200"
                               className="form-control"
                               placeholder="Set1" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s2repsCU" name="s2repsCU" required min="0" max="200"
                               className="form-control"
                               placeholder="Set2" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-dark">Submit</button>
                <br/>
                <div>
                    <p></p>
                </div>

            </form>
        )
    }
}

export default WorkoutB