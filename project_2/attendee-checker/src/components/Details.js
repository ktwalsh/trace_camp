import React, { useState, useEffect } from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { getAttendees, getDetails } from '../eventWorker';
import Moment from 'react-moment'

function Details({ match }) {
    const [details, setDetails] = useState([])
    const [profile, setProfile] = useState([])
    // const parseDetails = (details) => {
    //     return <tr><td></td><td></td></tr>
    // }
    useEffect(() => {
        getDetails(match.params.event_id, match.params.attendee_id).then((response) => {
            console.log(response.data)
            setProfile(response.data.profile)
            setDetails(response.data)
        })
    }, [])
    console.log(details.name)
    return (
        <div className="App">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>status</th>
                            <th>Order Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{profile.name}</td>
                            <td>{profile.email}</td>
                            <td>{details.status}</td>
                            <td><Moment format="MM/DD/YYYY HH:MM">{details.created}</Moment></td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default Details