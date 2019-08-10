import React, { useState, useEffect } from 'react'
import { listKick } from "../apiservice"
import { NavLink } from 'react-router-dom'

function List() {
    const [kick, setKick] = useState([])

    useEffect(() => {
        listKick().then((res) => {
            setKick(res.data)
        })
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center'>List</h1>
            <ul className='list-group'>
                {kick.map(item => (
                    <NavLink to={`/detail/${item.id}`} key={item.id}>
                        <li className="list-group-item">{item.blurb}</li>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default List;