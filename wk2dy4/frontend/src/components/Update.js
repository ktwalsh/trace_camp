import React, {useState, useEffect} from 'react'
import Form from './Form'
import {getKick} from '../apiservice'

function Update(props) {
    const [kick, setKick] = useState({})

    useEffect(() => {
        const id = props.match.param.id
        getKick(id).then(res => {
            setKick(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center'>Update {kick.id}</h1>
            <Form form_data={kick}/>
        </div>
    )
}

export default Update;