import React from "react";
import about1 from "../images/about1.jpg";

function About() {


    return (
        <section>
            <br/>
            <h1 className="text-center text-success bg-dark">About FitZone</h1>
            <br/>
            <div className="container">
                <div className="row border bg-dark-subtle">
                    <div className="col-2">

                    </div>
                    <div className="col">
                        <img src={about1} className="img-fluid mt-2 mb-2 border border-dark" alt=""/>
                    </div>
                    <div className="col d-flex flex-column text-center border ">
                        <p className="mt-4 aboutpage"><b>FitZone</b> is a Web Application created by Mihail Spirkoski as
                            a
                            Bachelor's Degree Project, using Spring Boot as a backend and ReactJS as frontend.</p>
                        <p className="aboutpage">Inspired by millions of men and women around the world who are looking
                            to get into the world
                            of fitness but are not sure on where to start, FitZone offers them beginner's friendly
                            programs, enabling them to reach their goals.</p>
                        <p>If you haven't already, you can <a href="http://localhost:3000/register"
                                                              className="text-primary fw-bold">Sign up</a> here to fully
                            experience the possibilities this application has to offer, or if you have, you can <a
                                href="http://localhost:3000/login" className="text-success fw-bold">Login</a> here.</p>
                        <br/>
                        <p className="aboutpage">We wish you happy exercising<b>!!!</b></p>
                        <p className="aboutpage"><b>Sincerely,</b> the <b>FitZone</b> team</p>
                    </div>
                    <div className="col-2">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About