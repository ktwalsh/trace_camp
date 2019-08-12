import React from 'react'
import CounterContext from 'components/Context/CounterContext/CounterContext';

const App = () => {
    const counterContext = React.useContext(CounterContext)
    return (
        <div>

            <button onClick={() => counterContext.setCounter(counter => counter - 1)}>
                Decrement
            </button>            
            {counterContext.counter}
            <button onClick={() => counterContext.setCounter(counter => counter + 1)}>
                Increment
            </button>
        </div>
    )
}

export default App