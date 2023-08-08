import React, {Component} from "react";
import AuthContext from "../HelperComponents/AuthContext";
import {fitZoneApi} from "../../repository/FitZoneApi";
import {handleLogError} from "../HelperComponents/Errors";
import WorkoutA from "./WorkoutA";
import WorkoutB from "./WorkoutB";

class Powerlifting extends Component {

    static contextType = AuthContext


    state = {
        workoutA: [],
        workoutB: [],
        isLoggedIn: true,
        isWorkoutALoading: false,
        isWorkoutBLoading: false,
    }

    componentDidMount() {
        const Auth = this.context
        const user = Auth.getUser()
        const isLoggedIn = Auth.userIsAuthenticated()

        this.setState({isLoggedIn})
        this.fetchData()

    }

    fetchData = () => {
        this.loadWorkoutA()
        this.loadWorkoutB()
    }

    loadWorkoutA = () => {
        const Auth = this.context
        const user = Auth.getUser()
        var name = user.name.toString()
        this.setState({isWorkoutALoading: true})
        fitZoneApi.getworkoutA(name)
            .then(response => {
                this.setState({workoutA: response.data})
            })
            .catch(error => {
                handleLogError(error)
            })
            .finally(() => {
                this.setState({isWorkoutALoading: false})
            })
    }

    loadWorkoutB = () => {
        const Auth = this.context
        const user = Auth.getUser()
        var name = user.name.toString()
        this.setState({isWorkoutBLoading: true})
        fitZoneApi.getworkoutB(name)
            .then(response => {
                this.setState({workoutB: response.data})
            })
            .catch(error => {
                handleLogError(error)
            })
            .finally(() => {
                this.setState({isWorkoutBLoading: false})
            })
    }


    render() {
        return (
            <>
                <br/>
                <h1 className="text-center text-success bg-dark">Workout Powerlifting</h1>
                <br/>
                <div className="container text-center">
                    <div className="row">
                        <div className="col bg-info-subtle border">
                            <br/>
                            {/*bg-primary-subtle text-white*/}
                            <h2 className="bg-dark text-success">Last Workout A/B</h2>
                            <br/>
                            <div className="row border">
                                <h6>Workout A</h6>
                                <table className="table table-striped table-responsive border table-info">
                                    <thead>
                                    <tr>
                                        <th scope={"col"}>Date Created: {this.state.workoutA.date}</th>
                                        <th>Set 1</th>
                                        <th>Set 2</th>
                                        <th>Set 3</th>
                                        <th>Set 4</th>
                                        <th>Set 5</th>
                                        <th>Weight Kg</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Squat Reps:</td>
                                        <td>{this.state.workoutA.s1repsSQ}</td>
                                        <td>{this.state.workoutA.s2repsSQ}</td>
                                        <td>{this.state.workoutA.s3repsSQ}</td>
                                        <td>{this.state.workoutA.s4repsSQ}</td>
                                        <td>{this.state.workoutA.s5repsSQ}</td>
                                        <td>{this.state.workoutA.weightSQ} kg</td>
                                    </tr>
                                    <tr>
                                        <td>Bench Press Reps:</td>
                                        <td>{this.state.workoutA.s1repsBP}</td>
                                        <td>{this.state.workoutA.s2repsBP}</td>
                                        <td>{this.state.workoutA.s3repsBP}</td>
                                        <td>{this.state.workoutA.s4repsBP}</td>
                                        <td>{this.state.workoutA.s5repsBP}</td>
                                        <td>{this.state.workoutA.weightBP} kg</td>
                                    </tr>
                                    <tr>
                                        <td>Barbell Row Reps:</td>
                                        <td>{this.state.workoutA.s1repsBR}</td>
                                        <td>{this.state.workoutA.s2repsBR}</td>
                                        <td>{this.state.workoutA.s3repsBR}</td>
                                        <td>{this.state.workoutA.s4repsBR}</td>
                                        <td>{this.state.workoutA.s5repsBR}</td>
                                        <td>{this.state.workoutA.weightBR} kg</td>
                                    </tr>
                                    <tr>
                                        <td>Push Ups Reps:</td>
                                        <td>{this.state.workoutA.s1repsPU}</td>
                                        <td>{this.state.workoutA.s2repsPU}</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>Dips Reps:</td>
                                        <td>{this.state.workoutA.s1repsDS}</td>
                                        <td>{this.state.workoutA.s2repsDS}</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br/>
                            <div className="row border">
                                <h6>Workout B</h6>
                                <table className="table table-striped table-responsive border table-info">
                                    <thead>
                                    <tr>
                                        <th scope={"col"}>Date Created: {this.state.workoutB.date}</th>
                                        <th>Set 1</th>
                                        <th>Set 2</th>
                                        <th>Set 3</th>
                                        <th>Set 4</th>
                                        <th>Set 5</th>
                                        <th>Weight Kg</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Squat Reps:</td>
                                        <td>{this.state.workoutB.s1repsSQ}</td>
                                        <td>{this.state.workoutB.s2repsSQ}</td>
                                        <td>{this.state.workoutB.s3repsSQ}</td>
                                        <td>{this.state.workoutB.s4repsSQ}</td>
                                        <td>{this.state.workoutB.s5repsSQ}</td>
                                        <td>{this.state.workoutB.weightSQ} kg</td>
                                    </tr>
                                    <tr>
                                        <td>Overhead Press Reps:</td>
                                        <td>{this.state.workoutB.s1repsOP}</td>
                                        <td>{this.state.workoutB.s2repsOP}</td>
                                        <td>{this.state.workoutB.s3repsOP}</td>
                                        <td>{this.state.workoutB.s4repsOP}</td>
                                        <td>{this.state.workoutB.s5repsOP}</td>
                                        <td>{this.state.workoutB.weightOP} kg</td>
                                    </tr>
                                    <tr>
                                        <td>Deadlift Reps:</td>
                                        <td>{this.state.workoutB.s1repsDL}</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                        <td>{this.state.workoutB.weightDL} kg</td>
                                    </tr>
                                    <tr>
                                        <td>Pull Ups Reps:</td>
                                        <td>{this.state.workoutB.s1repsPU}</td>
                                        <td>{this.state.workoutB.s2repsPU}</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>Chin Ups Reps:</td>
                                        <td>{this.state.workoutB.s1repsCU}</td>
                                        <td>{this.state.workoutB.s2repsCU}</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col bg-warning-subtle border">
                            <br/>
                            {/*bg-primary-subtle text-white*/}
                            <h2 className="bg-dark text-success">Current Workout A/B</h2>
                            <br/>
                            <div className="row border">
                                <p className=" yogga">**Alternate workout A and B each time you train**</p>
                                <p className="yogga">**Recommended starting weights: Squat, Bench Press and Overhead
                                    Press - 20kg; Barbell Row - 30kg; Deadlift - 40kg**</p>
                                <p className=" yogga">**Increase the weight for 2.5kg every workout on each exercise
                                    where you completed five reps on each set, for Deadlift increase it by 5kg**</p>
                            </div>
                            <br/>
                            <div className="row border">
                                <WorkoutA/>
                            </div>
                            <br/>
                            <br/>
                            <div className="row border">
                                <WorkoutB/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Powerlifting;