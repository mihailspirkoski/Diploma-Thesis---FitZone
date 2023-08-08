import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {AuthProvider} from "../HelperComponents/AuthContext";
import Home from "../HomePage/Home";
import Powerlifting from "../PowerliftingPage/Powerlifting";
import Yoga from "../YogaPage/Yoga";
import Tutorials from "../TutorialsPage/Tutorials";
import History from "../HistoryPage/History";
import Login from "../LoginPage/Login";
import Register from "../RegisterPage/Register";
import Navbar from "../Navbar/Navbar";
import About from "../AboutPage/About";
import Introduction from "../IntroductionPage/Introduction";
import Footer from "../Footer/Footer";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"


function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='powerlifting' element={<Powerlifting/>}/>
                    <Route path='yoga' element={<Yoga/>}/>
                    <Route path='tutorials' element={<Tutorials/>}/>
                    <Route path='history' element={<History/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='introduction' element={<Introduction/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                <Footer/>
            </Router>
        </AuthProvider>
    );
}

export default App;
