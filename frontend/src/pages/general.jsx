/*
const { ReactDOM } = 'react-dom/client';
const { BrowserRouter, Routes, Route, Link } = 'react-router-dom';
const { App }  = "./app" */

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
/* 
const { createRoot } = 'react-dom/client';
const { BrowserRouter, Routes, Route, Link } = 'react-router-dom'; */

const Profile= () =>  
{
    return <h1>PROFILE PAGE</h1>
}

const Home= () =>
{
    return <h1>HOME PAGE</h1>
}

const Project= () =>
{
    return <h1>PROJECT PAGE</h1>
}

const App = () => 
{
  
    return(

      <BrowserRouter>

        {/* Navigation */}
        <nav>
            <Link to="/">Home</Link> {" "}
            <Link to="/Profile">Profile</Link> {" "}
            <Link to="/Project">Project</Link>
        </nav>

        {/* Routes */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Project" element={<Project />} />
        </Routes>

      </BrowserRouter>
    )
}


createRoot(document.getElementById('root')).render
( <App /> );