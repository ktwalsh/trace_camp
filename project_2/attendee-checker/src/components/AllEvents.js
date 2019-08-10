import React, { useState, useEffect } from 'react'
import eventWorker, { getAllEvents } from '../eventWorker'
import { BrowserRouter, NavLink } from 'react-router-dom'

function Event({match, history}) {
    const [eventData, setEventData] = useState([])

    const parseEvent = (event) => {
    return <tbody key={event.id}><tr><td><NavLink to={`/event/${event.id}/`}>{event.name.text}</NavLink></td><td>{event.description.text}</td></tr></tbody>
    }

    const handleClick = (event) => {
        // console.log(event)
        //history.push(`attendees/${event.id}`)
    }

    useEffect(() => {
        getAllEvents().then((response) => {
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
            </div>
    )
}

export default Event