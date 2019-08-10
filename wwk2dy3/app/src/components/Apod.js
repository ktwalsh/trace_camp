import React, { useState } from 'react'
import useNasa from '../hooks/useNasa'

const API_KEY = 'xdmrFmM68ruLMzXiIAi3SfpVGJr5ofncLv7NxA45'

const style = {
    maxWidth: '500px',
    width: '100%'
}

const Apod = ({match}) => {
    const date = match.params.date

    const { data, loading, error } = useNasa(date)

    if (error) return <div>Error!!!!</div>
    if (loading) return <div>Loading...</div>

    return (
        <div style={style}>
            <h2>{data.title}</h2>
            <em>{data.copyright}</em>
            <br />
            <img style={style} src={data.url} alt={data.title} />
            <p>{data.explanation}</p>

        </div>
    )
    
}

export default Apod;