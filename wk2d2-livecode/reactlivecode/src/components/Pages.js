import React from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'

function Home() {
    return(
        <div>
            <h1>Home Pages</h1>
        </div>
    )
}

function About() {
    return(
        <div>
            <h1>About</h1>
        </div>
    )
}

function Contact() {
    return(
        <div>
            <h1>Contact</h1>
        </div>
    )
}

function Pages() {
    return(
        <BrowserRouter>
            <div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>                
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            </div>
        </BrowserRouter>
    )
}


export default Pages;