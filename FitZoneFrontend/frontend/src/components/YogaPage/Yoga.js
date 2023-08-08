import React, {Component} from "react";
import AuthContext from "../HelperComponents/AuthContext";
import {fitZoneApi} from "../../repository/FitZoneApi";
import {handleLogError} from "../HelperComponents/Errors";
import WorkoutYoga from "./WorkoutYoga";

class Yoga extends Component {

    static contextType = AuthContext

    state = {
        workoutYoga: [],
        isWorkoutYogaLoading: false
    }

    componentDidMount() {
        const Auth = this.context
        const user = Auth.getUser()
        const isLoggedIn = Auth.userIsAuthenticated()

        this.setState({isLoggedIn})
        this.fetchData()

    }

    fetchData = () => {
        this.loadWorkoutYoga()
    }

    loadWorkoutYoga = () => {
        const Auth = this.context
        const user = Auth.getUser()
        var name = user.name.toString()
        this.setState({isWorkoutYogaLoading: true})
        fitZoneApi.getworkoutYoga(name)
            .then(response => {
                this.setState({workoutYoga: response.data})
            })
            .catch(error => {
                handleLogError(error)
            })
            .finally(() => {
                this.setState({isWorkoutYogaLoading: false})
            })
    }


    render() {
        return (
            <>
                <br/>
                <h1 className="text-center text-success bg-dark">Workout Yoga</h1>
                <br/>
                <div className="container text-center">
                    <div className="row">
                        <div className="col bg-info-subtle border">
                            <br/>
                            {/*bg-primary-subtle text-white*/}
                            <h2 className="bg-dark text-success">Last Workout</h2>
                            <br/>
                            <table className="table table-striped table-responsive border table-info">
                                <thead>
                                <tr>
                                    <th scope={"col"}>Date Created: {this.state.workoutYoga.date}</th>
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
                                    <td>{this.state.workoutYoga.mpmin}min</td>
                                    <td>{this.state.workoutYoga.mpsec}sec</td>
                                </tr>
                                <tr>
                                    <td>Raised Hands Pose</td>
                                    <td>{this.state.workoutYoga.rhpmin}min</td>
                                    <td>{this.state.workoutYoga.rhpsec}sec</td>
                                </tr>
                                <tr>
                                    <td>Tree Pose</td>
                                    <td>{this.state.workoutYoga.tpmin}min</td>
                                    <td>{this.state.workoutYoga.tpsec}sec</td>
                                </tr>
                                <tr>
                                    <td>Downward-Facing Dog Pose</td>
                                    <td>{this.state.workoutYoga.dfdmin}min</td>
                                    <td>{this.state.workoutYoga.dfdsec}sec</td>
                                </tr>
                                <tr>
                                    <td>Warrior I Pose</td>
                                    <td>{this.state.workoutYoga.wimin}min</td>
                                    <td>{this.state.workoutYoga.wisec}sec</td>
                                </tr>
                                <tr>
                                    <td>Warrior II Pose</td>
                                    <td>{this.state.workoutYoga.wiimin}min</td>
                                    <td>{this.state.workoutYoga.wiisec}sec</td>
                                </tr>
                                <tr>
                                    <td>Triangle Pose</td>
                                    <td>{this.state.workoutYoga.trimin}min</td>
                                    <td>{this.state.workoutYoga.trisec}sec</td>
                                </tr>
                                <tr>
                                    <td>Garland Pose</td>
                                    <td>{this.state.workoutYoga.gpmin}sec</td>
                                    <td>{this.state.workoutYoga.gpsec}sec</td>
                                </tr>
                                <tr>
                                    <td className="yogga">Balancing Poses</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Upward-Facing Dog Pose</td>
                                    <td>{this.state.workoutYoga.ufdmin}min</td>
                                    <td>{this.state.workoutYoga.ufdsec}sec</td>
                                </tr>
                                <tr>
                                    <td>Plank Pose</td>
                                    <td>{this.state.workoutYoga.ppmin}min</td>
                                    <td>{this.state.workoutYoga.ppsec}sec</td>
                                </tr>
                                <tr>
                                    <td className="yogga">Backbends Poses</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Bridge Pose</td>
                                    <td>{this.state.workoutYoga.bpmin}min</td>
                                    <td>{this.state.workoutYoga.bpsec}sec</td>
                                </tr>
                                <tr>
                                    <td>Cat-Cow Stretch Pose</td>
                                    <td>{this.state.workoutYoga.ccsmin}min</td>
                                    <td>{this.state.workoutYoga.ccssec}sec</td>
                                </tr>
                                <tr>
                                    <td className="yogga">Seated Poses</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Staff Pose</td>
                                    <td>{this.state.workoutYoga.spmin}min</td>
                                    <td>{this.state.workoutYoga.spsec}sec</td>
                                </tr>
                                <tr>
                                    <td>Cobbler's Pose</td>
                                    <td>{this.state.workoutYoga.cpmin}min</td>
                                    <td>{this.state.workoutYoga.cpsec}sec</td>
                                </tr>
                                <tr>
                                    <td>Half Lord Of The Fishes Pose</td>
                                    <td>{this.state.workoutYoga.hlfmin}min</td>
                                    <td>{this.state.workoutYoga.hlfsec}sec</td>
                                </tr>
                                <tr>
                                    <td>Seated Wide Angle Straddle Pose</td>
                                    <td>{this.state.workoutYoga.swamin}min</td>
                                    <td>{this.state.workoutYoga.swasec}sec</td>
                                </tr>
                                <tr>
                                    <td className="yogga">Supine Poses</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Child's Pose</td>
                                    <td>{this.state.workoutYoga.childmin}min</td>
                                    <td>{this.state.workoutYoga.childsec}sec</td>
                                </tr>
                                <tr>
                                    <td>Corpse Pose</td>
                                    <td>{this.state.workoutYoga.corpsemin}min</td>
                                    <td>{this.state.workoutYoga.corpsesec}sec</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col bg-warning-subtle border">
                            <br/>
                            {/*bg-primary-subtle text-white*/}
                            <h2 className="bg-dark text-success">Current Workout</h2>
                            <br/>
                            <div className="row border">
                                <p className="yogga">**Our recommended time for each yoga pose is between 2-4
                                    minutes**</p>
                            </div>
                            <div className="row border">
                                <WorkoutYoga/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Yoga;