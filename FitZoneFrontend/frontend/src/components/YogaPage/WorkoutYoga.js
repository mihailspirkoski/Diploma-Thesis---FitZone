import React, {Component} from "react";
import AuthContext from "../HelperComponents/AuthContext";
import {fitZoneApi} from "../../repository/FitZoneApi";
import {handleLogError} from "../HelperComponents/Errors";


class WorkoutYoga extends Component {

    static contextType = AuthContext


    state = {

        mpmin: 0, mpsec: 0, rhpmin: 0, rhpsec: 0, tpmin: 0, tpsec: 0, dfdmin: 0, dfdsec: 0, wimin: 0, wisec: 0,
        wiimin: 0, wiisec: 0, trimin: 0, trisec: 0, gpmin: 0, gpsec: 0, ufdmin: 0, ufdsec: 0, ppmin: 0, ppsec: 0,
        bpmin: 0, bpsec: 0, ccsmin: 0, ccssec: 0, spmin: 0, spsec: 0, cpmin: 0, cpsec: 0, hlfmin: 0, hlfsec: 0,
        swamin: 0, swasec: 0, childmin: 0, childsec: 0, corpsemin: 0, corpsesec: 0

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
            mpmin, mpsec, rhpmin, rhpsec, tpmin,
            tpsec, dfdmin, dfdsec, wimin, wisec, wiimin, wiisec,
            trimin, trisec, gpmin, gpsec, ufdmin, ufdsec, ppmin, ppsec,
            bpmin, bpsec, ccsmin, ccssec, spmin, spsec, cpmin, cpsec,
            hlfmin, hlfsec, swamin, swasec,
            childmin, childsec, corpsemin, corpsesec
        } = this.state

        const dto =
            {
                name,
                mpmin, mpsec, rhpmin, rhpsec, tpmin,
                tpsec, dfdmin, dfdsec, wimin, wisec, wiimin, wiisec,
                trimin, trisec, gpmin, gpsec, ufdmin, ufdsec, ppmin, ppsec,
                bpmin, bpsec, ccsmin, ccssec, spmin, spsec, cpmin, cpsec,
                hlfmin, hlfsec, swamin, swasec,
                childmin, childsec, corpsemin, corpsesec
            }

        fitZoneApi.addworkoutYoga(dto)
            .then(response => {
                this.setState({
                    mpmin: 0,
                    mpsec: 0,
                    rhpmin: 0,
                    rhpsec: 0,
                    tpmin: 0,
                    tpsec: 0,
                    dfdmin: 0,
                    dfdsec: 0,
                    wimin: 0,
                    wisec: 0,
                    wiimin: 0,
                    wiisec: 0,
                    trimin: 0,
                    trisec: 0,
                    gpmin: 0,
                    gpsec: 0,
                    ufdmin: 0,
                    ufdsec: 0,
                    ppmin: 0,
                    ppsec: 0,
                    bpmin: 0,
                    bpsec: 0,
                    ccsmin: 0,
                    ccssec: 0,
                    spmin: 0,
                    spsec: 0,
                    cpmin: 0,
                    cpsec: 0,
                    hlfmin: 0,
                    hlfsec: 0,
                    swamin: 0,
                    swasec: 0,
                    childmin: 0,
                    childsec: 0,
                    corpsemin: 0,
                    corpsesec: 0
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
                <div className="row align-items-center">
                    <h6>Standing Poses</h6>
                    <div className="col-2">
                        <label className="col-form-label">Mountain Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="mpmin" name="mpmin" required min="0" max="10" className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="mpsec" name="mpsec" required min="0" max="59" className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <label className="col-form-label">Raised Hands Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="rhpmin" name="rhpmin" required min="0" max="10"
                               className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="rhpsec" name="rhpsec" required min="0" max="59"
                               className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-2">
                        <label className="col-form-label">Tree Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="tpmin" name="tpmin" required min="0" max="10" className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="tpsec" name="tpsec" required min="0" max="59" className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <label className="col-form-label">Downward-Facing Dog Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="dfdmin" name="dfdmin" required min="0" max="10"
                               className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="dfdsec" name="dfdsec" required min="0" max="59"
                               className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-2">
                        <label className="col-form-label">Warrior I Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="wimin" name="wimin" required min="0" max="10" className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="wisec" name="wisec" required min="0" max="59" className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <label className="col-form-label">Warrior II Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="wiimin" name="wiimin" required min="0" max="10"
                               className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="wiisec" name="wiisec" required min="0" max="59"
                               className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-2">
                        <label className="col-form-label">Triangle Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="trimin" name="trimin" required min="0" max="10"
                               className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="trisec" name="trisec" required min="0" max="59"
                               className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <label className="col-form-label">Garland Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="gpmin" name="gpmin" required min="0" max="10" className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="gpsec" name="gpsec" required min="0" max="59" className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <br/>
                <div className="row align-items-center border">
                    <h6>Balancing Poses</h6>
                    <div className="col-2">
                        <label className="col-form-label">Upward-Facing Dog Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="ufdmin" name="ufdmin" required min="0" max="10"
                               className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="ufdsec" name="ufdsec" required min="0" max="59"
                               className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <label className="col-form-label">Plank Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="ppmin" name="ppmin" required min="0" max="10" className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="ppsec" name="ppsec" required min="0" max="59" className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="row align-items-center border">
                    <h6>Backbends Poses</h6>
                    <div className="col-2">
                        <label className="col-form-label">Bridge Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="bpmin" name="bpmin" required min="0" max="10" className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="bpsec" name="bpsec" required min="0" max="59" className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <label className="col-form-label">Cat-Cow Stretch Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="ccsmin" name="ccsmin" required min="0" max="10"
                               className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="ccssec" name="ccssec" required min="0" max="59"
                               className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <h6>Seated Poses</h6>
                    <div className="col-2">
                        <label className="col-form-label">Staff Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="spmin" name="spmin" required min="0" max="10" className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="spsec" name="spsec" required min="0" max="59" className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <label className="col-form-label">Cobbler's Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="cpmin" name="cpmin" required min="0" max="10" className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="cpsec" name="cpsec" required min="0" max="59" className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-2">
                        <label className="col-form-label">Half Lord Of The Fishes Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="hlfmin" name="hlfmin" required min="0" max="10"
                               className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="hlfsec" name="hlfsec" required min="0" max="59"
                               className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <label className="col-form-label">Seated Wide Angle Straddle Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="swamin" name="swamin" required min="0" max="10"
                               className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="swasec" name="swasec" required min="0" max="59"
                               className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div className="row align-items-center border">
                    <h6>Supine Poses</h6>
                    <div className="col-2">
                        <label className="col-form-label">Child's Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="childmin" name="childmin" required min="0" max="10"
                               className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="childsec" name="childsec" required min="0" max="59"
                               className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <label className="col-form-label">Corpse Pose</label>
                    </div>
                    <div className="col-2">
                        <input type="number" id="corpsemin" name="corpsemin" required min="0" max="10"
                               className="form-control"
                               placeholder="0 min" onChange={this.handleInputChange}/>
                    </div>
                    <div className="col-2">
                        <input type="number" id="corpsesec" name="corpsesec" required min="0" max="59"
                               className="form-control"
                               placeholder="0 sec" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        )
    }
}

export default WorkoutYoga