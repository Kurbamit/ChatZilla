import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';

const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </Router>
    );
};

export default RouterComponent;