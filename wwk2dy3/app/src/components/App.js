import React from 'react'
import Apod from './Apod'
import Datepicker from './Datepicker'
import Apods from './Apods'
import {Route} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Route path="/apods"  exact component={Apods} />
            <Route path="/apods/:date" component={Datepicker} />
            <Route path="/apods/:date" component={Apod} />
        </div>
    )
}

export default App;