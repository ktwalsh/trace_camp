import React, { useState, useEffect } from 'react'
import { getAttendees } from '../eventWorker';
import { BrowserRouter, Link } from 'react-router-dom'



function Attendee({ match }) {
    const [attendees, setAttendees] = useState([])
    const parseAttendees = (attendees) => {
        return <tbody key={attendees.id}><tr><td >{attendees.profile.name}</td><td><Link to={`details/${attendees.id}`}>{attendees.status}</Link></td></tr></tbody>
    }
    useEffect(() => {
        getAttendees(match.params.event_id).then((response) => {
            setAttendees(response.data.attendees.map(parseAttendees))
        })
    }, [match.params.event_id])
    return (
        <div className="App">
                <table>
                    <thead>
                    <tr>
                        <th>Attendee Name</th>
                        <th>Attendee Status</th>
                    </tr>
                    </thead>
                    {attendees}
                </table>
        </div>
    )
}

export default Attendee