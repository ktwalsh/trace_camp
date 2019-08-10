import React, { useState, useEffect } from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { getEventDetails, getVenue } from '../eventWorker'
import Moment from 'react-moment'

function EventDetail({ match }) {
    const [details, setDetails] = useState([])
    const [venue, setVenue] = useState('')
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [time, setTime] = useState('')
    // const parseDetails = (details) => {
    //     return <tr><td>{details.name.text}</td><td>{details.description.text}</td></tr>
    // }


    useEffect(() => {
        getEventDetails(match.params.event_id).then((response) => {
            console.log(response.data)
            setDetails(response.data)
            setName(response.data.name.text)
            setDesc(response.data.description.text)
            setTime(response.data.start.utc)
        })
    }, [match.params.event_id])

    useEffect(() => {
        getVenue(details.venue_id).then(response => {
            setVenue(response.data.address)
        })
    }, [details.venue_id])
    console.log(details)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Event Description</th>
                        <th>Date and Time of Event</th>
                        <th>Location</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{desc}</td>
                        <td><Moment format="MM/DD/YYYY HH:MM">{time}</Moment></td>
                        <td>{venue.localized_address_display}</td>
                        <td><Moment format="MM/DD/YYYY HH:MM">{details.created}</Moment></td>
                    </tr>
                </tbody>
            </table>
            <NavLink to={`/attendees/${details.id}/`}>View Attendees</NavLink>
        </div>
    )
}

export default EventDetail