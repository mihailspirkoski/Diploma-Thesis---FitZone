import React, {Component} from "react";
import AuthContext from "../HelperComponents/AuthContext";
import {fitZoneApi} from "../../repository/FitZoneApi";
import {handleLogError} from "../HelperComponents/Errors";


class WorkoutA extends Component {

    static contextType = AuthContext


    state = {

        s1repsSQ: 0, s2repsSQ: 0, s3repsSQ: 0, s4repsSQ: 0, s5repsSQ: 0, weightSQ: 0,
        s1repsBP: 0, s2repsBP: 0, s3repsBP: 0, s4repsBP: 0, s5repsBP: 0, weightBP: 0,
        s1repsBR: 0, s2repsBR: 0, s3repsBR: 0, s4repsBR: 0, s5repsBR: 0, weightBR: 0,
        s1repsPU: 0, s2repsPU: 0,
        s1repsDS: 0, s2repsDS: 0,

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
            s1repsBP, s2repsBP, s3repsBP, s4repsBP, s5repsBP, weightBP,
            s1repsBR, s2repsBR, s3repsBR, s4repsBR, s5repsBR, weightBR,
            s1repsPU, s2repsPU,
            s1repsDS, s2repsDS
        } = this.state

        const dto =
            {
                name,
                s1repsSQ, s2repsSQ, s3repsSQ, s4repsSQ, s5repsSQ, weightSQ,
                s1repsBP, s2repsBP, s3repsBP, s4repsBP, s5repsBP, weightBP,
                s1repsBR, s2repsBR, s3repsBR, s4repsBR, s5repsBR, weightBR,
                s1repsPU, s2repsPU, s1repsDS, s2repsDS
            }

        fitZoneApi.addworkoutA(dto)
            .then(response => {
                this.setState({
                    s1repsSQ: 0, s2repsSQ: 0, s3repsSQ: 0, s4repsSQ: 0, s5repsSQ: 0, weightSQ: 0,
                    s1repsBP: 0, s2repsBP: 0, s3repsBP: 0, s4repsBP: 0, s5repsBP: 0, weightBP: 0,
                    s1repsBR: 0, s2repsBR: 0, s3repsBR: 0, s4repsBR: 0, s5repsBR: 0, weightBR: 0,
                    s1repsPU: 0, s2repsPU: 0,
                    s1repsDS: 0, s2repsDS: 0,
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
                    <h6>Workout A</h6>
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
                        <label className="col-form-label">Bench Press Reps</label>
                    </div>
                    <div className="col">
                        <input type="number" id="s1repsBP" name="s1repsBP" required min="0" max="5"
                               className="form-control"
                               placeholder="Set1" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s2repsBP" name="s2repsBP" required min="0" max="5"
                               className="form-control"
                               placeholder="Set2" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s3repsBP" name="s3repsBP" required min="0" max="5"
                               className="form-control"
                               placeholder="Set3" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s4repsBP" name="s4repsBP" required min="0" max="5"
                               className="form-control"
                               placeholder="Set4" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s5repsBP" name="s5repsBP" required min="0" max="5"
                               className="form-control"
                               placeholder="Set5" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="weightBP" name="weightBP" required min="0" max="600" step="0.5"
                               className="form-control"
                               placeholder="0kg" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <label className="col-form-label">Barbell Row Reps</label>
                    </div>
                    <div className="col">
                        <input type="number" id="s1repsBR" name="s1repsBR" required min="0" max="5"
                               className="form-control"
                               placeholder="Set1" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s2repsBR" name="s2repsBR" required min="0" max="5"
                               className="form-control"
                               placeholder="Set2" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s3repsBR" name="s3repsBR" required min="0" max="5"
                               className="form-control"
                               placeholder="Set3" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s4repsBR" name="s4repsBR" required min="0" max="5"
                               className="form-control"
                               placeholder="Set4" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s5repsBR" name="s5repsBR" required min="0" max="5"
                               className="form-control"
                               placeholder="Set5" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="weightSQ" name="weightBR" required min="0" max="600" step="0.5"
                               className="form-control"
                               placeholder="0kg" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <label className="col-form-label">Push Ups Reps</label>
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
                        <label className="col-form-label">Dips Reps</label>
                    </div>
                    <div className="col">
                        <input type="number" id="s1repsDS" name="s1repsDS" required min="0" max="200"
                               className="form-control"
                               placeholder="Set1" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col">
                        <input type="number" id="s2repsDS" name="s2repsDS" required min="0" max="200"
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

export default WorkoutA