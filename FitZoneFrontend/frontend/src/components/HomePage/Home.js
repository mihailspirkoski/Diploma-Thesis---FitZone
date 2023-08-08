import React from "react";
import home2 from '../images/home2.jpg'
import home3 from '../images/home3.jpg'


function Home() {


    return (
        <>
            <div className="bg-image1" style={{background: `url(${home2})`,}}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container text-center mt-2">
                    <br/>
                    <br/>
                    <h1 className="yogga text-warning-emphasis">Welcome to FitZone</h1>
                    <p className="yogga text-dark text-opacity-100">The best place for a beginner in the world of
                        powerlifting and yoga</p>
                    <a href="http://localhost:3000/introduction"
                       className="btn btn-warning btn-lg yogga border-3 border-dark text-warning-emphasis ">Get
                        Started</a>
                </div>
            </div>
            <div className="bg-image2" style={{background: `url(${home3})`,}}>

            </div>
        </>
    )
}


export default Home;