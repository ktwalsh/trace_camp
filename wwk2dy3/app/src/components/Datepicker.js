import React from 'react'
import moment from 'moment'
import {Route} from 'react-router-dom'

const Datepicker = ({match, history}) => {
    const date = match.params.date
    const today = moment().format('YYYY-MM-DD')
    const minDate = moment('1995-06-15').format('YYYY-MM-DD')

    const dateHandler = (event) => {
        const date = event.target.value
        history.push(`/apods/${date}`)
    }

    return (
        <div>
            <label htmlFor="date">Date: </label>

            <input onChange={dateHandler} type="date" id="start" value={date} min={minDate} max={today} />

        </div>
       
    )
}

export default Datepicker;