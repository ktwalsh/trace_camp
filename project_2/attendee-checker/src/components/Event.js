import React, { useState, useEffect } from 'react'
import eventWorker, { getEvents } from '../eventWorker'
import { BrowserRouter, Link } from 'react-router-dom'

function Event({ match, history }) {
    const [eventData, setEventData] = useState([])

    const parseEvent = (event) => {
        return <tbody key={event.id}><tr><td><Link to={`/event/${event.id}/`}>{event.name.text}</Link></td><td>{event.description.text}</td></tr></tbody>
    }

    const handleClick = (event) => {
        // console.log(event)
        //history.push(`attendees/${event.id}`)
    }

    useEffect(() => {
        getEvents().then((response) => {
            // console.log(response.data.events)
            setEventData(response.data.events.map(parseEvent))
        }
        )
    }, [])
    return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name of Event</th>
                            <th>Description of Event</th>
                        </tr>
                    </thead>
                    {eventData}
                </table>
                <Link to="/create">Create a new Event</Link>
            </div>
    )
}

export default Event