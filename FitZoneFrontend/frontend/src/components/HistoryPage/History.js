import React, {Component} from "react";
import AuthContext from "../HelperComponents/AuthContext";
import {fitZoneApi} from "../../repository/FitZoneApi";
import {handleLogError} from "../HelperComponents/Errors";


class History extends Component {

    static contextType = AuthContext

    state = {
        workoutAall: [],
        workoutBall: [],
        workoutYogaall: [],
        isLoggedIn: true,
        isWorkoutsALoading: false,
        isWorkoutsBLoading: false,
        isWorkoutsYogaLoading: false
    }

    componentDidMount() {
        const Auth = this.context
        const user = Auth.getUser()
        const isLoggedIn = Auth.userIsAuthenticated()

        this.setState({isLoggedIn})
        this.fetchData()

    }

    fetchData = () => {
        this.loadWorkoutsA()
        this.loadWorkoutsB()
        this.loadWorkoutsYoga()
    }

    loadWorkoutsA = () => {
        const Auth = this.context
        const user = Auth.getUser()
        var name = user.name.toString()
        this.setState({isWorkoutsALoading: true})
        fitZoneApi.getAllworkoutA(name)
            .then(response => {
                this.setState({workoutAall: response.data})
            })
            .catch(error => {
                handleLogError(error)
            })
            .finally(() => {
                this.setState({isWorkoutsALoading: false})
            })
    }


    loadWorkoutsB = () => {
        const Auth = this.context
        const user = Auth.getUser()
        var name = user.name.toString()
        this.setState({isWorkoutsBLoading: true})
        fitZoneApi.getAllworkoutB(name)
            .then(response => {
                this.setState({workoutBall: response.data})
            })
            .catch(error => {
                handleLogError(error)
            })
            .finally(() => {
                this.setState({isWorkoutsBLoading: false})
            })
    }


    loadWorkoutsYoga = () => {
        const Auth = this.context
        const user = Auth.getUser()
        var name = user.name.toString()
        this.setState({isWorkoutsYogaLoading: true})
        fitZoneApi.getAllworkoutYoga(name)
            .then(response => {
                this.setState({workoutYogaall: response.data})
            })
            .catch(error => {
                handleLogError(error)
            })
            .finally(() => {
                this.setState({isWorkoutsYogaLoading: false})
            })
    }


    render() {
        return (
            <>
                <br/>
                <h1 className="text-center text-success bg-dark">Workouts History</h1>
                <br/>
                <div className="container text-center">
                    <div className="row bg-info-subtle border">
                        <div className="col border">
                            <br/>
                            {/*bg-primary-subtle text-white*/}
                            <h2 className="bg-dark text-success">Workouts A</h2>
                            <br/>
                            {this.state.workoutAall.map((workoutA, date) => {
                                return (
                                    <table key={date}
                                           className="table table-striped table-responsive border table-info">
                                        <thead>
                                        <tr>
                                            <th scope={"col"}>Date Created: {workoutA.date}</th>
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
                                            <td>{workoutA.s1repsSQ}</td>
                                            <td>{workoutA.s2repsSQ}</td>
                                            <td>{workoutA.s3repsSQ}</td>
                                            <td>{workoutA.s4repsSQ}</td>
                                            <td>{workoutA.s5repsSQ}</td>
                                            <td>{workoutA.weightSQ} kg</td>
                                        </tr>
                                        <tr>
                                            <td>Bench Press Reps:</td>
                                            <td>{workoutA.s1repsBP}</td>
                                            <td>{workoutA.s2repsBP}</td>
                                            <td>{workoutA.s3repsBP}</td>
                                            <td>{workoutA.s4repsBP}</td>
                                            <td>{workoutA.s5repsBP}</td>
                                            <td>{workoutA.weightBP} kg</td>
                                        </tr>
                                        <tr>
                                            <td>Barbell Row Reps:</td>
                                            <td>{workoutA.s1repsBR}</td>
                                            <td>{workoutA.s2repsBR}</td>
                                            <td>{workoutA.s3repsBR}</td>
                                            <td>{workoutA.s4repsBR}</td>
                                            <td>{workoutA.s5repsBR}</td>
                                            <td>{workoutA.weightBR} kg</td>
                                        </tr>
                                        <tr>
                                            <td>Push Ups Reps:</td>
                                            <td>{workoutA.s1repsBR}</td>
                                            <td>{workoutA.s2repsBR}</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Dips Reps:</td>
                                            <td>{workoutA.s1repsBR}</td>
                                            <td>{workoutA.s2repsBR}</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                );
                            })}
                        </div>
                        <div className="col border">
                            <br/>
                            <h2 className="bg-dark text-success">Workouts B</h2>
                            <br/>
                            {this.state.workoutBall.map((workoutB, date) => {
                                return (
                                    <table key={date}
                                           className="table table-striped table-responsive border table-info">
                                        <thead>
                                        <tr>
                                            <th scope={"col"}>Date Created: {workoutB.date}</th>
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
                                            <td>{workoutB.s1repsSQ}</td>
                                            <td>{workoutB.s2repsSQ}</td>
                                            <td>{workoutB.s3repsSQ}</td>
                                            <td>{workoutB.s4repsSQ}</td>
                                            <td>{workoutB.s5repsSQ}</td>
                                            <td>{workoutB.weightSQ} kg</td>
                                        </tr>
                                        <tr>
                                            <td>Overhead Press Reps:</td>
                                            <td>{workoutB.s1repsOP}</td>
                                            <td>{workoutB.s2repsOP}</td>
                                            <td>{workoutB.s3repsOP}</td>
                                            <td>{workoutB.s4repsOP}</td>
                                            <td>{workoutB.s5repsOP}</td>
                                            <td>{workoutB.weightOP} kg</td>
                                        </tr>
                                        <tr>
                                            <td>Deadlift Reps:</td>
                                            <td>{workoutB.s1repsDL}</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>{workoutB.weightDL} kg</td>
                                        </tr>
                                        <tr>
                                            <td>Pull Ups Reps:</td>
                                            <td>{workoutB.s1repsPU}</td>
                                            <td>{workoutB.s2repsPU}</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Chin Ups Reps:</td>
                                            <td>{workoutB.s1repsCU}</td>
                                            <td>{workoutB.s2repsCU}</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                );
                            })}
                        </div>
                        <div className="col border">
                            <br/>
                            <h2 className="bg-dark text-success">Workouts Yoga</h2>
                            <br/>
                            {this.state.workoutYogaall.map((workoutYoga, date) => {
                                return (
                                    <table key={date}
                                           className="table table-striped table-responsive border table-info">
                                        <thead>
                                        <tr>
                                            <th scope={"col"}>Date Created: {workoutYoga.date}</th>
                                            <th>Minutes</th>
                                            <th>Seconds</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="yogga">Standing Poses</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Mountain Pose</td>
                                            <td>{workoutYoga.mpmin}min</td>
                                            <td>{workoutYoga.mpsec}sec</td>
                                        </tr>
                                        <tr>
                                            <td>Raised Hands Pose</td>
                                            <td>{workoutYoga.rhpmin}min</td>
                                            <td>{workoutYoga.rhpsec}sec</td>
                                            &nbsp;
                                        </tr>
                                        <tr>
                                            <td>Tree Pose</td>
                                            <td>{workoutYoga.tpmin}min</td>
                                            <td>{workoutYoga.tpsec}sec</td>
                                        </tr>
                                        <tr>
                                            <td>Downward-Facing Dog Pose</td>
                                            <td>{workoutYoga.dfdmin}min</td>
                                            <td>{workoutYoga.dfdsec}sec</td>
                                        </tr>
                                        <tr>
                                            <td>Warrior I Pose</td>
                                            <td>{workoutYoga.wimin}min</td>
                                            <td>{workoutYoga.wisec}sec</td>
                                        </tr>
                                        <tr>
                                            <td>Warrior II Pose</td>
                                            <td>{workoutYoga.wiimin}min</td>
                                            <td>{workoutYoga.wiisec}sec</td>
                                        </tr>
                                        <tr>
                                            <td>Triangle Pose</td>
                                            <td>{workoutYoga.trimin}min</td>
                                            <td>{workoutYoga.trisec}sec</td>
                                        </tr>
                                        <tr>
                                            <td>Garland Pose</td>
                                            <td>{workoutYoga.gpmin}min</td>
                                            <td>{workoutYoga.gpsec}sec</td>
                                        </tr>
                                        <tr>
                                            <td className="yogga">Balancing Poses</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Upward-Facing Dog Pose</td>
                                            <td>{workoutYoga.ufdmin}min</td>
                                            <td>{workoutYoga.ufdsec}sec</td>
                                        </tr>
                                        <tr>
                                            <td>Plank Pose</td>
                                            <td>{workoutYoga.ppmin}min</td>
                                            <td>{workoutYoga.ppsec}sec</td>
                                        </tr>
                                        <tr>
                                            <td className="yogga">Backbends Poses</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Bridge Pose</td>
                                            <td>{workoutYoga.bpmin}min</td>
                                            <td>{workoutYoga.bpsec}sec</td>
                                        </tr>
                                        <tr>
                                            <td>Cat-Cow Stretch Pose</td>
                                            <td>{workoutYoga.ccsmin}min</td>
                                            <td>{workoutYoga.ccssec}sec</td>
                                        </tr>
                                        <tr>
                                            <td className="yogga">Seated Poses</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Staff Pose</td>
                                            <td>{workoutYoga.spmin}min</td>
                                            <td>{workoutYoga.spsec}sec</td>
                                        </tr>
                                        <tr>
                                            <td>Cobbler's Pose</td>
                                            <td>{workoutYoga.cpmin}min</td>
                                            <td>{workoutYoga.cpsec}sec</td>
                                        </tr>
                                        <tr>
                                            <td>Half Lord Of The Fishes Pose</td>
                                            <td>{workoutYoga.hlfmin}min</td>
                                            <td>{workoutYoga.hlfsec}sec</td>
                                        </tr>
                                        <tr>
                                            <td>Seated Wide Angle Straddle Pose</td>
                                            <td>{workoutYoga.swamin}min</td>
                                            <td>{workoutYoga.swasec}sec</td>
                                        </tr>
                                        <tr>
                                            <td className="yogga">Supine Poses</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Child's Pose</td>
                                            <td>{workoutYoga.childmin}min</td>
                                            <td>{workoutYoga.childsec}sec</td>
                                        </tr>
                                        <tr>
                                            <td>Corpse Pose</td>
                                            <td>{workoutYoga.corpsemin}min</td>
                                            <td>{workoutYoga.corpsesec}sec</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </>
            // <div>
            //     <div>
            //         <p>Workouts A</p>
            //         {this.state.workoutAall.map((workoutA, date) => {
            //             return (
            //                 <table key={date}>
            //                     <thead>
            //                     <tr>
            //                         <th scope={"col"}>Date Created {workoutA.date}</th>
            //                     </tr>
            //                     </thead>
            //                     <tbody>
            //                     <tr>
            //                         <td>Bench Press Set Reps:</td>
            //                         <td>{workoutA.s1repsBP}</td>
            //                         <td>{workoutA.s2repsBP}</td>
            //                         <td>{workoutA.s3repsBP}</td>
            //                         <td>{workoutA.s4repsBP}</td>
            //                         <td>{workoutA.s5repsBP}</td>
            //                         <td>{workoutA.weightBP} kg</td>
            //                     </tr>
            //
            //                     </tbody>
            //                 </table>
            //             );
            //         })}
            //     </div>
            //     <br/>
            //     <div>
            //         <p>Workouts B</p>
            //         {this.state.workoutBall.map((workoutB, date) => {
            //             return (
            //                 <table key={date}>
            //                     <thead>
            //                     <tr>
            //                         <th scope={"col"}>Date Created {workoutB.date}</th>
            //                     </tr>
            //                     </thead>
            //                     <tbody>
            //                     <tr>
            //                         <td>Overhead Press Set Reps:</td>
            //                         <td>{workoutB.s1repsOP}</td>
            //                         <td>{workoutB.s2repsOP}</td>
            //                         <td>{workoutB.s3repsOP}</td>
            //                         <td>{workoutB.s4repsOP}</td>
            //                         <td>{workoutB.s5repsOP}</td>
            //                         <td>{workoutB.weightOP} kg</td>
            //                     </tr>
            //                     </tbody>
            //                 </table>
            //             );
            //         })}
            //     </div>
            //     <br/>
            //     <div>
            //         <p>Workouts Yoga</p>
            //         {this.state.workoutYogaall.map((workoutYoga, date) => {
            //             return (
            //                 <table key={date}>
            //                     <thead>
            //                     <tr>
            //                         <th scope={"col"}>Date Created {workoutYoga.date}</th>
            //                     </tr>
            //                     </thead>
            //                     <tbody>
            //                     <tr>
            //                         <td>Mountain Pose</td>
            //                         <td>{workoutYoga.mpmin}</td>
            //                         <td>{workoutYoga.mpsec}</td>
            //                     </tr>
            //                     <tr>
            //                         <td>Raised Hands Pose</td>
            //                         <td>{workoutYoga.rhpmin}</td>
            //                         <td>{workoutYoga.rhpsec}</td>
            //                     </tr>
            //                     <tr>
            //                         <td>Tree Pose</td>
            //                         <td>{workoutYoga.tpmin}</td>
            //                         <td>{workoutYoga.tpsec}</td>
            //                     </tr>
            //                     </tbody>
            //                 </table>
            //             );
            //         })}
            //     </div>
            // </div>
        );
    }
}

export default History;