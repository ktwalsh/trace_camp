import React, { useState } from 'react'
import { postEvent } from '../eventWorker';

function CreateEvent() {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [nvalue, setNValue] = useState('')
    const [dvalue, setDValue] = useState('')

    function handleNChange(event) {
        setNValue(event.target.value)
    }

    function handleDChange(event) {
        setDValue(event.target.value)
    }

    function handleSubmit(event) {
         event.preventDefault()
        // setName(nvalue)
        // setDesc(dvalue)
        // setNValue('')
        // setDValue('')
        // postEvent(23072524980)
    }
    return (
        <div>
            <h1>YOU DO NOT HAVE PERMISSION TO PERFORM THIS ACTION</h1>
            {/* <h1>Create a new Event</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="Name of Event" value={nvalue} onChange={handleNChange} />
                <input type='text' placeholder="Decription of Event" value={dvalue} onChange={handleDChange} />
                <input type='submit' value='Create Event' />
            </form> */}
        </div>
    )
}

export default CreateEvent