import React, { useState, useEffect } from 'react'
import { getKick } from '../apiservice'
import {NavLink} from 'react-router-dom'
function Detail(props) {
    const [kick, setKick] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const id = props.match.params.id
        getKick(id).then((res => {
            setKick(res.data)
        }))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center'>Detail</h1>
            <h2>Blurb: {kick.blurb}</h2>
            <h2>Backers: {kick.backers}</h2>
            <h2>Pledged: {kick.pledged}</h2>
            <NavLink to={`update/${kick.id}`} className="btn btn-primary">Update Kickstarter</NavLink>
        </div>
    )
}

export default Detail;