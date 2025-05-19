import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

    return (
        <div>
            <h1>useEffect button from Functional component</h1>
            <button onClick= { () => setCount(count + 1) }>Clickme {count} times</button>
        </div>
    )
}

export default HookCounterOne