import React, {useState, useEffect} from 'react'
import useForm from "./hooks/useForm"
import { createKick } from '../apiservice'

function Form(props) {
    const { values, handleSubmit, handleChange, setValues } = useForm({
        blurb: "",
        backers: 0,
        pledged: 0,
        created: ""
    }, sendData)

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log(props);
        if (props.form_data) {
            setValues(props.form_data);
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, []);

    function sendData() {
        const payload = values
        const created = new Date()
        payload["created"] = created.toISOString()
        createKick(payload).then(res => {
            console.log(payload)

        })
    }

    const theForm = (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Blurb</label>
                <input className="form-control" type="text" name='blurb' value={values.blurb} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Backers</label>
                <input className="form-control" type="number" name='backers' value={values.backers} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Pledged</label>
                <input className="form-control" type="number" step="any" name='pledged' value={values.pledged} onChange={handleChange} />
            </div>
            <input className="form-control" type="submit" value="submit" />
        </form>

    )
    return loading ? <div>Loading</div> : theForm
}

export default Form;