import React, { useState } from 'react'

const useForm = (initialValues, callback) => {
    const [values, setValues] = useState({ initialValues })

    const handleSubmit = (event) => {
        if (event) event.preventDefault()
        callback()
    }

    const handleChange = (event) => {
        event.persist()
        setValues((values) => ({ ...values, [event.target.name]: event.target.value }))
    }

    return {
        values,
        handleSubmit,
        handleChange,
        setValues
    }

}

export default useForm