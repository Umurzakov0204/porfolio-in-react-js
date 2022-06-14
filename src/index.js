import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/main" element={ <App /> }>
                </Route>
                <Route path="about" element={<About />}>
                </Route>
                <Route path="projects" element={<Project />}>
                </Route>
                <Route path="contact" element={<Contact />}>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
