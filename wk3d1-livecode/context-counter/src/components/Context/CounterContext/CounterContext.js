import React from 'react'

const CounterContext = React.createContext()

export default CounterContext

export const CounterProvider = props => {
    const [counter, setCounter] = React.useState(0)

    const value = {
        counter,
        setCounter
    }
    return <CounterContext.Provider value={value}>{props.children}</CounterContext.Provider>
}