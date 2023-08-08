import React from "react";
import pi1 from '../images/intropl1.jpg'
import yi1 from '../images/introyoga1.jpg'

function Introduction() {

    return (
        <section>
            <br/>
            <h1 className="text-center text-success bg-dark">Programs Introduction</h1>
            <br/>
            <div className="container">
                <div className="row border bg-danger-subtle">
                    <div className="col-lg-6">
                        <img src={pi1} className="img-fluid mt-2" alt=""/>
                    </div>
                    <div className="col-lg-6 d-flex flex-column text-center">
                        <h4 className="mt-2">Powerlifting</h4>
                        <p><b>What is the 5×5 workout? </b>
                            The 5×5 workout is a strength and muscle building program that’s been around for over 60
                            years. It consists of compound barbell exercises like the Squat, Bench and Deadlift for 5
                            sets of 5 reps. The goal of each 5×5 workout is to increase the weight over time.

                            You do three workouts a week, with at least one rest day in between. The 5×5 workout has
                            been popular for decades because it’s simple, time-efficient, and very effective for gaining
                            strength and muscle mass as a drug-free lifter. The typical result you can expect if you do
                            FitZone 5×5 as laid out is an increase in strength and muscle mass. The magnitude of the
                            gains and time it takes varies. But I’ve never met someone who didn’t improve with this
                            program when done by the book. Do three workouts per week. Never train two days in a row or
                            do two workouts in a day. Wait one day before doing your next workout. This gives your body
                            time to recover, get stronger and build muscle so you can lift heavier next workout.
                            Alternate workout A and B each time you train. <mark>Warning:</mark> this program looks
                            easy, but isn’t. You’re adding weight every workout. This triggers your body to gain
                            strength and muscle to lift heavier the next workout. It’s the most effective way to train
                            but it’s hard work. Some people don’t have the mental fortitude for it. If you do, you’ll
                            gain.
                        </p>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row border bg-primary-subtle">
                    <div className="col-lg-6 d-flex flex-column text-center">
                        <h4 className="mt-2">Yoga</h4>
                        <p>As a new yoga student, you might feel overwhelmed by the number of poses and their
                            odd-sounding names. But yoga doesn't have to be complicated, just remember that your yoga
                            practice is a lifelong pursuit—giving you plenty of time to learn scores of postures.

                            Many basic yoga postures feel very familiar because our bodies bend and fold naturally into
                            poses. Mindfully and with conscious breaths, learn beginner yoga poses first. It's a good
                            idea to keep things simple when you're just starting. The yoga poses for beginners that are
                            outlined here are valuable enough to keep you occupied for a long time. Then, as you build
                            your practice, you can take on more challenging poses.</p>
                        <p>Yoga has various pose types based on how you move your body to complete them. Here are the
                            basic types of yoga poses.
                            <mark>Standing poses</mark> - often done first in a yoga class to "build heat" and warm you
                            up. <mark>Balancing poses</mark> - important way to build the core strength necessary for
                            many of yoga's more advanced postures. <mark>Backbends</mark> - essential for spinal health
                            and longevity. <mark>Seated poses</mark> - often focus on stretching the hips and
                            hamstrings, usually done toward the end of a yoga class after the body is warm. <mark>Supine
                                poses</mark> - continue the hip and hamstring work of the seated poses and provide
                            gentle back-bending, twisting, and inversion.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src={yi1} className="img-fluid mt-2" alt=""/>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row text-center">
                    <p>If you're ready to emerge into the world of powerlifting or yoga, make sure you <a
                        href="http://localhost:3000/register" className="text-primary fw-bold">Sign up</a> here or if
                        you already have an account <a href="http://localhost:3000/login"
                                                       className="text-success fw-bold">Login</a> here. Also make sure
                        to check the <a href="http://localhost:3000/tutorials"
                                        className="text-warning-emphasis fw-bold bg-warning">Tutorials Page</a> for
                        every execise in both our programs </p>
                </div>
            </div>
        </section>
    )
}

export default Introduction