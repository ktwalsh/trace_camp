import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'

function Home () {
    return (
        <div>
            <h1>Welcome to my EventBrite API website!</h1>
            <NavLink to="/myevents">Go to my events</NavLink>
            <br />
            <NavLink to="/allevents">See all events</NavLink>
        </div>

    )
}

export default Home